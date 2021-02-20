import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import dotenv from 'dotenv'
import{MainWrapper, MainContent} from './HomePage';
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import placeholder from '../../images/placeholder.jpg'
import styled from 'styled-components'

const Movies = () => {

    const API = process.env.REACT_APP_MOVIE;

    const user = useSelector(state=> state.auth.user)
    var tags = useSelector(state => state.mood.keywords)

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
        if(val ==='depressing') return "80";
        if(val ==='funny') return "35";
        if(val ==='thrilling') return "53";
        if(val ==='pumped') return "28";
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
    
    const categoryOneFetch = () => {
        
        try {

            // axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${keysF(tags[0])}&page=${random}`)
            axios.get(`api/movies?&with_genres=${keysF(tags[0])}&page=${random}`)
            .then((response) => {
                setCategoryOne({movieOne:response.data.results})
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    const categoryTwofetch = () => {
        
        try {

            axios.get(`api/movies?&with_genres=${keysF(tags[1])}&page=${random}`)
            .then((response) => {
                setCategoryTwo({movieTwo:response.data.results})
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    const categoryThreeFetch = () => {
        
        try {

            axios.get(`api/movies?&with_genres=${keysF(tags[2])}&page=${random}`)
            .then((response) => {
                setCategoryThree({movieThree:response.data.results})
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }

  

    useEffect(() => {
        categoryOneFetch();
        categoryTwofetch();
        categoryThreeFetch();

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
        <h1>{capitalizeFirstLetter(tags[0])}</h1>
        <MainContent>
        {categoryOne.movieOne.map((item) => 
                      <Card link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
           
        </MainContent>
        <h1>{capitalizeFirstLetter(tags[1])}</h1>
        <MainContent>
        {categoryTwo.movieTwo.map((item) => 
                      <Card link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`:"https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}

        </MainContent>

        <h1>{capitalizeFirstLetter(tags[2])}</h1>
        <MainContent>
       
        {categoryThree.movieThree.map((item) => 
                      <Card link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`:"https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
        </MainContent>
        </MainWrapper>
    </>
    )
}

export default Movies