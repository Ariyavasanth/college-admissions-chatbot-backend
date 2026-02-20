import { useState } from "react";

const ChatInput = ({ onSend, loading }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    onSend(input);
    setInput("");
  };

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Type your question here..."
        value={input}
        maxLength={150}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <div className="counter">{input.length}/150</div>
      <button onClick={handleSend} disabled={loading}>
        {loading ? "..." : "➤"}
      </button>
    </div>
  );
};

export default ChatInput;
