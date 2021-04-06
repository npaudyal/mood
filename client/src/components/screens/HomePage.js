
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import Nav from '../Nav/Nav'
import dotenv from 'dotenv'
import styled from 'styled-components';
import Spotify from '../../images/spotify-brands.svg'
import Card from '../Card/Card';
import { loadMusic } from '../../actions/favoriteActions';
import {loadUser} from '../../actions/authActions'
import { storeMusic } from '../../actions/mediaActions';

const HomePage = () => {

    const[token, setToken] = useState('');
    const [categoryOne, setCategoryOne] = useState({trackOne:[]});
    const [categoryTwo, setCategoryTwo] = useState({trackTwo:[]});
    const [categoryThree, setCategoryThree] = useState({trackThree:[]});
    const [gotToken, setGotToken] = useState(false);


    var tags = useSelector(state => state.mood.keywords)
    const user = useSelector(state=> state.auth.user)
    const music = useSelector(state=> state.favorites.music)
    const exisitngMusic = useSelector(state=> state.media.music)
    const dispatch = useDispatch();

    tags = tags.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
     });

     function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

     const keysF = (val) => {
         if(val ==='feelgood') return "37i9dQZF1DX3rxVfibe1L0";
         if(val ==='emotional') return "0KxVxNNBAZkMC7ExJEV6R1";
         if(val ==='thoughtful') return "36GlNVV9O2F78rPY7NL17F";
         if(val ==='dark') return "52fjgY5XTdBKrk71TJks1i";
         if(val ==='intense') return "7EHr7Wvrg1kqIOvLT9PLuh";
         if(val ==='touching') return "41UBp2OCdPC2tcqpQMHVic";
         if(val ==='sad') return "0zHkISuEcNr2Zav2X4TXCQ";
         if(val ==='funny') return "37i9dQZF1DXa2PvUpywmrr";
         if(val ==='thrilling') return "37i9dQZF1DX0KpeLFwA3tO";
         if(val ==='rush') return "0L33OqcgnqcdtUDhUAyfPW";
         if(val ==='inspiring') return "2hISpZx8Mk4B5ODBK226Sk";
         if(val ==='romantic') return "5KbTzqKBqxQRD8OBtJTZrS";
     }

     const categoryOneFetch =  () => {
        try {
                    axios(`api/spotify?&playlist_id=${keysF(tags[0])}&token=${token}`).then((trackResponse) => {
                        setCategoryOne({trackOne:trackResponse.data.items})
                        var trackOne =trackResponse.data.items.map((item) => item.track)
                        trackOne = trackOne.sort(() => 0.5 - Math.random()).slice(0, 16);
                        dispatch(storeMusic({'category1': trackOne}))

                    })   
        .catch ((error) => {
            console.log(error)
        })

     } catch (error) {
         console.log(error);
     }
    }
     const categoryTwoFetch = () => {
        try {
            axios(`api/spotify?&playlist_id=${keysF(tags[1])}&token=${token}`).then((trackResponse) => {
                        setCategoryTwo({trackTwo:trackResponse.data.items})
                        var trackTwo =trackResponse.data.items.map((item) => item.track)
                        trackTwo = trackTwo.sort(() => 0.5 - Math.random()).slice(0, 16);
                        dispatch(storeMusic({'category2': trackTwo}))
                    })   
        .catch ((error) => {
            console.log(error)
        })

     } catch (error) {
         console.log(error);
     }
    }
     const categoryThreeFetch = () => {
        try {
            axios(`api/spotify?&playlist_id=${keysF(tags[2])}&token=${token}`).then((trackResponse) => {
                        setCategoryThree({trackThree:trackResponse.data.items})
                        var trackThree =trackResponse.data.items.map((item) => item.track)
                        trackThree = trackThree.sort(() => 0.5 - Math.random()).slice(0, 16);
                        dispatch(storeMusic({'category3': trackThree}))
                    })   
        .catch ((error) => {
            console.log(error)
        })

     } catch (error) {
         console.log(error);
     }
    }

    const getToken = () =>{
        dispatch(loadUser()).then(() => dispatch(loadMusic(user._id))).catch((error) => console.log(error));

        try {
            axios('https://accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Authorization': `Basic ` + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET)
                },
                data:'grant_type=client_credentials',
                method:"POST"
            }).then(tokenResponse => {
                
                setToken(tokenResponse.data.access_token);
               
            }).catch((error)=> console.log(error))
        } catch (error) {
            console.log(error.response.data);
        }  

        setGotToken(true)
    }



    useEffect(() => {
            
        getToken()
      
    }, [])

    useEffect(() => {

        if( exisitngMusic===undefined || Object.keys(exisitngMusic).length ===0) {
        categoryOneFetch();
        categoryTwoFetch();
        categoryThreeFetch();
        }
   
    }, [token])





    return (
        <>
            <Nav />
            <MainWrapper>
            <h1>Hello, {user.name}</h1>

            <h1>Your favorites</h1>
            {music ?  <MainContent>    
                {music.map((item,index) => 
                      <Card key={index} favorite music image={item.image} name={item.title} link={item.url}/>      
                )}
 
            </MainContent> : null }
           
           
                {
                    exisitngMusic && exisitngMusic.category1 ?
                    <>
                     <h1>{capitalizeFirstLetter(tags[0])}</h1>
                    <MainContent>
                    {exisitngMusic.category1.map((item,index) => 
                      <Card  key={index} music image={item.album.images[0].url} name={item.name} link={item.album.artists[0].external_urls.spotify}/>      
                      )}
                       
                    </MainContent>
                    </>
                    : null
                }
 
            
            
            {
                    exisitngMusic && exisitngMusic.category2 ?
                    <>
                    <h1>{capitalizeFirstLetter(tags[1])}</h1>
                    <MainContent>
                    {exisitngMusic.category2.map((item,index) => 
                      <Card key={index} music image={item.album.images[0].url} name={item.name} link={item.album.artists[0].external_urls.spotify}/>      
                      )}
                       
                    </MainContent>
                    </>
                    : null
                }

           
            {
                    exisitngMusic && exisitngMusic.category3 ?
                    <>
                    <h1>{capitalizeFirstLetter(tags[2])}</h1>
                    <MainContent>
                    {exisitngMusic.category3.map((item,index) => 
                      <Card key={index} music image={item.album.images[0].url} name={item.name} link={item.album.artists[0].external_urls.spotify}/>      
                      )}
                       
                    </MainContent>
                    </>
                    : null
                }
            </MainWrapper>
        </>
    )
}


export default HomePage;



export const MainWrapper = styled.div`
   
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), #121212 10%);
    margin-left:7rem;
    padding-left:5rem;
    padding-top:80px;
    min-height:100vh;
  
  
   h1{
        font-size:1.3rem;
        padding:16px 50px;
        color: white;
    }
    
    
`

export const MainContent = styled.div`
    color: white;
    display: flex;
   flex-direction: row;
   flex-wrap:wrap;
   
    padding:0.5rem 2rem;
    h1{
        font-size:1.3rem;
        padding:6px 15px;
        color: white;
    }
    
`