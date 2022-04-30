import styled from "styled-components";

export const RangePosition = styled.div`
    width: 100%;
    height: 40px;
    padding-top: 15px;
    display: flex;
    justify-content: center;

    color: black;
`;

export const RangeWrapper = styled.input`

  &{
    -webkit-appearance: none;
    width: 600px;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    margin: 0 15px 0 15px;
  }
  
  &:hover {
    opacity: 1;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: black;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04AA6D;
    cursor: pointer;
  }

`;