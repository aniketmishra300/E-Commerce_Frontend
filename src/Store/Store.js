import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import reducer from './Reducer'


const rootReducer = combineReducers({
    state: reducer
})



const Store = configureStore({
    reducer:rootReducer
})

export default Store