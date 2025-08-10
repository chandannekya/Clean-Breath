import { authEndpoits } from "../apis";
import { setIslogin, setLoading, setToken } from "../../slices/Auth";
const { SIGNUP_API, SIGNIN_API } = authEndpoits;
import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";

export function signUp(username, email, password, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector(
        "POST",

        SIGNUP_API,

        {
          username,

          email,

          password,
        },

        {
          "Content-Type": "application/json",
        }
      );

      toast.success("Registration complete! You can now log in.");

      navigate("/signin");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.error || error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function signin(email, password, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", SIGNIN_API, {
        email,
        password,
      });

      console.log(response);
      dispatch(setToken(response.data.token));
      localStorage.setItem("token", response.data.token);
      dispatch(setIslogin(true));
      toast.success("Login successful! Welcome🎉");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed. Please check your credentials and try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      dispatch(setToken(null));
      dispatch(setIslogin(null));
      localStorage.removeItem("token");
      toast.success("You've been logged out successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error While Log out");
    }
  };
}
