import { setLoading } from "../../slices/Auth";
import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { BlogEndpoints } from "../apis";
import { setBlogs, setBlogdel, setBlogPagination, updateBlogLikes } from "../../slices/BlogsData";
const { GET_BLOGS, CREATE_BLOG, GET_BLOG, TOGGLE_LIKE, GET_LIKES } = BlogEndpoints;

// Toggle like on a blog post
export const toggleLike = (blogId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to like this post");
        return { success: false, error: "Not authenticated" };
      }

      const response = await apiConnector(
        "POST",
        TOGGLE_LIKE.replace(":id", blogId),
        {},
        { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      );

      if (response.data.success) {
        dispatch(updateBlogLikes({
          blogId,
          likeCount: response.data.likeCount,
          hasLiked: response.data.hasLiked
        }));
      }
      return response.data;
    } catch (error) {
      console.error("Error toggling like:", error);
      toast.error(error.response?.data?.error || "Failed to update like");
      throw error;
    }
  };
};

// Fetch likes for a blog post
export const fetchLikes = (blogId) => {
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "GET",
        GET_LIKES.replace(":id", blogId)
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching likes:", error);
      toast.error("Failed to load likes");
      throw error;
    }
  };
};

export function getAllBlogs(page = 1) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("GET", `${GET_BLOGS}?page=${page}`);
      console.log(response.data);

      dispatch(setBlogs(response.data.blogs));
      dispatch(setBlogPagination(response.data.pagination));
    } catch (error) {
      console.log(error);
      toast.error("Failed to load blogs");
    } finally {
      dispatch(setLoading(false));
    }
  };
}


export function createBlog(title, description, content, coverImg, setIsCreatingBlog, navigate) {
  return async (dispatch) => {
    setIsCreatingBlog(true);
    dispatch(setLoading(true));
    const token = localStorage.getItem("token");
    // console.log(token);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("coverImg", coverImg);


    try {
      const response = await apiConnector(
        "POST",
        CREATE_BLOG,
        formData,
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
      toast.success("Blog Posted");
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      if (error?.response?.request?.status === 401) toast.error("LogIn Please");
    } finally {
      setIsCreatingBlog(false);
    }
  };
}

export function getBlog(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", `${GET_BLOG}/${id}`);
      dispatch(setBlogdel(response.data.blog));
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

