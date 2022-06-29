import { createSlice } from '@reduxjs/toolkit'

export const search = createSlice({
    name: 'search',
    initialState: {
        value: "",
    },
    reducers: {
        addSearch: (state, action) => {
            state.value = action.payload;
        },
        clearSearch: (state) => {
            state.value = "";
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { addSearch, clearSearch} = search.actions

export default search.reducer