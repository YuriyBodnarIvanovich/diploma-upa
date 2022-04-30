import React from "react";
import { ContentWrapper } from "./styled";

const ShowContent = ({ dataText }) => {
    return(
        <ContentWrapper>
             {
                dataText.map((item) => {
                    if(item.type === 'text'){
                        return(
                            <p> &emsp;{ `${item.value}`}</p>
                        )
                    }

                    if(item.type === 'list'){
                        return(
                            <>
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.value.split('|||').map((el) => (<li>{el}</li>))}
                                </ul>
                            </>
                        )
                    }

                    if(item.type === 'img'){
                        return <img src={`${item.value}`} />
                    }
                    
                })
            }


        </ContentWrapper>
    )
}

export default ShowContent;