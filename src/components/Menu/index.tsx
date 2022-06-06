import React, { useCallback, useEffect, useState } from "react";
import { MenuWrapper, LogoImg, LoginPart, LinksWrapper, AvatarBox, DropMenu, SearchContainer } from './styled';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '../Button';
import { useHistory } from "react-router-dom";
import axios from "axios";
import ukraineIcon from './ukraine.png'
export const Menu = ({admin = false, name = '', avatar = ''}) => {

    const searchTypeData = [ 'Author', 'Post' ];
    const [ authSatatus, setAuthStatus ] = useState<boolean>(true);
    const [ showDropDownSearch, setStatusOfDropDownSearch ] = useState<boolean>(false);

    const [ showDropDown, setStatusOfDropDown ] = useState<boolean>(false);
    const [ searchType, setSearchType ] = useState<number>(0);

    const history = useHistory();

    const handleLogin = () => {
        history.push('/login')
    };

    // const  checkJWT = useCallback(() => {
    //     axios.post('http://localhost:3001/checkJWT', {
    //     }, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
    //         .then((r) => {
    //             setAuthStatus(true)
    //         })
    //         .catch(function (error) {
    //             setAuthStatus(false)
    //         });
    // },[])
    
    // useEffect(() => {
    //   checkJWT();
    // }, []);
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
                    authSatatus ? (
                       <>
                            <AvatarBox>
                                <img src={avatar} onClick={() => setStatusOfDropDown(prev => !prev)}/>
                                <p>{name}</p>
                                {showDropDown && (
                                    <DropMenu>
                                        <NavLink to={'/user-page'}>
                                            User page
                                        </NavLink>
                                        <p>Logout</p>
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

