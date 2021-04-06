import {
    BOOK_LOADED,
    BOOK_LOADING,
    MUSIC_LOADING,
    MUSIC_LOADED,
    MOVIES_LOADED,
    MOVIES_LOADING,
    LOAD_ERROR,
    BOOK_ADD_SUCCESS,
    MUSIC_ADD_SUCCESS,
    MOVIE_ADD_SUCCESS,
    MOVIE_REMOVE_SUCCESS,
    BOOK_REMOVE_SUCCESS,
    MUSIC_REMOVE_SUCCESS,
    ADD_FAIL,
    CLEAR_STATE
   
} from "../actions/types";


const initialState = {
    isLoading:false,
    books:[],
    music:[],
    movies:[]

}

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_LOADING:
        case MUSIC_LOADING:
        case MOVIES_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case BOOK_LOADED:
            return{
                ...state,
                isLoading:false,
                books:action.payload
            }
        case MUSIC_LOADED:
            return{
                ...state,
                isLoading:false,
                music:action.payload
            }
        case MOVIES_LOADED:
            return{
                ...state,
                isLoading:false,
                movies:action.payload
            }
        case BOOK_ADD_SUCCESS:
            return {
                ...state,
                books :  action.payload,
                isLoading:false,
               
            }
        case MUSIC_ADD_SUCCESS:
            return {
                ...state,
                music :  action.payload,
                isLoading:false,
               
            }
        case MOVIE_ADD_SUCCESS:
            return {
                ...state,
                movies : action.payload,
                isLoading:false,
            }
        case MOVIE_REMOVE_SUCCESS:
            return {
                ...state,
                movies : state.movies.filter(element => element.title !== action.payload),
                isLoading:false,
            }
        case MUSIC_REMOVE_SUCCESS:
            return {
                ...state,
                music : state.music.filter(element => element.title !== action.payload),
                isLoading:false,
            }
        case BOOK_REMOVE_SUCCESS:
            return {
                ...state,
                books : state.books.filter(element => element.title !== action.payload),
                isLoading:false,
            }
             
        case LOAD_ERROR:
        case ADD_FAIL:
            return {
                ...state,
                isLoading:false
            }
        case CLEAR_STATE:
            return {
                isLoading:false,
                books:[],
                music:[],
                movies:[]
            
            }
        
        default:
            return state;

    }
}

export default favorites;