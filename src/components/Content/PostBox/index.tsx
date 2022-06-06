import React from "react";
import { ChangeWrapper, PostsWrapper } from "./styled";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendDataToBack } from "../../../redux/slices/userDataSlice";

const PostBox = ({id, img, title, from, to, change=false}) => {
    const history = useHistory();
    const dispatch = useDispatch();


    const handleDeletePost = (id: string) => dispatch(sendDataToBack(id))

    return(
        <PostsWrapper onClick={() => history.push(`/post/${id}`)}>
            <img src={img}/>
            <div>
                <p>{title}</p>
                <p>{`${from} - ${to}`}</p>
            </div>
            {change && (
                <ChangeWrapper>
                    <h1>X</h1>
                </ChangeWrapper>
            )}
        </PostsWrapper>
    )
}

export default PostBox;