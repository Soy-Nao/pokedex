import { configureStore } from '@reduxjs/toolkit'
// Tener cuidado con el name Slice que no esté con llaves
import  nameSlice  from './slices/name.slice'

export default configureStore({
  reducer: {
    name: nameSlice
	}
})