import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  body: [
    {
      comments: ["sfd"],
      _id: "6098e1d5575317058dc2ef56",
      title: "qwe",
      commentcount: 1,
      __v: 1,
    },
    {
      comments: ["sfd"],
      _id: "6098e1d5575317058dc2ef57",
      title: "qwe",
      commentcount: 1,
      __v: 1,
    },
    {
      comments: ["sfd"],
      _id: "6098e1d5575317058dc2ef58",
      title: "qwe",
      commentcount: 1,
      __v: 1,
    },
  ],
  status: "idle",
  error: null,
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (params) => {
    // fetch books
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    resetBookState(state, action) {
      state.status = "idle";
      state.error = null;
      state.body = [];
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.body = action.payload.products;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export const bookState = (state) => state.books.body;

export const bookStatus = (state) => state.books.status;

export const bookError = (state) => state.books.error;

export const { resetBookState } = bookSlice.actions;

export default bookSlice.reducer;
