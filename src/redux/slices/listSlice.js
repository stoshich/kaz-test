import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: []
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItems: (state, action) => {
      state.items = state.items.filter()
    }
  }
})

export const { addItem, removeItems } = listSlice.actions

export default listSlice.reducer