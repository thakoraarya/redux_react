import counterReducer from './counter'
import {combineReducers} from 'redux'
import LoggedReducer from './isLogged'

const allReducers =combineReducers({
counter : counterReducer,
isLogged : LoggedReducer
})

export default allReducers