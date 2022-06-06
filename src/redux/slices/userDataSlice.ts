import { createSlice } from '@reduxjs/toolkit';
import { ICreatePost } from './types';

const initialState = {
    id: 'eiofhjoewnclwec',
    login: 'urabodnargood@gmail.com',
    name: 'Юрчик',
    avatarPhoto: 'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024',
    catalogData: [
        {
            id:'eklmflkwefd',
            title: 'Заснування Упа',
            src: 'https://gdb.rferl.org/146E203B-BB95-41B8-9ED6-F471203A28AB_w650_r0_s.jpg',
            from: '1942',
            to: '1942',
        },
        {
            id:'eklmflkfefd',
            title: 'Степан Бандера',
            src: 'https://gdb.rferl.org/AC7D6C71-D610-42EB-B7AF-DB34F86FA8AE_w650_r0_s.jpg',
            from: '1909',
            to: '1959',
        },
        {
            id:'eklewfflkwefd',
            title: '10 заповідей українського націоналіста',
            src: 'https://gdb.rferl.org/DFA0D638-39A6-4A0E-8603-EECBD6101F6B_w1023_r1_s.jpg',
            from: '',
            to: '',
        },
        {
            id:'eklmflkweewfd',
            title: 'ОУН поділилася на мельниківців і бандерівців',
            src: 'https://gdb.rferl.org/7AECB5E7-8E8D-45B1-AC52-5BE9ADB8A7B4_w650_r0_s.jpg',
            from: '1929',
            to: '1930',
        }
    ],

}

export const UserDataSlice = createSlice({
    name: 'createPost',
    initialState,
    reducers: { 
        sendDataToBack: (state, action) => {
            // state.catalogPostData = [...state.catalogPostData,  action.payload];
        }
}
});

export const { sendDataToBack } = UserDataSlice.actions;