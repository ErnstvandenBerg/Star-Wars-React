import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import character from '../features/saveCharacter/character'

export default configureStore({
  reducer: {
    counter: counterReducer,
    character: character,
  },
})