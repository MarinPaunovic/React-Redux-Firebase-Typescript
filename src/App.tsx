import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styled-components/globalStyle";
import { lightTheme, darkTheme } from "./components/styled-components/themes";
import Username from "./pages/username";
import { useEffect } from "react";
import { setPlayerAction } from "./redux/player/playerSlice";
import { auth } from "./db/db";
import { onAuthStateChanged } from "firebase/auth";
import PvE from "./components/battle/pve";

const App = () => {
  const user = useSelector((reducer: RootState) => reducer.user.currentUser);
  const username = useSelector(
    (reducer: RootState) => reducer.player.player.username
  );
  const theme = useSelector((reducer: RootState) => reducer.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    let unsub = onAuthStateChanged(auth, () => {
      if (user && !username) {
        dispatch(setPlayerAction());
      }
    });
    return () => {
      unsub();
    };
  }, [auth.currentUser]);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          {" "}
          {user ? (
            <>
              {user.username ? (
                <>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/battle" element={<PvE />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                </>
              ) : (
                <Route path="/*" element={<Username />} />
              )}
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </Router>{" "}
    </ThemeProvider>
  );
};

export default App;
