"use client";

import React, { useState } from "react";
import { useChat } from "ai/react";

import { ChatHeader } from "@/components/chat-header";
import { Messages } from "@/components/messages";
import MultimodalInput from "@/components/multimodal-input";

export default function ChatPage() {
  // State for any file/image attachments
  const [attachments, setAttachments] = useState([]);

  // Set up the chat using `useChat`
  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
  } = useChat({
    // A unique `id` for this chat instance
    id: "unique-chat-id",
    // An initial list of messages (if any)
    initialMessages: [],
    // You could also define fetch: mockFetch here if you like:
    // fetch: mockFetch,
    onError: (error) => {
      console.log("Chat error:", error);
    },
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
