import React, { memo } from "react";
import equal from "fast-deep-equal";

import { PreviewMessage, ThinkingMessage } from "./message";
import { useScrollToBottom } from "./use-scroll-to-bottom";
import Overview from "@/components/overview";

function PureMessages({
  chatId,
  isLoading,
  votes,
  messages,
  setMessages,
  reload,
  isReadonly,
  isBlockVisible,
}) {
  const [messagesContainerRef, messagesEndRef] = useScrollToBottom();

  return (
    <div
      ref={messagesContainerRef}
      className="flex w-full min-w-0 flex-1 flex-col gap-6 overflow-y-scroll border-2 border-yellow-300 pt-4"
    >
      {/* If you'd like to show an overview when there are no messages: */}
      {messages.length === 0 && <Overview />}
      {messages.map((message, index) => (
        <PreviewMessage
          key={message.id}
          chatId={chatId}
          message={message}
          // Mark the last message as loading if AI is in the midst of responding
          isLoading={isLoading && messages.length - 1 === index}
          vote={
            votes
              ? votes.find((vote) => vote.messageId === message.id)
              : undefined
          }
          setMessages={setMessages}
          reload={reload}
          isReadonly={isReadonly}
        />
      ))}
      {/* Show the "Thinking..." placeholder if AI is generating a response */}
      {isLoading &&
        messages.length > 0 &&
        messages[messages.length - 1].role === "user" && <ThinkingMessage />}
      {/* A final "spacer" to ensure scrolling works correctly */}
      <div
        ref={messagesEndRef}
        className="min-h-[24px] min-w-[24px] shrink-0"
      />
    </div>
  );
}

export const Messages = memo(PureMessages, (prevProps, nextProps) => {
  // If the block is already visible, skip further checks
  if (prevProps.isBlockVisible && nextProps.isBlockVisible) return true;

  // Compare loading states, message list lengths, and deep equality of messages/votes
  if (prevProps.isLoading !== nextProps.isLoading) return false;
  if (prevProps.isLoading && nextProps.isLoading) return false;
  if (prevProps.messages.length !== nextProps.messages.length) return false;
  if (!equal(prevProps.messages, nextProps.messages)) return false;
  if (!equal(prevProps.votes, nextProps.votes)) return false;

  return true;
});
