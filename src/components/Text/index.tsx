import React from "react";
import { TextStyled } from "./styled";
import { ITextComponent } from "./types";

export const TextComponet:React.FC<ITextComponent> = (
    { 
        children, 
        $fontSize, 
        $fontWeight, 
        $margin,
        $color,
        $postion,
        id

    }) => {


    return(
        <TextStyled $fontSize={$fontSize} $fontWeight={$fontWeight} $margin={$margin} $color={$color ?? 'black'} $postion={$postion} id={id}>
            {children}
        </TextStyled>
    )
}