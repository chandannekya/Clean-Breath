import { setLoading } from "../../slices/Auth";
import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { BlogEndpoints } from "../apis";
import { setBlogs, setBlogdel } from "../../slices/BlogsData";
const { GET_BLOGS, CREATE_BLOG, GET_BLOG } = BlogEndpoints;

export function getAllBlogs() {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("GET", GET_BLOGS);
      console.log(response.data);
      dispatch(setBlogs(response.data.blogs));
    } catch (error) {
      console.log(error);

      toast.error("Failed to load blogs");
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function createBlog(title, body, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await apiConnector(
        "POST",
        CREATE_BLOG,
        {
          title,
          body,
        },
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
      toast.success("Blog Posted");
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      if (error?.response?.request?.status === 401) toast.error("LogIn Please");
    }
  };
}

export function getBlog(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_BLOG, { id });

      dispatch(setBlogdel(response.data.blog));
      dispatch(setLoading(false));
      return response;
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };
}
