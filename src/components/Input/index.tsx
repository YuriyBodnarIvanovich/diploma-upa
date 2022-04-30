import React, { useState } from "react";
import { TextComponet } from "../Text";
import { InputStyle, InputWrapper } from "./styled";
import { InputProps } from "./types";

const InputComponent:React.FC<InputProps> = ({
  name,
  $width,
  $height,
  $border,
  $bottomborder,
  $margin,
  $placeholder,
  value,
  error,
  errorMessage,
  onChange,
  sumbit,
  id,
  colorLabel,
  type,
  bold,
  italic,
  fontSize,
}) => {
  const [ activate, setActivate ] = useState(false);
  const margin = value ? '14px 40px 0 42px' : '40px 40px 0 56px';


  return(
    <InputWrapper onClick={()=>{setActivate(true)}}>
        <TextComponet
          $margin={margin} 
          $color={colorLabel} 
          $fontSize="12px"
          $postion={'absolute'}>
          {$placeholder || ''}
        </TextComponet>
        <InputStyle 
          name={name}
          $width={$width} 
          $height={$height} 
          $border={$border} 
          type={type}
          $bottomborder={$bottomborder}
          $margin={$margin}
          error={(activate || sumbit) && error}
          value={value}
          onChange={onChange}
          placeholder={$placeholder}
          id={id}
          bold={bold}
          italic={italic}
          fontSize={fontSize}
        />
        {(activate || sumbit ) && error && (
          <TextComponet
            $margin={'1px 0 0 40px'} 
            $color="red"
            $fontSize={'12px'}>
            {errorMessage ?? ''}
          </TextComponet>
          )}
    </InputWrapper>
  )
}

export default InputComponent;