import {CLICKED} from '../actions/types'


const isModalOnReducer = (state = false, action) => {

    switch(action.type) {
        case CLICKED:
            return !state;

            default:
                return state;
    }


}




export default isModalOnReducer;