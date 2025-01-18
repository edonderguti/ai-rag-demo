import React, { useState, useRef } from "react";

// For generating unique IDs (optional—could use Date.now() or Math.random)
import { nanoid } from "nanoid";

/**
 * A custom hook that replicates the core functionality of `useChat` but
 * points to your own backend endpoint for responses.
 *
 * @param {Object} options
 * @param {string} [options.api="/api/rag"]  - The API endpoint to call.
 * @param {string} [options.id]             - A custom chat ID (optional).
 * @param {Object[]} [options.initialMessages=[]] - Initial array of message objects.
 * @param {Function} [options.onError]      - Callback when the request errors.
 * @param {Function} [options.onFinish]     - Callback when the request finishes.
 * @param {Function} [options.onResponse]   - Callback for the raw fetch Response.
 *
 * @returns {Object} - { id, messages, setMessages, isLoading, stop, input, setInput, append, handleSubmit }
 */

/**
 * A custom hook that replicates basic "chat" logic,
 * but calls your Next.js /api/rag route
 * which, in turn, calls API Gateway.
 */
export function useCustomChat({
  api = "/api/route", // Our Next.js route
  id: customId,
  initialMessages = [],
  onError,
  onFinish,
  onResponse,
} = {}) {
  // Unique chat ID (optional)
  const [id] = useState(customId || nanoid());

  // All chat messages so far
  const [messages, setMessages] = useState(initialMessages);

  // User input in the text field
  const [input, setInput] = useState("");

  // Is a request currently in-flight
  const [isLoading, setIsLoading] = useState(false);

  // Abort controller to cancel requests if needed
  const controllerRef = useRef(null);

  function stop() {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }
  }

  /**
   * Adds a new message to the conversation and calls the /api/rag endpoint
   * if it's a user message.
   */
  async function append({ role, content }) {
    try {
      setIsLoading(true);

      // 1. Add the new message to our existing messages
      const newMessage = {
        id: nanoid(),
        role,
        content,
      };
      // We'll capture the updated messages in a variable
      // so we can pass them to the server.
      // Update messages state
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      console.log("Updated Message -->", updatedMessages);
      // 2. If the user is the sender, call the backend
      if (role === "user") {
        controllerRef.current = new AbortController();

        const res = await fetch("/api/route", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // This is where we send the ENTIRE conversation
            // so your route can extract the last user message.
            messages: updatedMessages,
          }),
          signal: controllerRef.current.signal,
        });

        console.log("RES", res);
        if (onResponse) {
          onResponse(res);
        }

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        // 3. Suppose the route returns { question, answer }
        const data = await res.json();

        console.log("JSON data:", data);
        // 4. Add the assistant's response to messages
        const assistantMessage = {
          id: nanoid(),
          role: "assistant",
          // Our route returns "data", which presumably might have
          // a property like `data.answer` from API Gateway
          content: data.answer || "",
        };
        setMessages((prev) => [...prev, assistantMessage]);

        if (onFinish) {
          onFinish(assistantMessage);
        }
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (onError) {
        onError(error);
      } else {
        console.error("useCustomChat error:", error);
      }
    }
  }

  /**
   * Typical form submit handler
   */
  function handleSubmit(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (!input.trim()) {
      return;
    }
    append({ role: "user", content: input });
    setInput("");
  }

  return {
    id,
    messages,
    setMessages,
    isLoading,
    stop,
    input,
    setInput,
    append,
    handleSubmit,
  };
}
