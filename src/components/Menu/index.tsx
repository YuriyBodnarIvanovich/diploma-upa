import React, { useState } from "react";
import { MenuWrapper, LogoImg, LoginPart, LinksWrapper, AvatarBox, DropMenu, SearchContainer } from './styled';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '../Button';
import ukraineIcon from './ukraine.png'
import { useAuth0 } from "@auth0/auth0-react";

export const Menu = ({admin = false, name = '', avatar = ''}) => {

    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    const searchTypeData = [ 'Author', 'Post' ];
    const [ showDropDownSearch, setStatusOfDropDownSearch ] = useState<boolean>(false);

    const [ showDropDown, setStatusOfDropDown ] = useState<boolean>(false);
    const [ searchType, setSearchType ] = useState<number>(0);

    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleChageTypeSearch = (index: number) => {
        return () => {
            setSearchType(index);
            setStatusOfDropDownSearch(false);
        }
    }

    return(
        <MenuWrapper>
            <LogoImg>
                <img src={ukraineIcon}/>
                <LinksWrapper>
                    <NavLink to={'/'}>
                        HOME
                    </NavLink>
                    {admin && (
                        <NavLink to={'/admin/create'}>
                            CREATE POST
                        </NavLink>
                    )}
                </LinksWrapper>
                <SearchContainer>
                    <p onClick={() => setStatusOfDropDownSearch(prev => !prev)}>{searchTypeData[searchType]}</p>
                    <input placeholder={`Search ${searchTypeData[searchType]}`}/>
                    {
                        showDropDownSearch && (
                            <DropMenu>
                                <span onClick={handleChageTypeSearch(0)}>Author</span>
                                <span onClick={handleChageTypeSearch(1)}>Post</span>
                            </DropMenu>
                        )
                    }
                </SearchContainer>
                
            </LogoImg>
            <LoginPart>
                {
                    isAuthenticated ? (
                       <>
                            <AvatarBox>
                                <img src={user?.picture} onClick={() => setStatusOfDropDown(prev => !prev)}/>
                                <p>{user?.given_name + ' ' +user?.family_name}</p>
                                {showDropDown && (
                                    <DropMenu>
                                        <NavLink to={'/user-page'}>
                                            User page
                                        </NavLink>
                                        <p onClick={() => logout({ returnTo: window.location.origin })}>Logout</p>
                                    </DropMenu>
                                )}
                            </AvatarBox>
                           
                        </>
                    ) : (
                        <ButtonComponent
                           $width={'100px'}
                           $height={'50px'}
                           $background={'#777776'}
                           $margin={'30px 0 0 100px'}
                           $borderRadius={'10px'}
                           onClick={handleLogin}
                        >LOGIN</ButtonComponent>
                    )
                }
            </LoginPart>
        </MenuWrapper>
    )
}

