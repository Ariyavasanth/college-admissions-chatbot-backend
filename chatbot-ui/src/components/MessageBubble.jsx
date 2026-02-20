const MessageBubble = ({ message }) => {
  return (
    <div
      className={`message-row ${
        message.sender === "user" ? "user" : "bot"
      }`}
    >
      {message.sender === "bot" && (
        <div className="avatar">A</div>
      )}
      <div className="message-bubble">{message.text}</div>
    </div>
  );
};

export default MessageBubble;
