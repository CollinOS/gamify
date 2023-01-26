import { createSlice } from '@reduxjs/toolkit'

export const questSlice3 = createSlice({
  name: 'quest3',
  initialState: false,
  reducers: {
    toggleQuest3: (state) => {
      return(!state)
    },
  },
})

export const { toggleQuest3 } = questSlice3.actions
export default questSlice3.reducer
