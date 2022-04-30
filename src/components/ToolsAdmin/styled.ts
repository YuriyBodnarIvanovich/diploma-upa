import styled from "styled-components";

export const ToolsAdminWrapper = styled.div`
    padding: 10px 0 40px 0;
`;

export const ToolsBox = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    button {
        width: 250px;
        height: 70px;
        color: white;

    }
`;

export const TextButton  = styled.button`
    width: 250px;
    height: 70px;
    background: #F27A26;
    border-radius: 15px;
    border: none;
    font-weight: bold;
    font-size: 32px;
    cursor: pointer;
`;

export const ListButton  = styled.div`
    width: 250px;
    height: 70px;
    background: #F27A26;
    border-radius: 15px;
    border: none;
    font-weight: bold;
    font-size: 32px;
    cursor: pointer;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;


export const DropDownWrapper = styled.div`
    display: flex;
    flexDirection: column;
`;


export const ListDropDown = styled.div`
    position: absolute;
    z-index: 1;
    width: 200px;
    height: auto;
    background: white;
    margin: 75px 0 0 25px;
    border-radius: 15px;
    -moz-box-shadow: 0 0 15px #ccc;
    -webkit-box-shadow: 0 0 15px #ccc;
    box-shadow: 0 0 15px #ccc;
    text-align: center;
    p{
        cursor: pointer;
        padding: 5px 0 5px 0;
        font-weight: bold;
    }
`;