import userReducer from "./user/userReducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatReducer from "./chat/chatReducer";
import { themeReducer } from "./theme/themeReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  chat: chatReducer,
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
