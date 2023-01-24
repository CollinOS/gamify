import { createSlice } from '@reduxjs/toolkit'

export const questSlice = createSlice({
  name: 'quest',
  initialState: false,
  reducers: {
    toggleQuest: (state) => {
      state.quest = !state.quest
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleQuest } = questSlice.actions

export default questSlice.reducer