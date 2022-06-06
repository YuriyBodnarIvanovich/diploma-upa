import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    events:[],
 };

 export const eventsSlice = createSlice({
    name: 'mainOption',
    initialState,
    reducers:{
        setEvents:(state, action) => {
            state.events = action.payload;
        },
    }
});

export const { setEvents } = eventsSlice.actions;