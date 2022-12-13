import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk(
    "post/getPost",
    async () => {
        const response = await axios.get("https://dummyjson.com/posts");
        return response.data;
    }
);

const PostSlice = createSlice({
    name: "post",
    initialState: {
        data: [],
        loading: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPost.pending, (state, action) => {
            if (state.loading === "idle") {
                state.loading = "pending";
            }
        });
        builder.addCase(getPost.fulfilled, (state, action) => {
            if (state.loading === "pending") {
                state.data = action.payload;
            }
        });
        builder.addCase(getPost.rejected, (state, action) => {
            if (state.loading === "pending") {
                state.loading = "idle";
                state.error = "Error occured";
            }
        });
    },
});
export default PostSlice.reducer;