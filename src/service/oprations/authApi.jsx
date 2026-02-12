import { authEndpoits } from "../apis";
import { setIslogin, setLoading, setToken, setUser } from "../../slices/Auth";
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

      toast.success("Signup Successfully");

      navigate("/signin");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.error || "An error occurred");
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
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
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
      dispatch(setUser(null));
      dispatch(setIslogin(false));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Log Out");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error While Log out");
    }
  };
}
