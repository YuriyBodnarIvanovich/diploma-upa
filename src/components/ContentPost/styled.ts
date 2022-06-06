import styled from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-radius: 15px;
    -moz-box-shadow: 0 0 15px #ccc;
    -webkit-box-shadow: 0 0 15px #ccc;
    box-shadow: 0 0 15px #ccc;
    text-align: center;
    padding: 20px 40px 20px 40px;
    text-align: left;
`;

export const MainDataWrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    position: relative;
    img{
        width: 300px;
        height: 300px;
    }  

    button{
        width: 100px;
        height:50px;
        background: #F27A26;
        color: white;
        border-radius: 20px;
        border: none;
        font-size: 28px;
        position: absolute;
        right: 20px;
        cursor: pointer;
    }
`;

export const TitleWrapper = styled.div`
    padding: 10px 10px 10px 30px;

`;