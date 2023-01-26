import { createSlice } from '@reduxjs/toolkit'

export const questSlice = createSlice({
  name: 'quest',
  initialState: false,
  reducers: {
    toggleQuest: (state) => {
      return(!state)
    },
  },
})

export const { toggleQuest } = questSlice.actions
export default questSlice.reducer
