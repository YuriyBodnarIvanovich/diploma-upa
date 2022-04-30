import React from "react";
import { RangePosition, RangeWrapper } from "./styled";


export const RangeComponent = ({ changeRange, yearRange }) => {
    const handleRange = (e) => {
        changeRange(e.target.value)
    }

    return(
        <RangePosition>
            <span>1917</span>
            <RangeWrapper type="range" min="1917" max="1956" value={yearRange} onChange={handleRange}  id="myRange"/>
            <span>1956</span>
        </RangePosition>
    )
}