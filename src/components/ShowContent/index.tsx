import React from "react";
import { useSelector } from "react-redux";
import { IStyleData, StyleText } from "../RichTextEditor/types";
import { AppState } from '../../redux/store';

import { 
    ContentWrapper, 
    MainDataWrapper,
    TitleWrapper
} from "./styled";

const ShowContent = ({ dataText }) => {
    const mainTitle = useSelector((state:AppState) => state.createPostReducer.title);
    const mainImage = useSelector((state:AppState) => state.createPostReducer.image);
    const mainDataYearFrom = useSelector((state:AppState) => state.createPostReducer.dataYearFrom);
    const mainDataYearTo = useSelector((state:AppState) => state.createPostReducer.dataYearTo);

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

    const newLineOrSpace = (newLine: boolean) => newLine ? (<><br/><br/></>) : (<span>&nbsp;</span>);

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
            <MainDataWrapper>
                <img src={mainImage}/>
                <TitleWrapper>
                <h1>{mainTitle}</h1>
                <p>{`${mainDataYearFrom} - ${mainDataYearTo}`}</p>
                </TitleWrapper>
               
            </MainDataWrapper>
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