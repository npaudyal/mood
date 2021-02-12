import isModalOnReducer from './isModalOn';
import isSignUpClicked from './isSignUpClicked';
import {combineReducers} from 'redux'

const allReducers = combineReducers({

    modal : isModalOnReducer,
    signUpClicked: isSignUpClicked,


})

export default allReducers;