import ChatHeader from "./components/ChatHeader";
import MessageBubble from "./components/MessageBubble";
import ChatInput from "./components/ChatInput";
import { useChat } from "./hooks/useChat";
import "./styles/chat.css";

function App() {
  const { messages, sendMessage, loading } = useChat();

  return (
    <div className="chat-container">
      <ChatHeader />

      <div className="messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
      </div>

      <ChatInput onSend={sendMessage} loading={loading} />
    </div>
  );
}

export default App;
