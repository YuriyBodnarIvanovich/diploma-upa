import styled from "styled-components";

export const AdminCreateWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const ModalWindow = styled.div`
    width: 800px;
    height: 300px;
    box-sizing: border-box;
    border-radius: 15px;
    -moz-box-shadow: 0 0 15px #ccc;
    -webkit-box-shadow: 0 0 15px #ccc;
    box-shadow: 0 0 15px #ccc;
    text-align: center;
    // padding: 20px 40px 20px 40px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    background: white;
`;