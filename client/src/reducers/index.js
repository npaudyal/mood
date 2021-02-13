import isModalOnReducer from './isModalOn';
import isSignUpClicked from './isSignUpClicked';
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({

    modal : isModalOnReducer,
    signUpClicked: isSignUpClicked,
    error: errorReducer,
    auth: authReducer


})

export default allReducers;