import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import PostBox from "../Content/PostBox";
import { MainEvents, UserInfoBox, UserPageWrapper } from "./styled";

const UserPage = () => {

    const userData = useSelector((state:AppState) => state.userDataRedicer);

    return(
        <UserPageWrapper>
            <UserInfoBox>
                <h2>User Info:</h2>
                <img src={userData.avatarPhoto}/>
                <p>{'Name: ' + userData.name}</p>
                <p>{'Login: ' + userData.login}</p>
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