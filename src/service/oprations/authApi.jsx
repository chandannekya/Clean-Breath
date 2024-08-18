import { authEndpoits } from "../apis";
import { setIslogin, setLoading, setToken } from "../../slices/Auth";
const { SIGNUP_API, SIGNIN_API } = authEndpoits;
import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { useSelector } from "react-redux";

export function signUp(username, email, password, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      console.log("Sending signup data:", {
        username,

        email,

        password,
        navigate,
      });

      console.log(SIGNUP_API + "signup");
      console.log("chal rha h");
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

      console.log(response.data);

      toast.success("Signup Successfully");
      dispatch(setLoading(false));

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error();
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
      toast.success("Logged In");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
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
      localStorage.getItem("token", "");
      toast.success("Log Out");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error While Log out");
    }
  };
}
