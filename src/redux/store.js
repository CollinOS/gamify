import { configureStore } from '@reduxjs/toolkit'
import questReducer from './questSlice'
import quest1Reducer from './questSlice1'
import quest2Reducer from './questSlice2'
import quest3Reducer from './questSlice3'

export const store =  configureStore({
  reducer: {
    quest: questReducer,
    quest1: quest1Reducer,
    quest2: quest2Reducer,
    quest3: quest3Reducer,
  },
});

export default store;