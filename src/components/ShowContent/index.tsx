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

    const newLineOrSpace = (newLine: boolean) => newLine ? (<br/>) : (<span>&nbsp;</span>);

    const generateText = (item) => {
        if(item.types?.typeText === 'link'){
            return (
                <a style={convertTextStyle(item.style)} href={`${item.href}`} target="_blank">
                    {newLineOrSpace(item?.style?.newLine)}{`${item.value}`}
                </a>
            )
        }
        return (
            <span style={convertTextStyle(item.style)}>
                {newLineOrSpace(item?.style?.newLine)}{`${item.value}`}
            </span>
        )
    }

    return(
        <ContentWrapper>
             {
                dataText.map((item) => {
                    if(item.type === 'text'){   
                        return generateText(item);
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