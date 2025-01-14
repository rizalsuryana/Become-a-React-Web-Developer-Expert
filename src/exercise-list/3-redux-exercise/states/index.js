// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./rootReducer"; change with @reduxjs/toolkit
import { todoDeletionCheck, thunk } from "./middlewares";
import { goalReducer } from "./goals/reducer";
import { todosReducer } from "./todos/reducer";
import { configureStore } from "@reduxjs/toolkit";


// const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck, thunk));

const store = configureStore({
    reducer: {
        todos: todosReducer,
        goals: goalReducer
    },

    // middleware: [thunk, todoDeletionCheck]
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk, todoDeletionCheck),
});

export {store};