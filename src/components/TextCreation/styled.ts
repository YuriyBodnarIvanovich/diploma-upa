import styled from "styled-components";

export const TextWrapper = styled.div`
    min-width: 600px;
    display: flex;
    position: fixed;
    z-index: 1;
    bottom: 10px;
    right: 10px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
`;

export const PostionBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ToolsWrapper = styled.div`
    width: 100px;
    height: 344px;
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    margin-right: 20px;
    overflow-y: hidden;
    box-sizing: border-box;
`;

export const FontSizeInput = styled.div`
    width: 80px;
    height: 30px;
    display: flex;
    margin-top:20px;

    input {
        width: 40px;
        height: 30px;
        border: 2px solid black;
        font-size: 16px;

    }
    
    span{
        display: block;
        margin: 6px 0 0 10px;
    }
`;