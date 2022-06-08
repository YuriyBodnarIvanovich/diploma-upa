export interface ICreatePost {
    id: string;
    idAuthor: string;
    idQuestionnare?: string;

    title: string;
    image: string;
    dataYearFrom: string;
    dataYearTo: string;
    dataText: IDataText[]
}


export interface IDataText {
    type: 'text' | 'list' | 'img',
    value: string,
    title?: string,
    href?: string,
    style?: IStyleData,
    types?: ITypesData,
}

export interface IStyleData {
    newLine?: boolean,
    bold?: boolean,
    fontSize?: string,
    italic?: boolean,
    typeList?: 'numbers' | 'emptyPoint' | 'point',
}

interface ITypesData {
    typeText?: 'link',
    typeList?: 'numbers' | 'emptyPoint' | 'point',
}

export interface IPostCatalog{
    catalogPostData: ICreatePost[],
    catalogPeople: ICreatePost[],
}
