import { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = ({ selectuser, selecteduser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchuser();
  }, []);

  const fetchuser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
      setError("Could not load users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Chats</h2>

      {loading && <p className="sidebar-status">Loading users...</p>}
      {error && <p className="sidebar-status sidebar-error">{error}</p>}
      {!loading && !error && users.length === 0 && (
        <p className="sidebar-status">No users found</p>
      )}

      {users.map((user) => (
        <div
          key={user._id}
          className={
            selecteduser && selecteduser._id === user._id
              ? "user-item active"
              : "user-item"
          }
          onClick={() => selectuser(user)}
        >
          <div className="user-avatar">
            {user.name ? user.name.charAt(0).toUpperCase() : "?"}
          </div>
          <div>
            <p className="user-name">{user.name || user.username}</p>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
