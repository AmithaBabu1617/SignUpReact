import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialAuthState = {
  loggedInUser: [],
};

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (payload, thunkAPI) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: payload.name,
          password: payload.password,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      throw new Error();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.loggedInUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loggedInUser = [];
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
