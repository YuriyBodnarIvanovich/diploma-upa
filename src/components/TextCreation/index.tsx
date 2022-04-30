import React, { useState } from "react";
import ButtonComponent from "../Button";
import InputComponent from "../Input";
import { TextWrapper, ButtonsWrapper } from "./styled";


const TextCreation = ({ setDataText, setNewItem }) => {
    const [text, setText ] = useState<string>('');

    const handleAddNewItemText  = () => {
        text !== '' && setDataText(prev => [...prev, {type: 'text', value: text}]);
        setText('');
    }

    const handleEnd = () => setNewItem({type: 'text', status: false});

    return(
        <TextWrapper>
            <InputComponent 
                name='text'
                value={text}
                $width="594px"
                $height="300px"
                $border="1px solid black"
                $bottomborder="none"
                onChange={(e)=> setText(e.target.value)}
                $placeholder={'Please write text....'}
            />
            <ButtonsWrapper>
                <ButtonComponent
                    $width={'300px'}
                    $height={'40px'}
                    $background={'white'}
                    $color={'black'}
                    $borderRadiusBottomLeft={'15px'}
                    $border={'1px solid black'}
                    onClick={handleEnd}
                >end</ButtonComponent>
                <ButtonComponent
                    $width={'300px'}
                    $height={'40px'}
                    $background={'#F27A26'}
                    $color={'white'}
                    $borderRadiusBottomRight={'15px'}
                    onClick={handleAddNewItemText}
                >add</ButtonComponent>
            </ButtonsWrapper>
           

        </TextWrapper>
    )
}

export default TextCreation;