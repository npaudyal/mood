import isModalOnReducer from './isModalOn';
import {combineReducers} from 'redux'

const allReducers = combineReducers({

    modal : isModalOnReducer

})

export default allReducers;