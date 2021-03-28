import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import dotenv from 'dotenv'
import{MainWrapper, MainContent} from './HomePage';
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import placeholder from '../../images/placeholder.jpg'
import styled from 'styled-components'
import { loadMovies } from '../../actions/favoriteActions';
import {loadUser} from '../../actions/authActions';
import {storeMovies} from '../../actions/mediaActions'

const Movies = () => {

    const API = process.env.REACT_APP_MOVIE;

    const user = useSelector(state=> state.auth.user)
    const movies = useSelector(state=> state.favorites.movies);
    const existingMovies = useSelector(state=> state.media.movies);
    var tags = useSelector(state => state.mood.keywords)
     const dispatch = useDispatch();
    tags = tags.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
     });

     const [categoryOne, setCategoryOne] = useState({movieOne:[]});
     const [categoryTwo, setCategoryTwo] = useState({movieTwo:[]});
     const [categoryThree, setCategoryThree] = useState({movieThree:[]});

    const keysF = (val) => {
        if(val ==='feelgood') return "14";
        if(val ==='emotional') return "18";
        if(val ==='thoughtful') return "9648";
        if(val ==='dark') return "27";
        if(val ==='intense') return "10752";
        if(val ==='touching') return "10751";
        if(val ==='sad') return "80";
        if(val ==='funny') return "35";
        if(val ==='thrilling') return "53";
        if(val ==='rush') return "28";
        if(val ==='inspiring') return "99";
        if(val ==='romantic') return "10749";

    }
     function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const random = getRandomArbitrary(1, 200);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    const categoryOneFetch = ()  => {
        return new Promise((resolve) => {
        try {

            axios.get(`api/movies?&with_genres=${keysF(tags[0])}&page=${random}`)
            .then((response) => {
                setCategoryOne({movieOne:response.data.results})
                dispatch(storeMovies({'category1': response.data.results}))
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }
        resolve();
    })
}

    
    const categoryTwofetch = ()  => {
        
        return new Promise((resolve) => {
        try {

            axios.get(`api/movies?&with_genres=${keysF(tags[1])}&page=${random}`)
            .then((response) => {
                setCategoryTwo({movieTwo:response.data.results})
                dispatch(storeMovies({'category2': response.data.results}))
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

        resolve();

    })
}

    const categoryThreeFetch = () => {
        
        try {

            axios.get(`api/movies?&with_genres=${keysF(tags[2])}&page=${random}`)
            .then((response) => {
                setCategoryThree({movieThree:response.data.results})
                dispatch(storeMovies({'category3': response.data.results}))
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }

  

    useEffect(() => {
        dispatch(loadUser()).then(() => dispatch(loadMovies(user._id))).catch((error) => console.log(error));
        
        if( existingMovies===undefined ) {
           categoryOneFetch();
           categoryTwofetch();
           categoryThreeFetch();
       
        }
        
    }, [])


    const Placeholder = styled.img`
        height:160px;
        width:150px;

    `


    return (
        <>
        <Nav />
        <MainWrapper>
        <h1>Good evening, {user.name}</h1>
        <h1>Your favorites</h1>
        {movies ? <MainContent>
        {movies.map((item,index) => 
                      <Card key ={index} favorite movies link={`https://google.com/search?q=${item.title}+movie`} image={item.image ? item.image: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
           
        </MainContent> : null}
        
        <h1>{(tags[0])}</h1>

        {existingMovies && existingMovies.category1 ?  <MainContent>
        {existingMovies.category1.map((item,index) => 
                      <Card key ={index} movies link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
           
        </MainContent> : null }
       
        {/* <MainContent>
        {categoryOne.movieOne.map((item) => 
                      <Card movies link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
           
        </MainContent> */}
        <h1>{(tags[1])}</h1>

        {existingMovies && existingMovies.category2 ? <MainContent>
        {existingMovies.category2.map((item,index) => 
                      <Card key ={index} movies link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`:"https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}

        </MainContent> : null}
        

        <h1>{(tags[2])}</h1>

        {existingMovies && existingMovies.category3 ?  <MainContent>
       
       {existingMovies.category3.map((item,index) => 
                     <Card key ={index} movies link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`:"https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
               )}
       </MainContent> : null }
       
        </MainWrapper>
    </>
    )
}

export default Movies
