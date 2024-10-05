const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfIcecream : 20
}

const iceCreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numberOfIcecream--
        },
        restocked:(state, action) => {
            state.numberOfIcecream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase('cake/ordered', (state) => {
            state.numberOfIcecream--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions