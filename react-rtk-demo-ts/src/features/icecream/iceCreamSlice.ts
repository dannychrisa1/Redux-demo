import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {ordered as cakeOrdered } from '../cake/cakeSlice'

type InitialState = {
    numOfIcecream: number
}

const initialState: InitialState = {
    numOfIcecream : 20
}

const iceCreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numOfIcecream--
        },
        restocked:(state, action:PayloadAction<number>) => {
            state.numOfIcecream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecream--
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions