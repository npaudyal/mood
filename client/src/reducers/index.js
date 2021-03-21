import isModalOnReducer from './isModalOn';
import isSignUpClicked from './isSignUpClicked';
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import moodReducer from './moodReducer'
import chat from './chatReducer'
import favorites from './favoritesReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux'
import expireIn from "redux-persist-transform-expire-in";

const expireTime = 60 * 60 * 3600 ; // expire in 1h
const expirationKey = "expirationKey";

const persistConfig = {
    key:'root',
    storage,
    transforms: [expireIn(expireTime, expirationKey, [])]
}


const allReducers = combineReducers({

    modal : isModalOnReducer,
    signUpClicked: isSignUpClicked,
    error: errorReducer,
    auth: authReducer,
    mood:moodReducer,
    chat,
    favorites,


});


export default persistReducer(persistConfig,  allReducers);