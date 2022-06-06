import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 1;
    background: white;

`;

export const AdminFormBlock = styled.div`
    position: absolute;
    z-index: 2;
	background: white;
	box-shadow: 0px 8px 24px rgba(52, 54, 67, 0.2);
	border-radius: 30px;
	padding: 50px 50px 30px 50px;
	width: 594px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	@media screen and (max-width: 767px) {
		padding: 30px 15px 30px 15px;
		width: 330px;
		border-radius: 10px;
	}
`;

export const AdminFormBody = styled.div`
	margin: 30px 0 0px 0;
`;

export const Title = styled.div`
	font-weight: 900;
	font-size: 38px;
	line-height: 120%;
	text-align: center;
	color: #20252B;

	@media screen and (max-width: 1201px) {
		font-size: 28px;
	}

	@media screen and (max-width: 767px) {
		font-size: 20px;
	}
`;

interface BlockInputPlaceholderType {
	focused?: boolean;
}

export const BlockInputPlaceholder = styled.div<BlockInputPlaceholderType>`
  position: relative;
  padding-top: 10px;
  margin-bottom: 20px;

  p {
    font-weight: 600;
    font-size: ${({ focused }) => (!focused ? "12px" : "16px")};
    line-height: 160%;
    color: #556069;
    position: absolute;
    top: ${({ focused }) => (!focused ? "0" : "20px")};
    left: 16px;
    z-index: 0;
    transition: all 0.2s ease;
  }

	input {
		border: none;
		border-bottom: 2px solid #DEE1E7;
		width: 100%;
		height: 44px;
		padding: 5px 16px;
		position: relative;
		z-index: 1;
		color: #343643;
		background: transparent;
	}

	input:focus {
		top: 0px;
		outline: none;
		border-bottom: 2px solid #343643;
	}


    @media screen and (max-width: 767px) {
        margin: 0;
        width: 100%;
    }
   
`;

export const BlockInputPassword = styled.div<BlockInputPlaceholderType>`
	position: relative;
	padding-top: 10px;
	margin-bottom: 20px;

	p {
		font-weight: 600;
		font-size: ${({ focused }) => (!focused ? "12px" : "16px")};
		line-height: 160%;
		color: #556069;
		position: absolute;
		top: ${({ focused }) => (!focused ? "0" : "20px")};
		left: 16px;
		z-index: 0;
		transition: all 0.2s ease;
	}

	input {
		border: none;
		border-bottom: 2px solid #DEE1E7;
		width: 100%;
		height: 44px;
		padding: 5px 16px;
		position: relative;
		z-index: 1;
		color: #343643;
		background: transparent;
	}

	input:focus {
		top: 0px;
		outline: none;
		border-bottom: 2px solid #343643;
	}
`;

interface IconSeeYouType {
	open: boolean;
}
export const IconSeeYou = styled.div<IconSeeYouType>`
	display: inline-block;
	width: 30px;
	height: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	z-index: 2;
	cursor: pointer;
`;

export const ConcatButton = styled.button`
	min-width: 100%;
	margin: auto;
	padding: 0px 15px 0 15px;
	background: ${({ disabled }) =>
		disabled ? '#ffa78f' : '#FE724C'};
	border-radius: 10px;
	font-weight: bold;
	font-size: 14px;
	height: 50px;
	text-decoration: none;
	display: block;
	text-transform: uppercase;
	width: 220px;
	max-width: 100%;
	color: #white;
	border: none;
	text-align: center;

	@media screen and (max-width: 767px) {
		margin-top: 20px;
	}
`;


export const MessageError = styled.p`
	color: #E53247;
	&::first-letter {
		text-transform:capitalize;
	}
`;

export const AdminFormLink = styled.div`
    a{
        font-weight: bold;
        font-size: 14px;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #FE724C;
        margin: 30px 0 0px 0;
        display: block;
        cursor: pointer;
    }
`;