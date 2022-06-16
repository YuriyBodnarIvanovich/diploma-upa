import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {
            textOfQuestion: 'hello1',
            answers: [
                {text:'h2', answer: true},
                {text:'h3', answer: false},
            ]
        },
    ]
}

export const createQuestions = createSlice({
    name: 'createQuestions',
    initialState,
    reducers:{
        setQuestions: (state, action) => {
            state.questions = action.payload;
        }
    }
})

export const { setQuestions } = createQuestions.actions;