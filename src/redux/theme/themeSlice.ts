import { AnyAction, createSlice, ThunkDispatch } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const setThemeAction = (theme: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(setTheme(theme));
  };
};

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
