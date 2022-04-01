import userReducer from "./user/userSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatReducer from "./chat/chatSlice";
import themeReducer from "./theme/themeSlice";
import playerReducer from "./player/playerSlice";
import battleReducer from "./battle/battleSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "player", "theme"],
};

const rootReducer = combineReducers({
  user: userReducer,
  player: playerReducer,
  chat: chatReducer,
  theme: themeReducer,
  battle: battleReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
