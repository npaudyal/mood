import {CHECKED} from '../actions/types'

const isSignUpClicked = (state = false, action) => {
    switch(action.type) {
        case CHECKED:
            return !state;
        
            default:
                return state;
    }
}

export default isSignUpClicked;