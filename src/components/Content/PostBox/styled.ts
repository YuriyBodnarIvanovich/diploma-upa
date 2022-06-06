import styled from "styled-components";

export const PostsWrapper = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, .8);
    border: 0.5px solid black;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    cursor: pointer;
    img{
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    p{
        padding: 35px 0 0 10px;;
        font-weight: bold;
    }
    position: relative;
`;

export const ChangeWrapper = styled.div`
    width: 20px;
    heigth: 20px;
    position: absolute;
    top:10px;
    right: 10px;
    h1{
        margin: 0;
        cursor: pointer;
    }
`; 