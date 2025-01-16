"use client";

import React, { useEffect, useState } from "react";
import { useChat } from "ai/react";
import { AnimatePresence } from "framer-motion";
import MultimodalInput from "@/components/multimodal-input";

import { ThinkingMessage, PreviewMessage } from "@/components/message";
import { Messages } from "@/components/messages";
import { ChatHeader } from "@/components/chat-header";

function ChatPage() {
  const [attachments, setAttachments] = useState([]);
  // This fetch override simply returns a mock response
  // (an empty array or whatever you want), so no actual API request is made.
  // Properly formatted mock stream response
  const mockFetch = async (url, options) => {
    console.log("Using mock fetch");

    // If this is a chat completion request
    if (url.includes("/api/chat")) {
      // Parse the request body to get the messages
      const body = JSON.parse(options.body);
      const userMessage = body.messages[body.messages.length - 1];

      // Create a mock response
      const mockResponse = {
        role: "assistant",
        content:
          "This is a mock response. The actual API integration is not implemented yet.",
        id: `mock-${Date.now()}`,
      };

      // Create a mock stream
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        start(controller) {
          // Send the mock response in the correct format
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(mockResponse)}\n\n`),
          );
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    // For other requests, return empty array
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };
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
    // fetch: mockFetch,
    onError: (error) => {
      console.error("Chat error:", error);
      // Optionally show an error message to the user
      // You could use a toast notification here
    },
  });

  // Provide a reload function if needed (stubbed here)
  const reload = async () => Promise.resolve(null);

  // This effect will run whenever 'messages' changes.
  // It demonstrates how you can track or log updates to 'messages'.
  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  return (
    <div className="flex h-full w-full flex-col">
      <ChatHeader />

      <div className="flex h-full flex-col items-center border-2 border-red-300 pb-4">
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
