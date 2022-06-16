import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions } from '../../redux/slices/createQuestions';
import { AppState } from '../../redux/store';
import { AnswerBox, InputWrapper, ButtonAddNew } from './styled';

export const AnswersShow = ({ answers, handleAnswers, indexOfQuestion }) => {
    const questionData = useSelector((state:AppState) => state.createQuestionsReducer.questions);
    const dispatch = useDispatch();


    const handleOnChange = (index, text) => {
        const copyData = JSON.parse(JSON.stringify(questionData));
        copyData[indexOfQuestion].answers[index].text = text;
        dispatch(setQuestions(copyData));
    }

    const handleAnswerStatus = (index, status) => {
        const copyData = JSON.parse(JSON.stringify(questionData));
        copyData[indexOfQuestion].answers[index].answer = status;
        dispatch(setQuestions(copyData));
    }

    return(
        <AnswerBox>
            {
                answers.map((item, index) => {
                    return(
                        <InputWrapper>
                            <input 
                                type={'text'} 
                                placeholder="Answer" 
                                value={item.text} 
                                onChange={(e) => handleOnChange(index, e.target.value)}
                            />
                            <button onClick={() =>  handleAnswers({}, index, 'DELETE_ANSWER' )}>delete</button>
                            <input 
                                type='checkbox' 
                                defaultChecked={item.answer} 
                                onChange={() => handleAnswerStatus(index, !item.answer)}
                            />
                        </InputWrapper>
                    )
                })
            }
            <ButtonAddNew onClick={() =>  handleAnswers({}, 0, 'ADD_ANSWER' )}>add new answer</ButtonAddNew>
        </AnswerBox>
    )
}