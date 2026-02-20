const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div>
        <h2>
          Chat with Avith <span className="beta">Beta</span>
        </h2>
        <p>Avichi College AI Assistant</p>
      </div>
      <div className="status">
        <span className="dot"></span> Online
      </div>
    </div>
  );
};

export default ChatHeader;
