import React from "react";
import { IStyleData, StyleText } from "../RichTextEditor/types";
import { ContentWrapper } from "./styled";

const ShowContent = ({ dataText }) => {


    const convertTextStyle = (style: IStyleData) => {
        const styles: StyleText = {};
        if(style.bold){
            styles.fontWeight = 'bold';
        }

        if(style.italic){
            styles.fontStyle = 'italic';
        }

        if(style.fontSize){
            styles.fontSize = style.fontSize;
        }

        return {...styles};
    }

    const convertListStyle = (style: IStyleData, listStyleType?: string) => {
        const styles: StyleText = {};
        if(style.bold){
            styles.fontWeight = 'bold';
        }

        if(style.italic){
            styles.fontStyle = 'italic';
        }

        if(style.fontSize){
            styles.fontSize = style.fontSize;
        }

        if(listStyleType){
            styles.listStyleType = listStyleType;
        }

        return {...styles};  
    }

    return(
        <ContentWrapper>
             {
                dataText.map((item) => {
                    if(item.type === 'text'){   
                        if(item?.style?.newLine){
                            return(
                                (<span style={convertTextStyle(item.style)}><br/>{`${item.value}`}</span>)
                            )
                        }else{
                            return(
                                <span style={convertTextStyle(item.style)}>&nbsp;{ `${item.value}`}</span>
                            )
                        }
                    }

                    if(item.type === 'list'){
                        return(
                            <>
                                <span style={convertTextStyle(item.style)}>{item.title}</span>
                                {
                                    item.style.typeList === 'numbers' && item.value !== '' && (
                                        <ol style={convertListStyle(item.style)}>
                                            {item.value.split('|||').map((el) => (<li>{el}</li>))}
                                        </ol>
                                    )
                                }
                                {
                                    item.style.typeList === 'point' && item.value !== ''  && (
                                        <ul style={convertListStyle(item.style)}>
                                            {item.value.split('|||').map((el) => (<li>{el}</li>))}
                                        </ul>
                                    )
                                }
                                {
                                    item.style.typeList === 'emptyPoint' && item.value !== ''  && (
                                        <ul style={convertListStyle(item.style, 'circle')}>
                                            {item.value.split('|||').map((el) => (<li>{el}</li>))}
                                        </ul>
                                    )
                                }
                                
                               
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