import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionPostData: [
        {
            questionData: {
                postId: '',
                questions: [
                    {
                        textOfQuestion: '',
                        answers: [
                            {
                                text: '',
                                answer: false,
                            },
                            {
                                text: '',
                                answer: false,
                            }
                        ]
                    }
                ]
            }
        }
    ]
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