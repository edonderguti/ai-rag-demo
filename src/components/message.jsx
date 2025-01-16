"use client";

import { memo, useState } from "react";
import cx from "classnames";
import equal from "fast-deep-equal";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { PreviewAttachment } from "./preview-attachment";
// import { MessageActions } from "./message-actions";
import { SparklesIcon, PencilEditIcon } from "./icons";
import { cn } from "@/lib/utils";

const PurePreviewMessage = (props) => {
  const { chatId, message, vote, isLoading, setMessages, reload, isReadonly } =
    props;

  const [mode, setMode] = useState("view");

  return (
    <AnimatePresence>
      <motion.div
        className="group/message mx-auto w-full max-w-3xl px-4"
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        data-role={message.role}
      >
        <div
          className={cx(
            "flex w-full gap-4 border-2 border-green-400 group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl",
            {
              "w-full": mode === "edit",
              "group-data-[role=user]/message:w-fit": mode !== "edit",
            },
          )}
        >
          {message.role === "assistant" && (
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background ring-1 ring-border">
              <div className="translate-y-px">
                <SparklesIcon size={14} />
              </div>
            </div>
          )}

          <div className="flex w-full flex-col gap-2">
            {message.experimental_attachments && (
              <div className="flex flex-row justify-end gap-2">
                {message.experimental_attachments.map((attachment) => (
                  <PreviewAttachment
                    key={attachment.url}
                    attachment={attachment}
                  />
                ))}
              </div>
            )}

            {/* Content in "view" mode */}
            {message.content && mode === "view" && (
              <div className="flex flex-row items-start gap-2">
                {message.role === "user" && !isReadonly && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-fit rounded-full px-2 text-muted-foreground opacity-0 group-hover/message:opacity-100"
                        onClick={() => {
                          // Switch to edit mode (no editor here, but left for demo)
                          setMode("edit");
                        }}
                      >
                        <PencilEditIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Edit message</TooltipContent>
                  </Tooltip>
                )}

                <div
                  className={cn("flex flex-col gap-4", {
                    "rounded-xl bg-primary px-3 py-2 text-primary-foreground":
                      message.role === "user",
                  })}
                >
                  <div>{message.content}</div>
                </div>
              </div>
            )}

            {/* Content in "edit" mode – no actual editor here, so just a placeholder */}
            {message.content && mode === "edit" && (
              <div className="flex flex-row items-start gap-2">
                <div className="size-8" />
                <div className="rounded bg-muted p-2">
                  <em>Edit mode (no editor component)</em>
                </div>
              </div>
            )}

            {/* Actions */}
            {/* {!isReadonly && (
              <MessageActions
                key={`action-${message.id}`}
                chatId={chatId}
                message={message}
                vote={vote}
                isLoading={isLoading}
              />
            )} */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const PreviewMessage = memo(
  PurePreviewMessage,
  (prevProps, nextProps) => {
    if (prevProps.isLoading !== nextProps.isLoading) return false;
    if (prevProps.message.content !== nextProps.message.content) return false;
    // Removed the check for toolInvocations
    if (!equal(prevProps.vote, nextProps.vote)) return false;

    return true;
  },
);

export const ThinkingMessage = () => {
  const role = "assistant";

  return (
    <motion.div
      className="group/message mx-auto w-full max-w-3xl px-4"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      data-role={role}
    >
      <div
        className={cx(
          "flex w-full gap-4 rounded-xl group-data-[role=user]/message:ml-auto group-data-[role=user]/message:w-fit group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:px-3 group-data-[role=user]/message:py-2",
          {
            "group-data-[role=user]/message:bg-muted": true,
          },
        )}
      >
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full ring-1 ring-border">
          <SparklesIcon size={14} />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col gap-4 text-muted-foreground">
            Thinking...
          </div>
        </div>
      </div>
    </motion.div>
  );
};
