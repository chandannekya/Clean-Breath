import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: null, // using null instead of [] -> so we can track if data is fetched from api or not.
    pagination: {},
    loading: false,
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBlogPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setBlogdel: (state, action) => {
      state.blogdel = action.payload;
    },
    updateBlogLikes: (state, action) => {
      const { blogId, likeCount, hasLiked } = action.payload;
      
      // Update in blogs array
      if (state.blogs) {
        state.blogs = state.blogs.map(blog => 
          blog._id === blogId 
            ? { ...blog, likeCount, hasLiked } 
            : blog
        );
      }
      
      // Update in blogdel (single blog view)
      if (state.blogdel && state.blogdel._id === blogId) {
        state.blogdel = { 
          ...state.blogdel, 
          likeCount, 
          hasLiked 
        };
      }
    },
  },
});

export const { 
  setBlogs, 
  setLoading, 
  setBlogPagination, 
  setBlogdel, 
  updateBlogLikes 
} = blogSlice.actions;

export default blogSlice.reducer;
