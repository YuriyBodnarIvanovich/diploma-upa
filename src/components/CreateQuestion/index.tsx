import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions } from "../../redux/slices/createQuestions";
import { AppState } from "../../redux/store";
import { AnswersShow } from "./AnswerShow";
import { CreateQuestionWrapper, InputWrapper, AnswerBox, ButtonAddNewQuestion } from "./styled";

const CreateQuestion = () => {
    const questionData = useSelector((state:AppState) => state.createQuestionsReducer.questions);
    const dispatch = useDispatch();

    console.log(questionData);

    const handleAnswers = (idQuestion) => {
        return (data, idAnswer, type) => {
            const dataQuestionCopy = JSON.parse(JSON.stringify(questionData));

            switch(type) {
                case 'DELETE_ANSWER':
                    dataQuestionCopy[idQuestion].answers =  dataQuestionCopy[idQuestion].answers.filter((_, index) => index !== idAnswer);
                    break;
                case 'ADD_ANSWER':
                    dataQuestionCopy[idQuestion].answers.push({text:'add new ', answer: false})
                    break;
                default:
                    console.log('None')
            }
            
            dispatch(setQuestions(dataQuestionCopy));
        }
    }

    const handleQuestionName  = (index, text) => {
        const dataQuestionCopy = JSON.parse(JSON.stringify(questionData));
        dataQuestionCopy[index].textOfQuestion = text;
        dispatch(setQuestions(dataQuestionCopy));
    } 

    const handleAddNewQuestion = () => {
        const dataQuestionCopy = JSON.parse(JSON.stringify(questionData));
        dataQuestionCopy.push( {
            textOfQuestion: '',
            answers: [
                {text:'', answer: false},
            ]
        })
        dispatch(setQuestions(dataQuestionCopy));
    }

    return(
        <CreateQuestionWrapper>
            {
                questionData.map((question, index) => {
                    return(
                        <>
                             <h1>{`Question: ${index + 1}`}</h1>
                            <InputWrapper>
                                <input 
                                    type={'text'} 
                                    placeholder="Question" 
                                    value={question.textOfQuestion} 
                                    onChange={(e) => handleQuestionName(index, e.target.value)}
                                />
                            </InputWrapper>
                            <AnswersShow answers={question.answers} handleAnswers={handleAnswers(index)} indexOfQuestion={index}/>
                        </>
                    )
                })
            }
            <ButtonAddNewQuestion onClick={handleAddNewQuestion}>add new question</ButtonAddNewQuestion>
        </CreateQuestionWrapper>
    )
}

export default CreateQuestion;