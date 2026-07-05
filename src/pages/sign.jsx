import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmpassword } = formData;

    if (!name.trim() || !email.trim() || !password || !confirmpassword) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      console.log(response.data);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        {error && <p className="form-error">{error}</p>}

        <label>Name</label>
        <input name="name" type="text" value={formData.name} placeholder="Enter name" onChange={handleChange} />

        <label>Email</label>
        <input name="email" type="email" value={formData.email} placeholder="Enter email" onChange={handleChange} />

        <label>Password</label>
        <input name="password" type="password" value={formData.password} placeholder="Enter password" onChange={handleChange} />

        <label>Confirm Password</label>
        <input name="confirmpassword" type="password" value={formData.confirmpassword} placeholder="Confirm password" onChange={handleChange} />

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Sign Up"}
        </button>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
