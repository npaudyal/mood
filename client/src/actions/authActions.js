import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";


//Check token and load user
export const loadUser = () => (dispatch,getState) => {
    //User loading
    dispatch({
        type:USER_LOADING,
    });
    
    const token = getState().auth.token;
    

    axios.get('api/auth/register')
}