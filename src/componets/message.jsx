

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
            own
              ? "/images/my-avatar.png"
              : "/images/default-avatar.png"
          }
          alt=""
        />

        <p className="messageText">
          {message.text}
        </p>
      </div>

      <div className="messageBottom">
        {new Date(message.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

export default Message;