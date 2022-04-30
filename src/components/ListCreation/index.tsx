import React, { useState } from "react";
import ButtonComponent from "../Button";
import InputComponent from "../Input";
import { ListWrapper, ButtonsWrapper } from "./styled";

const ListCreation  = ({ dataText, setDataText, setNewItem}) => {
    
    const [ listOption, setListOption ] = useState<string>('');
    
    const addNewItemList = () => {
        const data = JSON.parse(JSON.stringify(dataText));
        data[data.length - 1].value = `${data[data.length - 1]?.value ?? ''}${data[data.length - 1]?.value !== '' ? '|||' : ''}${listOption}`;
        setDataText(data);
        setListOption('');
    }

    const handleEndList = () => {
        setNewItem(prev => ({...prev,status: false }));
    }

    const handleAddNewItemTitle = () => {
        setDataText(prev => ([...prev, {type:'list', value: '', title: listOption}]));
        setListOption('');
    }
    const condition = dataText[dataText.length - 1]?.title ;
    return(
        <ListWrapper>
            <InputComponent 
                name='text'
                value={listOption}
                $width="594px"
                $height="300px"
                $border="1px solid black"
                $bottomborder="none"
                onChange={(e)=> setListOption(e.target.value)}
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
                    onClick={handleEndList}
                >end</ButtonComponent>
                <ButtonComponent 
                    $width={'300px'}
                    $height={'40px'}
                    $background={'#F27A26'}
                    $color={'white'}
                    $borderRadiusBottomRight={'15px'}
                    onClick={condition ? addNewItemList : handleAddNewItemTitle}>
                    {condition ? 'add new option' : 'add title'}
                </ButtonComponent>
            </ButtonsWrapper>
        </ListWrapper>
    )
}

export default ListCreation;