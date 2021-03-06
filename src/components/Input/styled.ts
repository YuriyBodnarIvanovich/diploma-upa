import styled from "styled-components";
import { ITextarea } from "./types";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputStyle = styled.textarea<ITextarea>`
    width: ${({$width}) => $width ?? '100%'};
    height: ${({$height})=> $height ?? '26px'};
    border: ${({$border}) => $border};
    border-bottom: ${({$bottomborder}) => $bottomborder};
    outline: none;
    margin: ${({$margin}) => $margin};
    -webkit-appearance: none;
    ${({ error }) => error &&  `border-bottom: 2px solid red`};    
    background-color: rgba(255, 0, 0, 0);
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus {
        border: ${({$border}) => $border};
        border-bottom: ${({$bottomborder}) => $bottomborder};
        -webkit-text-fill-color: black;
        transition: background-color 5000s ease-in-out 0s;
    }
    z-index: 1;
    resize: none;
    ${({bold}) => bold && 'font-weight:bold;'}
    ${({italic}) => italic && 'font-style: italic;'}
    ${({fontSize}) => fontSize && `font-size:${fontSize}px;`}
`;
