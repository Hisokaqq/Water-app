import {
    createSlice
} from '@reduxjs/toolkit'

export const singularsSlice = createSlice({
    name: 'singulars',
    initialState: {
        cs: 0,
        ml: 0,
        ls: 0,
        sl: 0,

    },
    reducers: {
        increment_ml: state => {
            state.ml += 1
        },

    }
})

export const selectSinglas = state => state.singulars


export const {
    increment_ml,
} = singularsSlice.actions


export default singularsSlice.reducer