import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import dotenv from 'dotenv'
import{MainWrapper, MainContent, FavoritesContainer, MainContentFavorites} from './HomePage';
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import placeholder from '../../images/placeholder.jpg'
import styled from 'styled-components'
import { loadMovies } from '../../actions/favoriteActions';
import {loadUser} from '../../actions/authActions';
import {storeMovies} from '../../actions/mediaActions'
import Loading from '../Loading/Loading';


const Movies = () => {

    const API = process.env.REACT_APP_MOVIE;

    const user = useSelector(state=> state.auth.user)
    const movies = useSelector(state=> state.favorites.movies);
    const existingMovies = useSelector(state=> state.media.movies);
    const fromCamera = useSelector(state => state.mood.fromCam)

    var tags = useSelector(state => state.mood.keywords)
     const dispatch = useDispatch();
    tags = tags.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
     });

     const [categoryOne, setCategoryOne] = useState({movieOne:[]});
     const [categoryTwo, setCategoryTwo] = useState({movieTwo:[]});
     const [categoryThree, setCategoryThree] = useState({movieThree:[]});
     const[spinner, setSpinner] = useState(false)


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

    const HeadingCategory = () => {

        if(fromCamera && tags[3] ==='sad') {
         return (
             <h1 style = {{fontSize:'1.5rem', marginBottom:'0px'}}>
                 Since you're feeling low, here are some mood booster contents for you
             </h1>
         )
        }
        if(fromCamera && tags[3] ==='happy') {
         return (
             <h1 style = {{fontSize:'1.5rem', marginBottom:'0px'}}>
                 Since you're happy, here are some contents we think you'll get hooked on
             </h1>
         )
        }
        if(fromCamera && tags[3] ==='fearful') {
         return (
             <h1 style = {{fontSize:'1.5rem', marginBottom:'0px'}}>
                 Since you're feeling scared, here are some contents to make you feel better
             </h1>
         )
        }
        if(fromCamera && tags[3] ==='disgusted') {
         return (
             <h1 style = {{fontSize:'1.5rem', marginBottom:'0px'}}>
                Since you're feeling disgusted, here are some contents to make you feel better</h1>
         )
        }
        if(fromCamera && tags[3] ==='surprised') {
         return (
             <h1 style = {{fontSize:'1.5rem', marginBottom:'0px'}}>
                 Since you're feeling surprised, here are some contents we think you'll get hooked on
             </h1>
         )
        }
        if(fromCamera && tags[3] ==='angry') {
         return (
             <h1 style = {{fontSize:'1.5rem', marginBottom:'0px'}}>
                 Since you're feeling angry, here are some contents we think you'll get hooked on
             </h1>
         )
        }
        else {
            return (
                <> </>
            )
        }
       
       

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
                setCategoryOne({movieOne:response.data.results.slice(0,16)})
                dispatch(storeMovies({'category1': response.data.results.slice(0,16)}))
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
                setCategoryTwo({movieTwo:response.data.results.slice(0,16)})
                dispatch(storeMovies({'category2': response.data.results.slice(0,16)}))
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
                setCategoryThree({movieThree:response.data.results.slice(0,16)})
                dispatch(storeMovies({'category3': response.data.results.slice(0,16)}))
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }

  

    useEffect(() => {
        setSpinner(true)
        dispatch(loadUser()).then(() => dispatch(loadMovies(user._id))).catch((error) => console.log(error));
        
        if( existingMovies===undefined || Object.keys(existingMovies).length ===0) {
           categoryOneFetch();
           categoryTwofetch();
           categoryThreeFetch();
       
        }
        setTimeout(() => {
            setSpinner(false);
        }, 2000);
        
    }, [])


    const Placeholder = styled.img`
        height:160px;
        width:150px;

    `


    return (
        <>
        <Nav />
        {
            spinner ? <Loading /> : <>
            <MainWrapper>
            <h2 style ={{color:'white', paddingLeft:'3rem'}}>Hello, {user.name}</h2>
            <hr style={{marginLeft:'3rem', width:'82vw', marginBottom:'2rem'}}></hr>
       
        {movies && movies.length > 0 ?
        <>
            <h1 style = {{marginBottom:'0px', color:'white', opacity:'.7'}}>Your favorites</h1>
         <MainContentFavorites>
        {movies.map((item,index) => 
                      <Card key ={index} favorite movies link={`https://google.com/search?q=${item.title}+movie`} image={item.image ? item.image: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
           
        </MainContentFavorites> </> : <FavoritesContainer>You don't have any favorite movies</FavoritesContainer>}
        
       <HeadingCategory />

        {existingMovies && existingMovies.category1 ?
        <>
        <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[0])}</h2>
        <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
        <MainContent>
        {existingMovies.category1.map((item,index) => 
                      <Card key ={index} movies link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
           
        </MainContent>
        </> : null }
    
       

        {existingMovies && existingMovies.category2 ? 
        <>
        <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[1])}</h2>
        <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
        <MainContent>
        {existingMovies.category2.map((item,index) => 
                      <Card key ={index} movies link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`:"https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}

        </MainContent> </> : null}
        

      

        {existingMovies && existingMovies.category3 ?
        <>
        <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[2])}</h2>
        <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
        <MainContent>
       
       {existingMovies.category3.map((item,index) => 
                     <Card key ={index} movies link={`https://google.com/search?q=${item.title}+movie`} image={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`:"https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
               )}
       </MainContent> </> : null }
       
        </MainWrapper>

            </>

        }
        
    </>
    )
}

export default Movies
