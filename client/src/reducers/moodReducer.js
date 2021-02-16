import {EMOJI, CAUSE, RESULT, CLEAR_MOOD} from '../actions/types';


const initialState = {
    emojiState: 0,
    cause:'',
    result:''
}


const mood = (state=initialState, action) => {

    switch (action.type){
        case EMOJI:
           return {
               ...state,
               emojiState: action.payload
           }
           case CAUSE:
            return {
                ...state,
                cause: action.payload
            }
            case RESULT:
            return {
                ...state,
                result: action.payload
            }

            case CLEAR_MOOD:
                return {
                    emojiState:0,
                    cause:"",
                    result:""
                }

            default:
            return state;

    }


}

export default mood;