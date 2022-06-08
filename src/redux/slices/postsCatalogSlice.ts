import { createSlice } from "@reduxjs/toolkit";
import { mockPosts, mockPeople } from "./mockData";
import { ICreatePost, IPostCatalog } from "./types";


const initialState: IPostCatalog = {
    catalogPostData: mockPosts,
    catalogPeople: mockPeople,
    
};

export const calatogPosttSlice = createSlice({
    name: 'catalogPost',
    initialState,
    reducers: {
        setInitialData: (state, action) => {
            state.catalogPostData = [...state.catalogPostData, action.payload];
        },
        setPost: (state, action) => {
            state.catalogPostData = [...state.catalogPostData,  action.payload];
        }
    }
});

export const { setInitialData, setPost } = calatogPosttSlice.actions;