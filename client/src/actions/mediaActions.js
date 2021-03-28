import {
    STORE_MUSIC,
    STORE_MOVIES,
    STORE_BOOKS,
    RESET_STATE
} from './types'

export const storeMusic = (music) => (dispatch) =>{
    dispatch({type:STORE_MUSIC, payload:music})
}
export const storeMovies = (movies) => (dispatch) =>{
    dispatch({type:STORE_MOVIES, payload:movies})
}
export const storeBooks = (books) => (dispatch) =>{
    dispatch({type:STORE_BOOKS, payload:books})
}
export const resetState = () => (dispatch) =>{
    dispatch({type:RESET_STATE})
}