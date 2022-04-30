import React, { useState } from "react";
import ButtonComponent from "../Button";
import InputComponent from "../Input";
import { ImageWrapper, ButtonsWrapper } from "./styled";


const ImageCreation = ({ setDataText, setNewItem}) => {
    const [ srcImage, setSrcImage ] = useState<string>('');
   
    const handleAddPhoto = () => {
        setDataText(prev => [...prev, {type: 'img', value: srcImage }]);
        setSrcImage('');
    }

    const handleEnd = () => setNewItem(prev => ({...prev, status: false}));

    return(
        <ImageWrapper>
            <InputComponent 
                name='text'
                value={srcImage}
                $width="594px"
                $height="300px"
                $border="1px solid black"
                $bottomborder="none"
                onChange={(e)=> setSrcImage(e.target.value)}
                $placeholder="add url of photo"
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
                    onClick={handleAddPhoto}
                >add photo</ButtonComponent>
            </ButtonsWrapper>
        </ImageWrapper>
    )
}

export default ImageCreation;