import {
    STORE_MUSIC,
    STORE_MOVIES,
    STORE_BOOKS,
    RESET_STATE
} from '../actions/types'

const initialState = {
    books: {},
    music:{},
    movies:{},
}

const media = (state = initialState, action) => { 
    switch (action.type) {
        case STORE_MUSIC:
            return{
                ...state,
                music:{...state.music,...action.payload}
            }
        case STORE_MOVIES:
            return{
                ...state,
                movies : {...state.movies, ...action.payload}
            }
        case STORE_BOOKS:
            return{
                ...state,
                books:{...state.books,...action.payload}
            }
        case RESET_STATE:
            return [];
        default:
            return state;
    }

}

export default media;
