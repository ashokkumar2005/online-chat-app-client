import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./message.jsx";

const ChatBox = ({ selecteduser }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const getmessage = async () => {
      try {
        const res = await axios.get(`/api/messages/${selecteduser._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (selecteduser) {
      getmessage();
    }
  }, [selecteduser]);

  if (!selecteduser) {
    return (
      <div className="chatbox chatbox-empty">
        <h2>Select a user to start the chat</h2>
      </div>
    );
  }

  const Sendmessage = async () => {
    if (!text.trim()) return;
    try {
      setSending(true);
      const res = await axios.post(`/api/message/${selecteduser._id}`, { text });
      setMessages((prev) => [...prev, res.data]);
      setText("");
    } catch (err) {
      console.log(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <span className="chatbox-header-name">
          {selecteduser.name || selecteduser.username}
        </span>
      </div>

      <div className="chatbox-messages">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <Message key={msg._id} message={msg} own={msg.own} />
          ))
        ) : (
          <p className="chatbox-empty-msg">No messages yet</p>
        )}
      </div>

      <div className="chatbox-input">
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          // small usability bonus: send on Enter
          onKeyDown={(e) => e.key === "Enter" && Sendmessage()}
        />
        <button className="btn" onClick={Sendmessage} disabled={sending}>
          {sending ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
