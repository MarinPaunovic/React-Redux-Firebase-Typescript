import { ThemeTypes } from "./themeTypes";

export const setTheme = (theme: string) => {
  if (theme === "light") {
    return { type: ThemeTypes.SET, payload: theme };
  } else {
    return { type: ThemeTypes.SET, payload: theme };
  }
};
