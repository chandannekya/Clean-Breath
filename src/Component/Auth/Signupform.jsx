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

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const validations = {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
    setPasswordValidation(validations);
    return Object.values(validations).every(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const getPasswordStrength = () => {
    const validCount = Object.values(passwordValidation).filter(Boolean).length;
    if (validCount === 5) return { strength: "Strong", color: "text-green-600", bgColor: "bg-green-100" };
    if (validCount >= 3) return { strength: "Medium", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    if (validCount >= 1) return { strength: "Weak", color: "text-red-600", bgColor: "bg-red-100" };
    return { strength: "Very Weak", color: "text-gray-600", bgColor: "bg-gray-100" };
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmithandle = async (e) => {
    e.preventDefault();
    const { email, username, password } = formData;

    if (!email || !username || !password) {
      return toast.error("All fields are required");
    }

    // Validate password before submission
    if (!validatePassword(password)) {
      return toast.error("Password does not meet the required criteria.");
    }

    try {
      dispatch(signUp(username, email, password, navigate));
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const passwordStrength = getPasswordStrength();

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
          required
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
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-green-800 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            className="w-full rounded-md p-2 bg-white border border-green-300 input-shadow focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium">Password Strength:</span>
              <span className={`text-sm font-semibold ${passwordStrength.color}`}>
                {passwordStrength.strength}
              </span>
            </div>
            <div className={`p-3 rounded-md ${passwordStrength.bgColor} border`}>
              <h4 className="text-sm font-medium mb-2">Password Requirements:</h4>
              <ul className="space-y-1 text-sm">
                <li className={`flex items-center gap-2 ${passwordValidation.minLength ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{passwordValidation.minLength ? '✅' : '❌'}</span>
                  At least 8 characters
                </li>
                <li className={`flex items-center gap-2 ${passwordValidation.hasUppercase ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{passwordValidation.hasUppercase ? '✅' : '❌'}</span>
                  At least 1 uppercase letter (A-Z)
                </li>
                <li className={`flex items-center gap-2 ${passwordValidation.hasLowercase ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{passwordValidation.hasLowercase ? '✅' : '❌'}</span>
                  At least 1 lowercase letter (a-z)
                </li>
                <li className={`flex items-center gap-2 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{passwordValidation.hasNumber ? '✅' : '❌'}</span>
                  At least 1 number (0-9)
                </li>
                <li className={`flex items-center gap-2 ${passwordValidation.hasSpecialChar ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{passwordValidation.hasSpecialChar ? '✅' : '❌'}</span>
                  At least 1 special character (!@#$%^&*)
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-300 text-green-900 font-semibold p-2 rounded-md input-shadow hover:bg-green-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!Object.values(passwordValidation).every(Boolean) || !formData.email || !formData.username}
      >
        Signup
      </button>
    </form>
  );
};

export default Signupform;
