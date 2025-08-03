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

      // Check if response contains valid blog data
      if (response.data && response.data.blogs) {
        dispatch(setBlogs(response.data.blogs));
      } else {
        console.error("Invalid response format:", response.data);
        dispatch(setBlogs([])); // Set empty array as fallback
        toast.error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      dispatch(setBlogs([])); // Set empty array on error

      // Check if it's a network error or server error
      if (error.response) {
        toast.error(`Server error: ${error.response.status}`);
      } else if (error.request) {
        toast.error("Network error: Cannot connect to server");
      } else {
        toast.error("Failed to load blogs");
      }
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
