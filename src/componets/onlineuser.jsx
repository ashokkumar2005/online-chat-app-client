
const Onlineuser = ({ users = [], onlineusers = [], onSelectUser }) => {
  return (
    <div className="online-users">
      <h2 className="online-users-title">Online Users</h2>
      <div className="online-users-list">
        {users.map((user) => {
          const isOnline = onlineusers.includes(user._id);
          return (
            <div
              key={user._id}
              className="online-user-item"
              onClick={() => onSelectUser && onSelectUser(user)}
            >
              <div className="online-user-avatar">
                {user.username ? user.username.charAt(0).toUpperCase() : "?"}
                <span
                  className={isOnline ? "status-dot online" : "status-dot"}
                  title={isOnline ? "Online" : "Offline"}
                />
              </div>
              <span className="online-user-name">{user.username}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Onlineuser;
