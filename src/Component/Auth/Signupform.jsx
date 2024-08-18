import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { signUp } from "../../service/oprations/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../slices/Auth";

const Signupform = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmithandle = async (e) => {
    e.preventDefault();

    const { email, username, password } = formData;

    // Basic validation
    if (!email || !username || !password) {
      return toast.error("All fields are required");
    }

    try {
      // Dispatch the signUp action and handle navigation within it
      dispatch(signUp(username, email, password, navigate));
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup");
    }
  };

  return (
    <div className=" flex  ">
      <div className="  poppins-regular  w-full focus:outline outline-[1px] p-8 ">
        {" "}
        <form
          className="flex  flex-col gap-5 items-center"
          onSubmit={onSubmithandle}
        >
          <label className="w-full">
            <p className="text-[15px] mb-2">Email:</p>
            <input
              className="input-shadow p-2   w-full rounded-md bg-green-300/10 focus:outline-green-800 focus:outline focus:outline-2"
              type="email"
              placeholder="@email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>

          <label className="w-full">
            <p className="text-[15px] mb-2">Username:</p>
            <input
              className="input-shadow p-2 w-full focus:outline-green-800 focus:outline focus:outline-2 rounded-md bg-green-300/10"
              type="text"
              placeholder="@username"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
          </label>

          <label className="w-full">
            <p className="text-[15px] mb-2">Password:</p>
            <input
              className="input-shadow p-2 focus:outline-green-800 focus:outline focus:outline-2 w-full rounded-md bg-green-300/10"
              type="password"
              name="password"
              placeholder="@password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>

          <button
            className="bg-green-300 p-2 mt-3 rounded-md input-shadow items-center"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
