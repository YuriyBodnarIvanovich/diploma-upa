import styled from "styled-components";

export const MenuWrapper = styled.div`
    width: 100%;
    height: 100px;
    a{
        margin-right: 100px;
    }

    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px #403F3F;
    padding: 0px 0 10px 0;
    postion: relative;
    box-sizing: border-box;
`;

export const LogoImg = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    img{
        width: 100px;
        height: 100px;
    }
`;


export const LinksWrapper = styled.div`
    widrh: 300px;
    display: flex;
    justify-content: space-between;
    a{
        width: 150px;
        display: block;
        text-decoration: none;
        font-size: 22px;
        color: #403F3F;
        font-weight: bold;
        margin: 0;
        margin-top: 40px;

    }
    margin-left: 70px;
`;

export const LoginPart = styled.div`
    width: 250px;
    height: 100px;
`;

export const AvatarBox = styled.div`
    width: 300px;
    height: 200px;
    margin-top: 20px;
    display: flex;
    position: relative;
    img{
        width: 70px;
        height: 70px;
        border-radius: 50px;
    }

    p{
        margin-left: 20px;
        font-size: 22px;
        color: #403F3F;
        font-weight: bold;
    }
`;

export const DropMenu = styled.div`
    position: absolute;
    width: 180px;
    height:120px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.4);
    box-sizing: border-box;
    z-index: 100;
    top: 80px;

    p{
        height: 0px;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;
        color: black;
    }

    a{
        width: 150px;
        display: block;
        text-decoration: none;
        font-size: 22px;
        color: black;
        margin: 0;
        padding: 20px 0 0 20px;
        cursor: pounter;
    }

    span{
        margin-top: 15px;
        padding: 0 0 0 20px;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
    }
`;


export const SearchContainer = styled.div`
    width: 400px;
    height: 100px;
    padding: 25px 0 0 100px;
    display: flex;

    input{
        width: 400px;
        height: 40px;
        background: rgba(0, 0, 0, 0);
        outline: none;
        border: none;
        border-bottom: 2px solid #403F3F;
        font-size: 28px;
        color: #403F3F;
        
        &::placeholder{
            color: #403F3F;
        }
    }

    p{
        margin-top: 15px;
        padding: 0 40px 0 0px;
        color: #403F3F;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
    }
`;