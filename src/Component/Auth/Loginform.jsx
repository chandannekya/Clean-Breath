import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { signin } from "../../service/oprations/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Logingform = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmithandle = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      dispatch(signin(email, password, navigate));
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <form
      className="flex flex-col gap-5 items-center w-full"
      onSubmit={onSubmithandle}
    >
      <div className="w-full">
        <label className="block text-sm font-medium text-green-800 mb-1">
          Email
        </label>
        <input
          className="w-full rounded-md p-2 bg-white border border-green-300 input-shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          type="email"
          placeholder="you@example.com"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-green-800 mb-1">
          Password
        </label>
        <input
          className="w-full rounded-md p-2 bg-white border border-green-300 input-shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          type="password"
          name="password"
          placeholder="••••••••"
          onChange={handleChange}
          value={formData.password}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-300 text-green-900 font-semibold p-2 rounded-md input-shadow hover:bg-green-400 transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default Logingform;
