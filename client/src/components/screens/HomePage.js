
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
import ClipLoader from 'react-spinners/ClipLoader'
import Loading from '../Loading/Loading';

const HomePage = () => {

    const[token, setToken] = useState('');
    const [categoryOne, setCategoryOne] = useState({trackOne:[]});
    const [categoryTwo, setCategoryTwo] = useState({trackTwo:[]});
    const [categoryThree, setCategoryThree] = useState({trackThree:[]});
    const [gotToken, setGotToken] = useState(false);
    const[spinner, setSpinner] = useState(false)

    const fromCamera = useSelector(state => state.mood.fromCam)
    var tags = useSelector(state => state.mood.keywords)
    const user = useSelector(state=> state.auth.user)
    const music = useSelector(state=> state.favorites.music)
    const exisitngMusic = useSelector(state=> state.media.music)
    const dispatch = useDispatch();

    const REACT_APP_CLIENT_ID="09ad4364c3bf49eaa7b59be9245f84e2"
    const REACT_APP_CLIENT_SECRET="74880557f7af46aaaa3253daf11e95e4"
    const REACT_APP_MOVIE="712d0aea734e24d602ce5540befce25e"


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
        try {
            axios('https://accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Authorization': `Basic ` + btoa(REACT_APP_CLIENT_ID + ':' + REACT_APP_CLIENT_SECRET)
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
        // dispatch(loadUser()).then(() =>dispatch(loadMusic(user._id))).catch((error) => console.log(error));
        setSpinner(true)
        dispatch(loadUser())
        if(!token) {
            getToken()

        }
        setTimeout(() => {
            setSpinner(false);
        }, 2000);
      
    }, [])


    useEffect(() => {
        if( exisitngMusic===undefined || Object.keys(exisitngMusic).length ===0) {
        
        categoryOneFetch();
        categoryTwoFetch();
        categoryThreeFetch();
        }
   
    }, [token])

    useEffect(() => {
        if(user._id) {
            dispatch(loadMusic(user._id))

        }
    }, [user])





    return (
        <>
            <Nav />
            {
            spinner ?
            
            <Loading loading={spinner} />


            :
            <>
            <MainWrapper>
            <h2 style ={{color:'white', paddingLeft:'3rem'}}>Hello, {user.name}</h2>
            <hr style={{marginLeft:'3rem', width:'82vw', marginBottom:'2rem'}}></hr>

           
            {music && music.length > 0 ?
            <>
             <h1 style = {{marginBottom:'0px', color:'white', opacity:'.7'}}>Your favorites</h1>
             <MainContentFavorites>    
                {music.map((item,index) => 
                      <Card key={index} favorite music image={item.image} name={item.title} link={item.url}/>      
                )}
 
            </MainContentFavorites> </> :  <FavoritesContainer>You don't have any favorite music</FavoritesContainer> }
           
                    <HeadingCategory />

                {
                    exisitngMusic && exisitngMusic.category1 ?
                    <>
                     <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[0])}</h2>
                     <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
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
                    <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[1])}</h2>
                     <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
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
                    <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[2])}</h2>
                    <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
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

        }
           
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
        padding-left:3rem;
        color: white;
    }
    
    
`

export const MainContent = styled.div`
    color: white;
    display: flex;
   flex-direction: row;
   flex-wrap:wrap;
   margin-bottom:3rem;
    padding:0.5rem 2rem;
    h1{
        font-size:1.3rem;
        padding:6px 15px;
        color: white;
    }
    
`

export const FavoritesContainer = styled.div`

    height:20vh;
    width:80vw;
    margin-left:2rem;
    padding:0.5rem 0.5rem;
   margin-bottom:3rem;
    border:2px solid grey;
    border-radius:20px;
   
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size:2rem;

`
export const MainContentFavorites = styled.div`
     color: white;
     border:2px solid grey;
    display: flex;
   flex-direction: row;
   border-radius:20px;
   flex-wrap:wrap;
   margin-left:2rem;
   width:84vw;
   padding:0.2rem 1px;
   margin-bottom:3rem;

   
    h1{
        font-size:1.3rem;
        padding:6px 15px;
        color: white;
    }


`