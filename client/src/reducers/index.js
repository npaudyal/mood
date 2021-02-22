import isModalOnReducer from './isModalOn';
import isSignUpClicked from './isSignUpClicked';
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import moodReducer from './moodReducer'
import chat from './chatReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({

    modal : isModalOnReducer,
    signUpClicked: isSignUpClicked,
    error: errorReducer,
    auth: authReducer,
    mood:moodReducer,
    chat,


})

export default allReducers;