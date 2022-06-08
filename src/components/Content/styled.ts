import styled from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
    height: auto;  
`;

export const Title = styled.h1`
    text-align: center;
    color: white;
    text-shadow: 2px 2px black;
    padding: 0;
    margin: 0;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    height: 75vh;
    background: white;
    margin-top: 25px;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 30px 30px 30px 30px;
    display: flex;
`;

export const MainEvents = styled.div`
    width: 700px;
    height: 71vh;
    background: rgba(255, 255, 255, .8);
    box-sizing: border-box;
    padding: 2px;
    overflow: scroll;

`;

export const PostsWrapper = styled.div`
    width: 600px;
    height: 71vh;
    overflow: scroll;
    padding: 3px;
    div:last-child{
        margin-bottom: 0;
    }
    margin-left: 40px;
`;

export const PostsBox = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, .8);
    border: 0.5px solid black;
    border-radius: 10px;


`;

export const PostPeopleBox = styled.div`
    width: 450px;
    height: 200px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, .8);
    border: 0.5px solid black;
    border-radius: 10px;
`;

export const BottomTools = styled.div`
    width: 100%;
    height: 120px;
    position: fixed;
    bottom: 0;
    background: white;
    z-index: 1;
    left: 0;
    box-shadow: 0px 8px 24px rgba(52, 54, 67, 0.2);
    displya: flex;
`;