import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import dotenv from 'dotenv'
import{MainWrapper, MainContent} from './HomePage';
import Nav from '../Nav/Nav'
import Card from '../Card/Card'

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
        if(val ==='depressing') return "88";
        if(val ==='funny') return "35";
        if(val ==='thrilling') return "53";
        if(val ==='pumped') return "28";
        if(val ==='inspiring') return "99";
        if(val ==='romantic') return "10749";

    }
     function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const random = getRandomArbitrary(1, 400);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    const categoryOneFetch = () => {
        
        try {

            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${keysF(tags[0])}&page=${random}`)
            .then((response) => {
                setCategoryOne({movieOne:response.data.results})
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    const categoryTwofetch = () => {
        
        try {

            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${keysF(tags[1])}&page=${random}`)
            .then((response) => {
                setCategoryTwo({movieTwo:response.data.results})
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    const categoryThreeFetch = () => {
        
        try {

            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${keysF(tags[2])}&page=${random}`)
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



    return (
        <>
        <Nav />
        <MainWrapper>
        <h1>Good evening, {user.name}</h1>
        <h1>{capitalizeFirstLetter(tags[0])}</h1>
        <MainContent>
        {categoryOne.movieOne.map((item) => 
                      <Card image={`https://image.tmdb.org/t/p/w780/${item.poster_path}`} name={item.title} movie="true"/>      
                )}
           
        </MainContent>
        <h1>{capitalizeFirstLetter(tags[1])}</h1>
        <MainContent>
        {categoryTwo.movieTwo.map((item) => 
                      <Card image={`https://image.tmdb.org/t/p/w780/${item.poster_path}`} name={item.title} movie="true"/>      
                )}

        </MainContent>

        <h1>{capitalizeFirstLetter(tags[2])}</h1>
        <MainContent>
       
        {categoryThree.movieThree.map((item) => 
                      <Card image={`https://image.tmdb.org/t/p/w780/${item.poster_path}`} name={item.title} movie="true"/>      
                )}
        </MainContent>
        </MainWrapper>
    </>
    )
}

export default Movies
