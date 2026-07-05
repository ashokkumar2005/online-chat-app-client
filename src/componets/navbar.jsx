import { useAuth } from "./authen.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <h2 className="navbar-title">💬 Online Chat</h2>
      <div className="navbar-right">
        <span className="navbar-user">
          {/* BUG-FIX #4: was `{user ? name : "guest"}` — `name` doesn't
              exist anywhere in this file, it should read `user.name`. */}
          Welcome, {user ? user.name : "Guest"}
        </span>
        <button className="btn btn-logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};


export default Navbar;
