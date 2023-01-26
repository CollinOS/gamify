import { createSlice } from '@reduxjs/toolkit'

export const questSlice1 = createSlice({
  name: 'quest1',
  initialState: false,
  reducers: {
    toggleQuest1: (state) => {
      return(!state)
    },
  },
})

export const { toggleQuest1 } = questSlice1.actions
export default questSlice1.reducer
