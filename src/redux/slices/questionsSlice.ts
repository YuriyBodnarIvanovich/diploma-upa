import { createSlice } from "@reduxjs/toolkit";
import { questionPostDataMock } from "./mockData";

const initialState = {
    questionPostData: questionPostDataMock,
}

export const createQuestionPostSlice = createSlice({
    name: 'questionPosts',
    initialState,
    reducers: {
        setQuestionPost:(state, action) => {
            state.questionPostData = action.payload
        }
    }
});

export const { setQuestionPost } = createQuestionPostSlice.actions;