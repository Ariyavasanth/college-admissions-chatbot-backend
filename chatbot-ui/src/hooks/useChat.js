import { useState } from "react";
import { sendChatMessage } from "../services/chatbot.service";

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I am your CollegeBot. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (input) => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);
      const data = await sendChatMessage(input);

      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
};
