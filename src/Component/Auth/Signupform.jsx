import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { signUp } from "../../service/oprations/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signupform = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmithandle = async (e) => {
    e.preventDefault();
    const { email, username, password } = formData;

    if (!email || !username || !password) {
      return toast.error("All fields are required");
    }

    try {
      dispatch(signUp(username, email, password, navigate));
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup");
    }
  };

  return (
    <form className="space-y-5 w-full" onSubmit={onSubmithandle}>
      <div>
        <label className="block text-sm font-medium text-green-800 mb-1">
          Email
        </label>
        <input
          className="w-full rounded-md p-2 bg-white border border-green-300 input-shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-green-800 mb-1">
          Username
        </label>
        <input
          className="w-full rounded-md p-2 bg-white border border-green-300 input-shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          name="username"
          placeholder="your_username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-green-800 mb-1">
          Password
        </label>
        <input
          className="w-full rounded-md p-2 bg-white border border-green-300 input-shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-300 text-green-900 font-semibold p-2 rounded-md input-shadow hover:bg-green-400 transition"
      >
        Signup
      </button>
    </form>
  );
};

export default Signupform;
