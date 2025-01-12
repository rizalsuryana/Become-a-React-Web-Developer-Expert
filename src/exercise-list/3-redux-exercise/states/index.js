import { applyMiddleware, createStore } from "redux";
import { todoDeletionCheck, thunk } from "./middlewares";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck, thunk));

export {store};