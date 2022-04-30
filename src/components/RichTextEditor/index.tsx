import React, { useState } from "react";
import ImageCreation from "../ImageCreation";
import ListCreation from "../ListCreation";
import ShowContent from "../ShowContent";
import TextCreation from "../TextCreation";
import ToolsAdmin from "../ToolsAdmin";
import { IDataText, IEditMode } from "./types";
import { RichTextEditorWrapper } from "./styled";

const RichTextEditor = () => {

    const [ dataText, setDataText ] = useState<IDataText[]>([]);
    const [ addNewItem, setNewItem ] = useState<IEditMode>({type: 'text', status: false});

    return(
        <RichTextEditorWrapper>
            <ToolsAdmin addNewItem={addNewItem} setNewItem={setNewItem}/>
            {dataText.length > 0 && (<ShowContent dataText={dataText}/>)}
          <div style={{padding:'60px 40px 30px 40px'}}>
            {
                addNewItem.status && addNewItem.type === 'text' && (
                        <TextCreation setDataText={setDataText} setNewItem={setNewItem}/>
                )
            }
            {
                addNewItem.status && addNewItem.type === 'list' && (
                    <ListCreation dataText={dataText} setDataText={setDataText} setNewItem={setNewItem}/>
                )
            }
            {
                addNewItem.status && addNewItem.type === 'img' && (
                    <ImageCreation setDataText={setDataText} setNewItem={setNewItem}/>
                )
            }
          </div>
        </RichTextEditorWrapper>
    )
}

export default RichTextEditor;