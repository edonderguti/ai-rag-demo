import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for combining class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Fetch wrapper with error handling
export const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

// LocalStorage helper
export function getLocalStorage(key) {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
  return [];
}

// UUID generator
export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Add tool message to chat
function addToolMessageToChat({ toolMessage, messages }) {
  return messages.map((message) => {
    if (message.toolInvocations) {
      return {
        ...message,
        toolInvocations: message.toolInvocations.map((toolInvocation) => {
          const toolResult = toolMessage.content.find(
            (tool) => tool.toolCallId === toolInvocation.toolCallId,
          );

          if (toolResult) {
            return {
              ...toolInvocation,
              state: "result",
              result: toolResult.result,
            };
          }

          return toolInvocation;
        }),
      };
    }

    return message;
  });
}

// Convert DB messages to UI messages
export function convertToUIMessages(messages) {
  return messages.reduce((chatMessages, message) => {
    if (message.role === "tool") {
      return addToolMessageToChat({
        toolMessage: message,
        messages: chatMessages,
      });
    }

    let textContent = "";
    const toolInvocations = [];

    if (typeof message.content === "string") {
      textContent = message.content;
    } else if (Array.isArray(message.content)) {
      for (const content of message.content) {
        if (content.type === "text") {
          textContent += content.text;
        } else if (content.type === "tool-call") {
          toolInvocations.push({
            state: "call",
            toolCallId: content.toolCallId,
            toolName: content.toolName,
            args: content.args,
          });
        }
      }
    }

    chatMessages.push({
      id: message.id,
      role: message.role,
      content: textContent,
      toolInvocations,
    });

    return chatMessages;
  }, []);
}

// Sanitize response messages
export function sanitizeResponseMessages(messages) {
  const toolResultIds = [];

  for (const message of messages) {
    if (message.role === "tool") {
      for (const content of message.content) {
        if (content.type === "tool-result") {
          toolResultIds.push(content.toolCallId);
        }
      }
    }
  }

  const messagesBySanitizedContent = messages.map((message) => {
    if (message.role !== "assistant") return message;

    if (typeof message.content === "string") return message;

    const sanitizedContent = message.content.filter((content) =>
      content.type === "tool-call"
        ? toolResultIds.includes(content.toolCallId)
        : content.type === "text"
          ? content.text.length > 0
          : true,
    );

    return {
      ...message,
      content: sanitizedContent,
    };
  });

  return messagesBySanitizedContent.filter(
    (message) => message.content.length > 0,
  );
}

// Sanitize UI messages
export function sanitizeUIMessages(messages) {
  const messagesBySanitizedToolInvocations = messages.map((message) => {
    if (message.role !== "assistant") return message;
    if (!message.toolInvocations) return message;

    const toolResultIds = [];

    for (const toolInvocation of message.toolInvocations) {
      if (toolInvocation.state === "result") {
        toolResultIds.push(toolInvocation.toolCallId);
      }
    }

    const sanitizedToolInvocations = message.toolInvocations.filter(
      (toolInvocation) =>
        toolInvocation.state === "result" ||
        toolResultIds.includes(toolInvocation.toolCallId),
    );

    return {
      ...message,
      toolInvocations: sanitizedToolInvocations,
    };
  });

  return messagesBySanitizedToolInvocations.filter(
    (message) =>
      message.content.length > 0 ||
      (message.toolInvocations && message.toolInvocations.length > 0),
  );
}

// Get most recent user message
export function getMostRecentUserMessage(messages) {
  const userMessages = messages.filter((message) => message.role === "user");
  return userMessages.at(-1);
}

// Get document timestamp by index
export function getDocumentTimestampByIndex(documents, index) {
  if (!documents) return new Date();
  if (index > documents.length) return new Date();
  return documents[index].createdAt;
}

// Get message ID from annotations
export function getMessageIdFromAnnotations(message) {
  if (!message.annotations) return message.id;
  const [annotation] = message.annotations;
  if (!annotation) return message.id;
  return annotation.messageIdFromServer || message.id;
}
