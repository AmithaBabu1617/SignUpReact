import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  darkMode: !!JSON.parse(localStorage.getItem("darkMode")),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const asyncToggleTheme = createAsyncThunk(
  "theme/toggleTheme",
  async (_, thunkAPI) => {
    const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
    localStorage.setItem("darkMode", !isDarkMode);
    thunkAPI.dispatch(toggleTheme());
  }
);

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
