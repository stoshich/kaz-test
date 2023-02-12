import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  selectedId: ''
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload
    }
  }
})

export const { addItem, removeItem, setSelectedId } = listSlice.actions

export default listSlice.reducer