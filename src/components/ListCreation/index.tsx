import React, { useState } from "react";
import ButtonComponent from "../Button";
import CheckBox from "../CheckBox";
import InputComponent from "../Input";
import { 
    ListWrapper, 
    ButtonsWrapper, 
    InputWrapper, 
    ToolsWrapper, 
    FontSizeInput, 
    PostionBox 
} from "./styled";

const ListCreation  = ({ dataText, setDataText, setNewItem, typeList}) => {
    
    const [ listOption, setListOption ] = useState<string>('');
    const [ showAdditionalTools, setAdditionalTools ] = useState<boolean>(false);
    const [ fontSize, setFontSize ] = useState<number>(16);
    const [ boldStatus, setBoldStatus ] = useState<boolean>(false);
    const [ italicStatus, setItalicStatus ] = useState<boolean>(false);

    const addNewItemList = () => {
        const data = JSON.parse(JSON.stringify(dataText));
        const textValue = {
            value: `${data[data.length - 1]?.value ?? ''}${data[data.length - 1]?.value !== '' ? '|||' : ''}${listOption}`,
            style: {
                bold: boldStatus,
                fontSize: `${fontSize}px`,
                italic: italicStatus,
                typeList: typeList
            }
        };
        data[data.length - 1] = {...data[data.length - 1], value: textValue.value, style: textValue.style };
        setDataText(data);
        setListOption('');
    }

    const handleEndList = () =>  setNewItem(prev => ({...prev,status: false }));

    const handleAddNewItemTitle = () => {
        setDataText(prev => ([...prev, {type:'list', value: '', title: listOption, style:{...prev.style, typeList: typeList }}]));
        setListOption('');
    }
    const condition = dataText[dataText.length - 1]?.title;
    const handleAdittionalTools = () => setAdditionalTools(prev => !prev);
    const handleChangeSize= (e) => setFontSize(e.target.value);

    return(
        <ListWrapper>
              {
                showAdditionalTools && (
                    <ToolsWrapper>
                        <CheckBox  
                            answerId={'bold'} 
                            text={'bold'} 
                            activeItem={boldStatus} 
                            setStatus={setBoldStatus}
                        />
                        <CheckBox  
                            answerId={'italics'} 
                            text={'italics'} 
                            activeItem={italicStatus} 
                            setStatus={setItalicStatus}
                        />
                        <FontSizeInput>
                            <input value={fontSize} onChange={handleChangeSize} type='number'/>
                            <span>px</span>
                        </FontSizeInput>
                    </ToolsWrapper>
                )
            }
            <PostionBox>
                <ButtonComponent
                    $width="100px"
                    $background={'#F27A26'}
                    $color={'white'}
                    $borderRadius={'20px'}
                    $margin={'0 20px 0 0'}
                    onClick={handleAdittionalTools}>
                    {showAdditionalTools ? 'CLOSE' : 'OPEN'} 
                </ButtonComponent>
            </PostionBox>
            <InputWrapper>
                <InputComponent 
                    name='text'
                    value={listOption}
                    $width="594px"
                    $height="300px"
                    $border="1px solid black"
                    $bottomborder="none"
                    onChange={(e)=> setListOption(e.target.value)}
                    $placeholder={'Please write text....'}
                    bold={boldStatus}
                    italic={italicStatus}
                    fontSize={fontSize}
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
            </InputWrapper>
        </ListWrapper>
    )
}

export default ListCreation;