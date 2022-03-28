import userReducer from "./user/userReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatReducer from "./chat/chatReducer";
import { themeReducer } from "./theme/themeReducer";
import playerReducer from "./player/playerSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "player"],
};

const rootReducer = combineReducers({
  user: userReducer,
  player: playerReducer,
  chat: chatReducer,
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
