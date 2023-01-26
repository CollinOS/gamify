import { createSlice } from '@reduxjs/toolkit'

export const questSlice2 = createSlice({
  name: 'quest2',
  initialState: false,
  reducers: {
    toggleQuest2: (state) => {
      return(!state)
    },
  },
})

export const { toggleQuest2 } = questSlice2.actions
export default questSlice2.reducer
