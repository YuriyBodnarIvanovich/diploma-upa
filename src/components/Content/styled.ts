import styled from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: auto;  
    padding: 30px 40px 30px 40px;
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
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
`;

export const MainEvents = styled.div`
    width: 400px;
    height: 800px;
    background: rgba(255, 255, 255, .8);
    // box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 0.5px solid black;
    box-sizing: border-box;
    padding: 15px;
`;

export const PostsWrapper = styled.div`
    width: 460px;
    margin-left: 25px;
    height: 800px;
    overflow: scroll;

    div:last-child{
        margin-bottom: 0;
    }


`;

export const PostsBox = styled.div`
    width: 450px;
    height: 200px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, .8);
    // box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
    border: 0.5px solid black;
    border-radius: 10px;


`;

export const PostPeopleBox = styled.div`
    width: 450px;
    height: 200px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, .8);
    // box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
    border: 0.5px solid black;
    border-radius: 10px;


`;