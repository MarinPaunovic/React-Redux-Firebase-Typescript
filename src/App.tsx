import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import { auth } from "./db/db";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "./redux/user/userActions";
import { RootState } from "./redux/rootReducer";
import ShopPage from "./pages/shopPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styled-components/globalStyle";
import { lightTheme, darkTheme } from "./components/styled-components/themes";

const App = () => {
  const user = useSelector((reducer: RootState) => reducer.user.currentUser);
  const theme = useSelector((reducer: RootState) => reducer.theme.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let userInfo = {
          email: user.email,
          id: user.uid,
          name: user.displayName,
        };
        dispatch(LoginAction(userInfo));
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          {" "}
          {user ? (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<ShopPage />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </Router>{" "}
    </ThemeProvider>
  );
};

export default App;
