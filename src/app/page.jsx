"use client";

import React, { useState } from "react";
import { useChat } from "ai/react";
import { AnimatePresence } from "framer-motion";
import MultimodalInput from "@/components/multimodal-input";
import Overview from "@/components/overview";
import { ThinkingMessage } from "@/components/message";
import { ChatHeader } from "@/components/chat-header";

function ChatPage() {
  const [attachments, setAttachments] = useState([]);
  const {
    messages,
    input,
    setInput,
    handleSubmit,
    isLoading,
    stop,
    setMessages,
    append,
  } = useChat({
    api: "/api/chat",
    initialMessages: [],
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  return (
    <div className="flex h-full w-full flex-col">
      <ChatHeader />

      <div className="flex h-full flex-col items-center pb-4">
        <div className="items- min-h-0 flex-1 flex-col overflow-auto px-4">
          <div className="flex w-full justify-center">
            {messages.length === 0 ? (
              <Overview />
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.role === "user" ? "text-blue-600" : "text-green-600"
                  }`}
                >
                  <ThinkingMessage />
                  <strong>{message.role}:</strong> {message.content}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full gap-2 bg-background px-4 pb-4 md:max-w-3xl md:pb-6">
        <MultimodalInput
          chatId="unique-chat-id"
          input={input}
          setInput={setInput}
          isLoading={isLoading}
          stop={stop}
          attachments={attachments}
          setAttachments={setAttachments}
          messages={messages}
          setMessages={setMessages}
          append={append}
          handleSubmit={handleSubmit}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default ChatPage;
