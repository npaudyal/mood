import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useSelector} from 'react-redux'
import Nav from '../Nav/Nav'
import dotenv from 'dotenv'
import styled from 'styled-components';
import Spotify from '../../images/spotify-brands.svg'
import Card from '../Card/Card';
const HomePage = () => {

    const[token, setToken] = useState('');
    
    const[musicList, setMusicList] = useState({selectedTrack:'', listofTracksFromAPI:[]})

    const musicObject = [];    

    const [categoryOne, setCategoryOne] = useState([]);
    const [categoryTwo, setCategoryTwo] = useState([]);
    const [categoryThree, setCategoryThree] = useState([]);

    

    var tags = useSelector(state => state.mood.keywords)

    tags = tags.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
     });

  

     const keysF = (val) => {
         if(val ==='feelgood') return "37i9dQZF1DX3rxVfibe1L0";
         if(val ==='emotional') return "0KxVxNNBAZkMC7ExJEV6R1";
         if(val ==='thoughtful') return "36GlNVV9O2F78rPY7NL17F";
         if(val ==='dark') return "52fjgY5XTdBKrk71TJks1i";
         if(val ==='intense') return "7EHr7Wvrg1kqIOvLT9PLuh";
         if(val ==='touching') return "41UBp2OCdPC2tcqpQMHVic";
         if(val ==='depressing') return "0zHkISuEcNr2Zav2X4TXCQ";
         if(val ==='funny') return "37i9dQZF1DXa2PvUpywmrr";
         if(val ==='thrilling') return "37i9dQZF1DX0KpeLFwA3tO";
         if(val ==='pumped') return "0L33OqcgnqcdtUDhUAyfPW";
         if(val ==='inspiring') return "2hISpZx8Mk4B5ODBK226Sk";
         if(val ==='romantic') return "5KbTzqKBqxQRD8OBtJTZrS";

     }



    useEffect(() => {
      
        //get Spotify token
       
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
                
                tags.map((tag) => {
                   
                    axios(`https://api.spotify.com/v1/playlists/${keysF(tag)}/tracks?limit=20`, {
                        method:'GET',
                        headers:{
                            'Authorization': 'Bearer '+ token,
                            
                        }
                    }).then((trackResponse) => {
                      

                    //   setMusicList( {
                        
                    //       listofTracksFromAPI:trackResponse.data.items
                             
                          
                    //   });
                     
                    //   musicObject.push(musicList.listofTracksFromAPI)
                    //   console.log(musicObject)
                    }
                    ).catch((e) => console.log(e))

                })

     
            }).catch((error)=> console.log(error))
        } catch (error) {
            console.log(error.response.data);
        }
      
    }, [])

const track = musicList.listofTracksFromAPI.map((item) => item.track)


    
    return (
        <>
            <Nav />
            <MainWrapper>
            <MainContent>
                <h1>Good evening,</h1>
                {track.map((item) => 
                      <Card image={item.album.images[0].url} name={item.name}/>      
                )}
                
                    {/* <Card>
                        <CardImage src={Spotify}>

                        </CardImage>
                        <CardContent>
                           <h3>Liked Songs</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage src={Spotify}>

                        </CardImage>
                        <CardContent>
                           <h3>Liked Songs</h3>
                        </CardContent>
                    </Card> */}
               
               
            
            </MainContent>
            </MainWrapper>
        </>
    )


}



//The home page should always have a margin-left of % rem;

export default HomePage;



const MainWrapper = styled.div`

   background-color: #131313;
    margin-left:5rem;
    padding-top:80px;
   height:100vh;
  
   
    
    
`

const MainContent = styled.div`
    color: white;
    display: flex;
   flex-direction: row;
   flex-wrap:wrap;
   
    padding:0.5rem 2rem;

    h1{
        font-size:1.3rem;
        padding:6px 15px;
    }
    
`
