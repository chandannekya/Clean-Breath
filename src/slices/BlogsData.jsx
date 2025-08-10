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
  },
});

export const { setBlogs, setLoading, setBlogPagination, setBlogdel } = blogSlice.actions;

export default blogSlice.reducer;
