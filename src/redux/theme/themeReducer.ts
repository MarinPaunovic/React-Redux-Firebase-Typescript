import { ThemeTypes } from "./themeTypes";
const INITIAL_STATE = {
  theme: "dark",
};

export const themeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ThemeTypes.SET:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
