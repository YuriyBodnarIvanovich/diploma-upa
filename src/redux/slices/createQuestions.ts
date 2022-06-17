import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postId: '',
    questions: [
        {
            textOfQuestion: '',
            answers: [
                {text:'', answer: true},
                {text:'', answer: false},
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