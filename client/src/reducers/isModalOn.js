import {CLICKED, REMOVED} from '../actions/types'


const isModalOnReducer = (state = false, action) => {

    switch(action.type) {
        case CLICKED:
            return !state;
        case REMOVED:
            return false;

            default:
                return state;
    }


}




export default isModalOnReducer;