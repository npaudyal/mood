import axios from 'axios'
import {
    GET_CHATS,
    AFTER_POST_MESSAGE
} from './types'

export const getChats = () =>dispatch =>{
    axios.get('api/chat/getChats') .then(res =>{ 
        dispatch({
        type:GET_CHATS,
        payload:res.data
    
    });
   
})}

export const afterPostMessage = (data) => {
    return {
        type: AFTER_POST_MESSAGE,
        payload:data
    }
}
