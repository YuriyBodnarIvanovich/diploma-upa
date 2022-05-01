import React, { useState } from "react";
import { IEditMode } from "../RichTextEditor/types";
import { ToolsAdminWrapper, ToolsBox, TextButton, ListButton, ListDropDown, DropDownWrapper } from "./styled";

const ToolsAdmin = ({ addNewItem, setNewItem, setDataText }) => {
    const [ dropDownList, setDropDownList ] = useState<boolean>(false);

    const handleActiveMode = (type: IEditMode['type']) => {
        type === 'list' && setDropDownList(prev => !prev);
        !addNewItem.status && setNewItem({type: type, status: true});
    }

    const handleActiveList = (typeList: IEditMode['typeList']) => {
        return () => {
            setDropDownList(false);
            !addNewItem.status && setDataText(prev => [...prev, {type: 'list', value: '', title: '', style: {typeList: typeList}}]);
            !addNewItem.status && setNewItem({type: 'list', status: true, typeList: typeList});
        }
    }

    return(
        <ToolsAdminWrapper>
            <ToolsBox>
                <TextButton onClick={() => handleActiveMode('text')}>Text</TextButton>
                <DropDownWrapper>
                    <ListButton onClick={() => setDropDownList(prev => !prev)}>List</ListButton>
                    {
                        dropDownList && (
                            <ListDropDown>
                                <p onClick={handleActiveList('numbers')}>numbers</p>
                                <p onClick={handleActiveList('emptyPoint')}>empty point</p>
                                <p onClick={handleActiveList('point')}>point</p>
                            </ListDropDown>
                        )
                    }
                </DropDownWrapper>
                <ListButton onClick={() => handleActiveMode('img')}>Image</ListButton>
            </ToolsBox>
        </ToolsAdminWrapper>
    )
}

export default ToolsAdmin;