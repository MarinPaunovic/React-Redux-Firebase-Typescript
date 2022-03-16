import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import { firebaseConfig as fbCfg } from "../db/db";

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxFirestore(fbCfg))
);
export const persistor = persistStore(store);