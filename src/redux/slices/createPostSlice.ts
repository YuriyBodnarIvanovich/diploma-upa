import { createSlice } from '@reduxjs/toolkit';
import { ICreatePost } from './types';

const initialState: ICreatePost = {
    id: new Date().toString(),
    idAuthor: 'efef',
    title: 'Українська повстанська армія',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B8%D0%B9_%D0%A5%D1%80%D0%B5%D1%81%D1%82_%D0%91%D0%BE%D0%B9%D0%BE%D0%B2%D0%BE%D1%97_%D0%97%D0%B0%D1%81%D0%BB%D1%83%D0%B3%D0%B8_%D0%A3%D0%9F%D0%90.svg/600px-%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B8%D0%B9_%D0%A5%D1%80%D0%B5%D1%81%D1%82_%D0%91%D0%BE%D0%B9%D0%BE%D0%B2%D0%BE%D1%97_%D0%97%D0%B0%D1%81%D0%BB%D1%83%D0%B3%D0%B8_%D0%A3%D0%9F%D0%90.svg.png',
    dataYearFrom: '1942',
    dataYearTo: '1960',
    dataText: []

}

export const createPostSlice = createSlice({
    name: 'createPost',
    initialState,
    reducers: {
        setMainDataPost: (state, action) => {
            state.title = action.payload.title;
            state.image = action.payload.image;
            state.dataYearFrom = action.payload.dataYearFrom;
            state.dataYearTo = action.payload.dataYearTo;
        },
        setInitialDataText: (state, action) => {
            state.dataText = action.payload;
        }
    }
});

export const { setMainDataPost, setInitialDataText } = createPostSlice.actions;