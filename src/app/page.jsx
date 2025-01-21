"use client";

import React, { useState } from "react";
// import { useChat } from "ai/react";
import { useCustomChat } from "@/hooks/useCustomChat";

import { ChatHeader } from "@/components/chat-header";
import { Messages } from "@/components/messages";
import MultimodalInput from "@/components/multimodal-input";

export default function ChatPage() {
  const [attachments, setAttachments] = useState([]);

  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
  } = useCustomChat({
    api: "/api/route",
    onError: (err) => console.error("Chat error:", err),
    onFinish: (msg) => console.log("Assistant finished:", msg),
    // initialMessages: [{ id: "sys-1", role: "system", content: "" }],
    initialMessages: [],
  });

  // Optionally provide a reload function (stubbed here)
  const reload = async () => Promise.resolve(null);

  return (
    <div className="flex h-dvh min-w-0 flex-col bg-background">
      {/* Header for your Chat UI */}
      <ChatHeader />

      {/* The scrollable list of messages (plus any "thinking" or loading states) */}
      <Messages
        chatId="unique-chat-id"
        isLoading={isLoading}
        votes={undefined}
        messages={messages}
        setMessages={setMessages}
        reload={reload}
        isReadonly={false}
        isBlockVisible={true}
      />

      {/* Your text (or multimodal) input */}
      <form className="mx-auto flex w-full gap-2 bg-background px-4 pb-4 md:max-w-3xl md:pb-6">
        <MultimodalInput
          chatId="unique-chat-id"
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          stop={stop}
          attachments={attachments}
          setAttachments={setAttachments}
          messages={messages}
          setMessages={setMessages}
          append={append}
          className="w-full"
        />
      </form>
    </div>
  );
}
