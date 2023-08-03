import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { LangState } from './types';

const initialState: LangState = {
    language: "ru"
}
export const langSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setChangeLang: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const {
    setChangeLang
} = langSlice.actions

export default langSlice.reducer