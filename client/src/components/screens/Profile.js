import React , {useState} from 'react'
import Nav from '../Nav/Nav'
import styled from 'styled-components'
import Avatar from '../../images/user.svg'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import {FavoritesContainer, MainContent} from './HomePage'
import './Profile.scss'
import EditProfile from '../EditProfile/EditProfile'
import {BiEdit} from 'react-icons/bi'

const Profile = () => {

    const user = useSelector(state =>state.auth.user)
    const favorite = useSelector(state =>state.auth.user)
    

    const [editMode, setEditMode] = useState(false)

    const changeToFalse = () => {
        setEditMode(false);
    }


    return (
    <>
    <Nav />
    <MainWrapper>
    
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            {editMode ? <EditProfile changeToFalse={changeToFalse} /> : <div style ={{display:'flex', justifyContent:'center', alignItems:'center'}}><h1>{user.name} </h1> <Edit onClick ={() => setEditMode(true)}/> </div> }
            
            <p className="tagline"> {user.email}</p>
            <p className="tagline">
              {user.register_date}
            </p>
          
          </div>
        </div>
        </div>
        </div>

          {favorite.music.length  === 0 && favorite.movies.length === 0 && favorite.books.length === 0 ? 
          <FavoritesContainer>You don't have any favorite contents!</FavoritesContainer>  
            :
            <div>
              {favorite.music && favorite.music.length > 0 ?
            <>
            <h1>Your favorite Music</h1>
            <MainContent>    
                {favorite.music.map((item, index) => 
                      <Card key ={index} favorite music image={item.image} name={item.title} link={item.url}/>      
                )}
 
            </MainContent> </> : null }
            
                
           
        {favorite.movies && favorite.movies.length > 0  ?
        <>
         <h1>Your favorite movies</h1>
        <MainContent>
        {favorite.movies.map((item,index) => 
                      <Card key ={index} favorite movies link={`https://google.com/search?q=${item.title}+movie`} image={item.image ? item.image: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"} name={item.title} movie="true"/>      
                )}
           
        </MainContent> </> : null}
        
        
        {favorite.books && favorite.books.length > 0  ?
        <>
        <h1>Your favorite books</h1>
        <MainContent>  
        {favorite.books.map((item,index) => 
                    //  <h1>{item.volumeInfo.title}</h1> 
                     <Card key={index} favorite book link={`https://google.com/search?q=${item.title}+book`} image={item.image ? item.image: null} name={item.title} />      
   
                )}
           
        </MainContent> </> : null }
              </div>
            
        }


        
            


        </MainWrapper>
        </>
          
    )
}


 const MainWrapper = styled.div`
   background-color: #131313;
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

const Edit = styled(BiEdit)`
    color:white;
    margin-left:5px;
    font-size:1.5rem;
    
`

 

export default Profile
