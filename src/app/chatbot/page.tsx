'use client';

import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState, useEffect, useRef } from "react";
import API_BASE_URL from "@/api";

const ChatbotPage = () => {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [dotAnimation, setDotAnimation] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]);
  const [cancelTyping, setCancelTyping] = useState(false);

  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const activeRequestRef = useRef<AbortController | null>(null);
  const stopTypingFlag = useRef(false);

  useEffect(() => {
    const greetUser = () => {
      setMessages([{ role: "bot", content: "..." }]);
      setBotTyping(true);

      let dotCount = 1;
      const dotInterval = setInterval(() => {
        setDotAnimation((prev) => {
          dotCount = (dotCount % 3) + 1;
          return ".".repeat(dotCount);
        });
      }, 500);

      setTimeout(() => {
        clearInterval(dotInterval);
        setDotAnimation("");
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "bot", content: "Hello! Ask me about CBRE?" },
        ]);
        setBotTyping(false);
      }, 2000);
    };

    greetUser();
  }, []);

  useEffect(() => {
    let dotCount = 1;
    let dotInterval: NodeJS.Timeout;

    if (botTyping) {
      dotInterval = setInterval(() => {
        dotCount = (dotCount % 3) + 1;
        setDotAnimation(".".repeat(dotCount));
      }, 500);
    }

    return () => clearInterval(dotInterval);
  }, [botTyping]);

  const handleChat = async (customPrompt?: string) => {
    if (cancelTyping) {
      stopTyping();
      return;
    }

    const messageToSend = customPrompt || prompt.trim();

    // Validate that the prompt is a simple string
    if (!messageToSend || typeof messageToSend !== "string") {
      console.error("Invalid messageToSend:", messageToSend);
      return;
    }

    setLoading(true);
    setCancelTyping(true);

    setMessages((prev) => [...prev, { role: "user", content: messageToSend }]);
    if (!customPrompt) setPrompt("");

    setMessages((prev) => [...prev, { role: "bot", content: "." }]);
    setBotTyping(true);

    const abortController = new AbortController();
    activeRequestRef.current = abortController;

    try {
      const res = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: messageToSend }),
        signal: abortController.signal,
      });

      if (!res.ok) throw new Error("Failed to fetch response");

      const data = await res.json();

      setBotTyping(false);
      simulateTyping(data.response);
    } catch (error) {
      if (abortController.signal.aborted) {
        console.log("Fetch request aborted");
      } else {
        console.error("Error fetching response:", extractErrorDetails(error));
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "bot", content: "Sorry, something went wrong." },
        ]);
      }
    } finally {
      activeRequestRef.current = null;
      setLoading(false);
    }
  };

  // Helper function to extract error details and avoid circular references
  const extractErrorDetails = (error: any): string => {
    try {
      // If it's a standard Error, log its details
      if (error instanceof Error) {
        return `${error.name}: ${error.message}\n${error.stack || ""}`;
      }

      // Handle circular references for other objects
      return JSON.stringify(error, getCircularReplacer()) || String(error);
    } catch (err) {
      return "Unknown error occurred.";
    }
  };

  // Utility function to handle circular references in objects
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: string, value: any) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    };
  };

  const simulateTyping = (text: string) => {
    let i = 0;
    const words = text.split(" ");

    setMessages((prev) => [
      ...prev.slice(0, -1),
      { role: "bot", content: "" },
    ]);

    stopTypingFlag.current = false;

    typingIntervalRef.current = setInterval(() => {
      if (stopTypingFlag.current) {
        clearInterval(typingIntervalRef.current!);
        typingIntervalRef.current = null;
        return;
      }

      if (i < words.length) {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "bot", content: prev[prev.length - 1]?.content + (i > 0 ? " " : "") + words[i] },
        ]);
        i++;
      } else {
        clearInterval(typingIntervalRef.current!);
        typingIntervalRef.current = null;
        setCancelTyping(false);

        // Add follow-up suggestions here
        setFollowUpQuestions(["Tell me more", "What’s next?"]);
      }
    }, 100);
  };

  const stopTyping = () => {
    stopTypingFlag.current = true; // Set the flag to stop typing simulation

    // Abort any ongoing fetch requests
    if (activeRequestRef.current) {
      activeRequestRef.current.abort();
      activeRequestRef.current = null;
    }

    // Clear any ongoing typing intervals
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    // Reset states to ensure UI reflects the cancelation
    setCancelTyping(false); // Disable the cancel mode
    setLoading(false); // Remove loading state
    setBotTyping(false); // Reset bot typing indicator
    setDotAnimation(""); // Clear dot animation

    // Update the messages to show that typing was canceled
    setMessages((prev) => [
      ...prev.slice(0, -1), // Remove the last bot message (placeholder)
      { role: "bot", content: "Typing canceled." }, // Add a new message
    ]);
  };

  const handleFollowUpClick = (question: string) => {
    handleChat(question);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  };

  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 border border-gray-300 rounded bg-gray-50 relative">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-2xl ${message.role === "user" ? "bg-indigo-500 text-white" : "bg-gray-200 text-black"
                  }`}
              >
                {message.content === "." ? dotAnimation : message.content}
              </div>
            </div>
          ))}
          {followUpQuestions.length > 0 && (
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
              {followUpQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleFollowUpClick(question)}
                  className="bg-indigo-500 text-white px-3 py-2 rounded-full hover:bg-indigo-600"
                >
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center">
          <textarea
            className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleChat();
              }
            }}
            rows={1}
          />
          <button
            onClick={() => (cancelTyping ? stopTyping() : handleChat())} // Handle cancel or send
            disabled={loading || (!prompt.trim() && !cancelTyping)} // Disable when appropriate
            className={`ml-2 px-4 py-2 rounded-full text-white ${cancelTyping
                ? "bg-red-500 hover:bg-red-600" // Styling for cancel button
                : "bg-indigo-500 hover:bg-indigo-600" // Styling for send button
              }`}
          >
            {cancelTyping ? "Cancel" : "Send"} {/* Toggle button text */}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChatbotPage;
