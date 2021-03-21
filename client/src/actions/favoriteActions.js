import axios from 'axios';
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
    MUSIC_REMOVE_SUCCESS,
    BOOK_REMOVE_SUCCESS,
    ADD_FAIL
   
} from "./types";


export const loadBooks = (userId) => (dispatch) => {
    //User loading
    dispatch({
        type:BOOK_LOADING,
    });
    
  
    axios.get(`api/favorites/getBooks?userId=${userId}`)
        .then(res => dispatch({
            type:BOOK_LOADED,
            payload:res.data
        }))
        .catch(err => {
           
            dispatch({
                type: LOAD_ERROR
            })
        })
}

export const loadMusic = (userId) => (dispatch) => {
    //User loading
    dispatch({
        type:MUSIC_LOADING,
    });
    
  
    axios.get(`api/favorites/getMusic?userId=${userId}`)
        .then(res => dispatch({
            type:MUSIC_LOADED,
            payload:res.data
        }))
        .catch(err => {
           
            dispatch({
                type: LOAD_ERROR
            })
        })
}

export const loadMovies = (userId) => (dispatch) => {
    //User loading
    dispatch({
        type:MOVIES_LOADING,
    });
    
  
    axios.get(`api/favorites/getMovies?userId=${userId}`)
        .then(res => dispatch({
            type:MOVIES_LOADED,
            payload:res.data
        }))
        .catch(err => {
           
            dispatch({
                type: LOAD_ERROR
            })
        })
}

export const bookLiked = ({title, image, userId}) => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title, image, userId});

    axios.post('/api/favorites/addBooks', body, config)
        .then(res =>{ 
            dispatch({
            type:BOOK_ADD_SUCCESS,
            payload:res.data
        
        });
        
    }).catch(err => {
           
            dispatch({
                type: ADD_FAIL,

            })
        })
}
export const musicLiked = ({title, image, url, userId}) => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title, image, url, userId});

    axios.post('/api/favorites/addMusic', body, config)
        .then(res =>{ 
            dispatch({
            type:MUSIC_ADD_SUCCESS,
            payload:res.data
        
        });
        
    }).catch(err => {
           
            dispatch({
                type: ADD_FAIL,

            })
        })
}
export const moviesLiked = ({title, image, userId}) => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title, image, userId});

    axios.post('/api/favorites/addMovies', body, config)
        .then(res =>{ 
            dispatch({
            type:MOVIE_ADD_SUCCESS,
            payload:res.data
        
        });
        
    }).catch(err => {
           
            dispatch({
                type: ADD_FAIL,

            })
        })
}


export const moviesRemoved = ({title, userId}) => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title, userId});

    axios.post('/api/favorites/removeMovies', body, config)
        .then(res => dispatch({
            type:MOVIE_REMOVE_SUCCESS,
            payload:res.data
        })
        
    ).catch(err => {
           console.log(err)
        })
}
export const musicRemoved = ({title, userId}) => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title, userId});

    axios.post('/api/favorites/removeMusic', body, config)
        .then(res => dispatch({
            type:MUSIC_REMOVE_SUCCESS,
            payload:res.data
        })
        
    ).catch(err => {
           console.log(err)
        })
}
export const bookRemoved = ({title, userId}) => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    const body = JSON.stringify({title, userId});

    axios.post('/api/favorites/removeBooks', body, config)
        .then(res => dispatch({
            type:BOOK_REMOVE_SUCCESS,
            payload:res.data
        })
        
    ).catch(err => {
           console.log(err)
        })
}


