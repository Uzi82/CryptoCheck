import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { baseCoins: string[] } = {
    baseCoins: ['bitcoin', 'ethereum', 'tether']
}

const baseCoinsSlice = createSlice({
    name: 'baseCoinsSlice',
    initialState,
    reducers: {
        setCoins(state, action: PayloadAction<string[]>) {
            state.baseCoins = action.payload
        },
        changeCoin(state, action: PayloadAction<{index: number, id: string}>) {
            state.baseCoins[action.payload.index] = action.payload.id
        }
    }
})

export default baseCoinsSlice.reducer
export const { setCoins, changeCoin } = baseCoinsSlice.actions