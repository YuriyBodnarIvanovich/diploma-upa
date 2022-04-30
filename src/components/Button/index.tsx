import React from "react";
import { ButtonStyled } from "./styled";
import { IButtonComponent } from "./types";

const ButtonComponent: React.FC<IButtonComponent> = ({ 
    children, 
    onClick, 
    mainButton, 
    $width, 
    $height,
    $borderRadius,
    $borderRadiusBottomLeft,
    $borderRadiusBottomRight,
    $border,
    $fontWeidth,
    $fontSize,
    $color,
    $position,
    $bottom,
    $disabled,
    $background,
    $margin}) => {
    return(
        <ButtonStyled
         onClick={onClick} 
         $background={$background} 
         mainButton={mainButton}
         $width={$width}
         $height={$height}
         $margin={$margin}
         $borderRadius={$borderRadius}
         $borderRadiusBottomLeft={$borderRadiusBottomLeft}
         $borderRadiusBottomRight={$borderRadiusBottomRight}
         $border={$border}
         $fontWeidth={$fontWeidth}
         $fontSize={$fontSize}
         $color={$color}
         $position={$position}
         $bottom={$bottom}
         $disabled={$disabled}
         disabled={$disabled}>
            {children}
        </ButtonStyled>
    )
}

export default ButtonComponent;