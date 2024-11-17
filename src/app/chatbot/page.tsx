'use client';

import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import API_BASE_URL from "@/api";

const ChatbotPage = () => {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [prompt, setPrompt] = useState(""); // Current user input
  const [loading, setLoading] = useState(false); // Loading state
  const [dotAnimation, setDotAnimation] = useState(""); // Dots for thinking animation
  const [botTyping, setBotTyping] = useState(false); // To manage typing animation
  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]); // Store follow-up questions

  // Effect to handle the dot animation during bot "thinking"
  useEffect(() => {
    let dotCount = 1;
    let dotInterval: NodeJS.Timeout;

    if (botTyping) {
      dotInterval = setInterval(() => {
        dotCount = (dotCount % 3) + 1; // Increment dot count, reset at 4
        setDotAnimation(".".repeat(dotCount)); // Display dots from 1 to 3
      }, 500); // Adjust typing speed here
    }

    return () => clearInterval(dotInterval); // Clean up the interval on unmount
  }, [botTyping]);

  const handleChat = async () => {
    if (!prompt.trim()) return; // Prevent empty submissions
    setLoading(true);

    // Add user message to the chat
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setPrompt(""); // Clear the input field

    // Add a temporary typing indicator for the bot with 1 dot initially
    setMessages((prev) => [...prev, { role: "bot", content: "." }]);
    setBotTyping(true);

    try {
      const res = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await res.json();

      // Stop the dot animation and replace it with the actual bot response
      setBotTyping(false);

      // Simulate typing effect for bot response
      simulateTyping(data.response);

      // Fetch follow-up questions
      const followUpRes = await fetch(`${API_BASE_URL}/follow_up_questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt })
      });

      if (followUpRes.ok) {
        const followUpData = await followUpRes.json();
        setFollowUpQuestions(followUpData.questions);
      }

    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev.slice(0, -1), // Remove the last "thinking" indicator
        { role: "bot", content: "Sorry, something went wrong." },
      ]);
      setLoading(false);
    }
  };

  // Simulate typing effect for bot response (one word at a time)
  const simulateTyping = (text: string) => {
    let i = 0;
    const words = text.split(" ");
    const typingInterval = setInterval(() => {
      if (i < words.length) {
        setMessages((prev) => [
          ...prev.slice(0, -1), // Remove the last "thinking" indicator
          { role: "bot", content: prev[prev.length - 1]?.content + " " + words[i] },
        ]);
        i++;
      } else {
        clearInterval(typingInterval);
        setLoading(false);
      }
    }, 100); // Adjust typing speed here
  };

  // Handle follow-up question click
  const handleFollowUpClick = async (question: string) => {
    setMessages((prev) => [...prev, { role: "user", content: question }]);

    // Set prompt to the follow-up question
    setPrompt(question);

    // Re-trigger the handleChat function for follow-up
    handleChat();
  };

  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 border border-gray-300 rounded bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {message.content === "." ? dotAnimation : message.content}
              </div>
            </div>
          ))}

          {/* Display follow-up questions if any */}
          {followUpQuestions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {followUpQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleFollowUpClick(question)}
                  className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600"
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
            rows={1}
          ></textarea>
          <button
            onClick={handleChat}
            disabled={loading}
            className={`ml-2 px-4 py-2 rounded-full text-white ${
              loading ? "bg-gray-500" : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChatbotPage;
