import styled from "styled-components";
import { IBoxInput } from "./types";

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
    width: 150px;
    height: 344px;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    margin-right: 20px;
    box-sizing: border-box;
`;

export const FontSizeInput = styled.div<IBoxInput>`
    width: ${({$width}) => $width};
    height: ${({$height}) => $height};
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

export const LinkInput = styled.input`
    width: 100%;
    height: 30px;
    border: 1 px slid black;
    margin-top: 10px;
`;