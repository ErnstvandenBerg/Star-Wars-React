import { createSlice } from '@reduxjs/toolkit'

export const character = createSlice({
    name: 'counter',
    initialState: {
        value: {},
    },
    reducers: {
        add: (state, action) => {
            state.value = action.payload;
        },
        clear: (state) => {
            state.value = {};
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { add, clear} = character.actions

export default character.reducer