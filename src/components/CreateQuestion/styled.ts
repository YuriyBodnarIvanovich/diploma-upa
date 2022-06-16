import styled from "styled-components";

export const CreateQuestionWrapper = styled.div`
    width: 100%;
    height: auto;
    min-height: 80vh;
    padding: 30px 30px 300px 30px;
    input[type=text]{
        width: 800px;
        height: 40px;
        background: rgba(0, 0, 0, 0);
        outline: none;
        border: none;
        border-bottom: 2px solid #403F3F;
        font-size: 28px;
        color: #403F3F;
        
        &::placeholder{
            color: #403F3F;
        }        
    }
    input[type=checkbox]{
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0);
        outline: none;
        border: none;
        border-bottom: 2px solid #403F3F;
        font-size: 28px;
        color: #403F3F; 
        margin-left: 40px;   
    }
    button{
        width: 250px;
        height:80px;
        background: #F27A26;
        color: white;
        border-radius: 20px;
        border: none;https://www.instagram.com/accounts/login/?next=/yevhenii_rieznik/
        font-size: 26px;
        padding: 15px;
        cursor: pointer;
        margin-left: 30px;
    }
    h1{
        margin-top: 100px;
    }
`;

export const InputWrapper = styled.div`
    width: 1200px;
    height: 80px;
    display: flex;
    // justify-content: space-between;
    margin-top: 50px;
    p{
        margin-top: 15px;
        padding: 0 40px 0 0px;
        color: #403F3F;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    button{
        width: 80px;
        height:50px;
        background: red;
        color: white;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        padding: 15px;
        cursor: pointer;
        margin-left: 30px;
    }

`;

export const AnswerBox = styled.div`
    width: 100%;
    padding: 25px 0 0 40px;
`;

export const ButtonAddNew = styled.button`
    font-weight: bold;
    font-size: 22px;
    margin: 0 0 0 40px;
`;

export const ButtonAddNewQuestion = styled.button`
    font-weight: bold;
    font-size: 22px;
    margin: 50px 0 0 0;
`;
