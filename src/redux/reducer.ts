import { combineReducers } from "@reduxjs/toolkit";
import { eventsSlice } from "./slices/eventsSlice";

export const appReducers = combineReducers({
    eventsReducer: eventsSlice.reducer,
});
