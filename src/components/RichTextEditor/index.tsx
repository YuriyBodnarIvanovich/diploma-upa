import React, { useState } from "react";
import ImageCreation from "../ImageCreation";
import ListCreation from "../ListCreation";
import ShowContent from "../ShowContent";
import TextCreation from "../TextCreation";
import ToolsAdmin from "../ToolsAdmin";
import { IDataText, IEditMode } from "./types";
import { RichTextEditorWrapper, SaveButton } from "./styled";
import ButtonComponent from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { setInitialDataText } from '../../redux/slices/createPostSlice';
import { useHistory } from "react-router-dom";
import { setInitialData } from "../../redux/slices/postsCatalogSlice";
import { AppState } from "../../redux/store";

const RichTextEditor = () => {
    const mainTitle = useSelector((state:AppState) => state.createPostReducer.title);
    const mainImage = useSelector((state:AppState) => state.createPostReducer.image);
    const mainDataYearFrom = useSelector((state:AppState) => state.createPostReducer.dataYearFrom);
    const mainDataYearTo = useSelector((state:AppState) => state.createPostReducer.dataYearTo);

    const [ dataText, setDataText ] = useState<IDataText[]>([]);
    const [ addNewItem, setNewItem ] = useState<IEditMode>({type: 'text', status: false});
    const dispatch = useDispatch();
    const history = useHistory();



    const handleSave = () => {
        dispatch(setInitialDataText(dataText));
        dispatch(setInitialData({
            id: 'wdnkqwndkj',
            idAuthor: '1221',
            title: mainTitle,
            image: mainImage,
            dataYearFrom: mainDataYearFrom,
            dataYearTo: mainDataYearTo,
            dataText:dataText 
        }));
        history.push('/')
    };
    

    return(
        <RichTextEditorWrapper>
            <ToolsAdmin addNewItem={addNewItem} setNewItem={setNewItem} setDataText={setDataText}/>
            <ShowContent dataText={dataText}/>
          <div style={{padding:'60px 40px 30px 40px'}}>
            {
                addNewItem.status && addNewItem.type === 'text' && (
                    <TextCreation setDataText={setDataText} setNewItem={setNewItem}/>
                )
            }
            {
                addNewItem.status && addNewItem.type === 'list' && (
                    <ListCreation dataText={dataText} setDataText={setDataText} setNewItem={setNewItem} typeList={addNewItem.typeList}/>
                )
            }
            {
                addNewItem.status && addNewItem.type === 'img' && (
                    <ImageCreation setDataText={setDataText} setNewItem={setNewItem}/>
                )
            }
          </div>
          {
              dataText.length > 0 && (
                <ButtonComponent
                    $width={'200px'}
                    $height={'60px'}
                    $background={'#F27A26'}
                    $color={'white'}
                    $border={'40px'}
                    $borderRadius={'15px'}
                    $position={'fixed'}
                    $bottom={'40px'}
                    onClick={handleSave}
                >Save</ButtonComponent>
              )
          }
         
        </RichTextEditorWrapper>
    )
}

export default RichTextEditor;