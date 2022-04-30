export interface IDataText {
    type: 'text' | 'list' | 'img',
    value: string,
    title?: string,
    style?: IStyleData,    
}

export interface IStyleData {
    newLine?: boolean,
    bold?: boolean,
    fontSize?: string,
    italic?: boolean,
    typeList?: 'numbers' | 'emptyPoint' | 'point',
}

export interface IEditMode {
    type: 'text' | 'list' | 'img',
    status: boolean,
    title?: string, 
    typeList?: 'numbers' | 'emptyPoint' | 'point',
}

export interface StyleText {
    newLine?: boolean,
    fontWeight?: string,
    fontSize?: string,
    fontStyle?: string,
    listStyleType?: string,
}