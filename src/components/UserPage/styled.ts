import styled from "styled-components";

export const UserPageWrapper = styled.div`
    width: 100%;
    heigth: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
`;

export const UserInfoBox = styled.div`
    // border: 2px solid black;
    padding: 20px;
    width: 600px;
    height: 320px;

    p{
        font-size: 32px;
        font-style: bold;
    }

    img{
        width: 300px;
        heigth: 300px;
    }
`;

export const MainEvents = styled.div`
    width: 550px;
    height: 600px;
    background: rgba(255, 255, 255, .8);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px;
    overflow: scroll;
    margin-left: 50px;

`;