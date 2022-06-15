import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import PostBox from "../Content/PostBox";
import { MainEvents, UserInfoBox, UserPageWrapper } from "./styled";

const UserPage = () => {

    const userData = useSelector((state:AppState) => state.userDataRedicer);
    const { user } = useAuth0();

    return(
        <UserPageWrapper>
            <UserInfoBox>
                <h2>User Info:</h2>
                <img src={user?.picture}/>
                <p>{'Name: ' + user?.given_name}</p>
                <p>{'Surname: ' + user?.family_name}</p>
                <p>{'Login: ' + user?.email}</p>
            </UserInfoBox>
            <MainEvents>
                <h2>User save posts:</h2>

                {
                    userData.catalogData.map((item) => {
                        return(
                            <PostBox
                                id={item.id}
                                img={item.src} 
                                title={item.title} 
                                from={item.from} 
                                to={item.to}
                                change={true}
                            />
                        )
                    })
                }
             </MainEvents>
        </UserPageWrapper>
    )
}

export default UserPage;