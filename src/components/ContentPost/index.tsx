import React from "react";
import { useSelector } from "react-redux";
import { IDataText, IStyleData, StyleText } from "../RichTextEditor/types";
import { AppState } from '../../redux/store';
import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { 
    ContentWrapper, 
    MainDataWrapper,
    TitleWrapper,
    ToolAction
} from "./styled";

const ContentPost = () => {
    const params = useParams();
    const dataPost = useSelector((state:AppState) => state.postCatalogReducer.catalogPostData.filter(i => i.id === params['id']));
    const history = useHistory();

    const convertTextStyle = (style?: IStyleData) => {
        const styles: StyleText = {};
        if(style?.bold){
            styles.fontWeight = 'bold';
        }

        if(style?.italic){
            styles.fontStyle = 'italic';
        }

        if(style?.fontSize){
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

    const handleRedirect = (url: string) => {
        return () => {
            history.push(url);
        }
    }

    return(
        <ContentWrapper>
            <MainDataWrapper>
                <img src={dataPost[0].image}/>
                <TitleWrapper>
                <h1>{dataPost[0].title}</h1>
                <p>{`${dataPost[0].dataYearFrom} - ${dataPost[0].dataYearTo}`}</p>
                </TitleWrapper>
                <ToolAction>
                    <button onClick={handleRedirect('/create-question')}>create question</button>
                    <button>pass the survey</button>
                    <button>save</button>
                </ToolAction>
            </MainDataWrapper>
             {
                dataPost[0].dataText.map((item: IDataText) => {
                    if(item.type === 'text'){   
                        return generateText(item);
                    }
                    if(item.type === 'list'){
                        return(
                            <>
                                <span style={convertTextStyle(item.style)}>{item.title}</span>
                                {
                                    item?.style?.typeList === 'numbers' && item.value !== '' && (
                                        <ol style={convertListStyle(item.style)}>
                                            {item.value.split('|||').map((el) => (<li>{el}</li>))}
                                        </ol>
                                    )
                                }
                                {
                                    item?.style?.typeList === 'point' && item.value !== ''  && (
                                        <ul style={convertListStyle(item.style)}>
                                            {item.value.split('|||').map((el) => (<li>{el}</li>))}
                                        </ul>
                                    )
                                }
                                {
                                    item?.style?.typeList === 'emptyPoint' && item.value !== ''  && (
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

export default ContentPost;

