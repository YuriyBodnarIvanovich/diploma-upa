import React from "react";
import { TextComponet } from "../Text";
import { CheckBoxStyled, CheckBoxWrapper, InputBox } from "./styled";
import { ICheckBoxCompoent } from "./types";

const CheckBox:React.FC<ICheckBoxCompoent> = ({ text, activeItem, setStatus }) => {

    const handleStatus = () =>  setStatus(!activeItem); 
    return(
        <CheckBoxWrapper active={activeItem}>
            <InputBox>
                <CheckBoxStyled type='checkbox' checked={activeItem}
                defaultChecked={ activeItem } onChange={handleStatus}/> 
            </InputBox>
            <TextComponet $fontWeight="500" $fontSize="16px" $color={'black'} $margin="0 0 0 9px">
                {text}   
            </TextComponet>
        </CheckBoxWrapper>
        
    )
}

export default CheckBox;