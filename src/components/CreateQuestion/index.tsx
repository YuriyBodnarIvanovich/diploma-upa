import React, { useState } from "react";
import { CreateQuestionWrapper, InputWrapper } from "./styled";


const CreateQuestion = () => {
    const [ question, setQuestion ] = useState('');
    
    return(
        <CreateQuestionWrapper>
            <InputWrapper>
                <input 
                    type={'text'} 
                    placeholder="Question" 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <input type={'text'} placeholder="Answer" />
                <button>delete</button>
                <input type='checkbox'/>
            </InputWrapper>
            <button>add new answer</button>
        </CreateQuestionWrapper>
    )
}

export default CreateQuestion;