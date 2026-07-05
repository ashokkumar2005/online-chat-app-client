import { useState } from "react";
import ChatBox from "../componets/chatbox.jsx";
import Nav from "../componets/navbar.jsx";
import Sidebar from "../componets/side.jsx";
import Onlineuser from "../componets/onlineuser.jsx";

function ChatPage() {
 
  const [selectedUser, setSelectedUser] = useState(null);
  const [onlineUsers] = useState([]);

  return (
    <div className="chat-page">
      <Nav />
      <div className="chat-layout">
        <div className="chat-sidebar-col">
          <Sidebar selectuser={setSelectedUser} selecteduser={selectedUser} />
          <Onlineuser
            users={[]}
            onlineusers={onlineUsers}
            onSelectUser={setSelectedUser}
          />
        </div>
        <div className="chat-main-col">
          <ChatBox selecteduser={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
