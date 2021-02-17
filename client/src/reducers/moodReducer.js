import {EMOJI, KEYWORDS,  CLEAR_MOOD} from '../actions/types';


const initialState = {
    emojiState: 0,
    keywords:[]
}


const mood = (state=initialState, action) => {

    switch (action.type){
        case EMOJI:
           return {
               ...state,
               emojiState: action.payload
           }
           case KEYWORDS:
            return {
                ...state,
                keywords:[...(state.keywords || []), action.payload]
            }

            case CLEAR_MOOD:
                return {
                    emojiState:0,
                    keywords:[]
                }

            default:
            return state;

    }


}

export default mood;