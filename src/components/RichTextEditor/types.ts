export interface IDataText {
    type: 'text' | 'list' | 'img',
    value: string,
    title?: string,
    size?: IStyledImg
    
}

interface IStyledImg {
    width: number,
    height: number,
}

export interface IEditMode {
    type: 'text' | 'list' | 'img',
    status: boolean,
    title?: string, 
    typeList?: 'numbers' | 'emptyPoint' | 'point',  
}