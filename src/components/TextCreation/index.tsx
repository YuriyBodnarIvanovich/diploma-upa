import React, { useState } from "react";
import ButtonComponent from "../Button";
import CheckBox from "../CheckBox";
import InputComponent from "../Input";
import { IDataText } from "../RichTextEditor/types";
import { 
    TextWrapper, 
    ButtonsWrapper, 
    InputWrapper, 
    PostionBox, 
    ToolsWrapper, 
    FontSizeInput
} from "./styled";


const TextCreation = ({ setDataText, setNewItem }) => {
    const [ text, setText ] = useState<string>('');
    const [ showAdditionalTools, setAdditionalTools ] = useState<boolean>(false);
    const [ fontSize, setFontSize ] = useState<number>(16);
    const [ boldStatus, setBoldStatus ] = useState<boolean>(false);
    const [ italicStatus, setItalicStatus ] = useState<boolean>(false);
    const [ newLine, setNewLine ] = useState<boolean>(false);

    const handleAddNewItemText  = () => {
        const textValue: IDataText = {
            type: 'text',
            value: text,
            style: {
                bold: boldStatus,
                fontSize: `${fontSize}px`,
                italic: italicStatus,
                newLine:  newLine
            }
        };
        text !== '' && setDataText(prev => [...prev, textValue]);
        setText('');
    }

    const handleEnd = () => setNewItem({type: 'text', status: false});

    const handleAdittionalTools = () => setAdditionalTools(prev => !prev);

    const handleChangeSize= (e) => setFontSize(e.target.value);

    return(
        <TextWrapper>
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
                        <CheckBox  
                            answerId={'newLine'} 
                            text={'set new line'} 
                            activeItem={newLine} 
                            setStatus={setNewLine}/>
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
                    value={text}
                    $width="594px"
                    $height="300px"
                    $border="1px solid black"
                    $bottomborder="none"
                    onChange={(e)=> setText(e.target.value)}
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
            </InputWrapper>
        </TextWrapper>
    )
}

export default TextCreation;