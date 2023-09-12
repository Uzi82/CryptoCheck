import { createSlice } from "@reduxjs/toolkit";

const initialState: { val: string } = {
    val: 'light'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme(state) {
            state.val === 'light' ? state.val = 'dark' : state.val = 'light'
        }
    }
})

export default themeSlice.reducer
export const { setTheme } = themeSlice.actions