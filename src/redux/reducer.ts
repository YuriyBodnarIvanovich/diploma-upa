import { combineReducers } from "@reduxjs/toolkit";
import { eventsSlice } from "./slices/eventsSlice";
import { createPostSlice } from './slices/createPostSlice';
import { calatogPosttSlice } from "./slices/postsCatalogSlice";
import { UserDataSlice } from "./slices/userDataSlice";

export const appReducers = combineReducers({
    eventsReducer: eventsSlice.reducer,
    createPostReducer: createPostSlice.reducer,
    postCatalogReducer: calatogPosttSlice.reducer,
    userDataRedicer: UserDataSlice.reducer
});
