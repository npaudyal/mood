import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import{MainWrapper, MainContent, FavoritesContainer} from './HomePage';
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import {loadBooks} from '../../actions/favoriteActions'
import { loadUser } from '../../actions/authActions';
import { storeBooks } from '../../actions/mediaActions';

const Books = () => {

    const user = useSelector(state=> state.auth.user)
    const books = useSelector(state=> state.favorites.books)
    const existingBooks = useSelector(state => state.media.books)
    var tags = useSelector(state => state.mood.keywords)
    const dispatch = useDispatch();
    tags = tags.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
     });

     function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const random = getRandomArbitrary(1, 200);

     const [categoryOne, setCategoryOne] = useState({bookOne:[]});
     const [categoryTwo, setCategoryTwo] = useState({bookTwo:[]});
     const [categoryThree, setCategoryThree] = useState({bookThree:[]});

    
    const categoryOneFetch = () => {
       
        return new Promise((resolve) => {
            try {

           
                axios.get(`api/books?&book_name=${tags[0]}`)
                .then((response) => {
                    setCategoryOne({bookOne:response.data.items})
                    dispatch(storeBooks({'category1': response.data.items}))
                   
            }).catch((error) => console.log(error))
    
            } catch (error) {
                console.log(error)
            }
    
            resolve();
        })
       


    }

    const categoryTwoFetch = ()  =>  {
        
        return new Promise((resolve) => {
        try {

           
            axios.get(`api/books?&book_name=${tags[1]}`)
            .then((response) => {
                setCategoryTwo({bookTwo:response.data.items})
                dispatch(storeBooks({'category2': response.data.items}))

        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

        resolve();

    })
}

    const categoryThreeFetch = () => {
        
        try {

           
            axios.get(`api/books?&book_name=${tags[2]}`)
            .then((response) => {
                setCategoryThree({bookThree:response.data.items})
                dispatch(storeBooks({'category3': response.data.items}))

        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      useEffect(() => {
        dispatch(loadUser()).then(() => dispatch(loadBooks(user._id))).catch((error) => console.log(error));

        if(existingBooks === undefined || Object.keys(existingBooks).length ===0 ) {
           categoryOneFetch();
           categoryTwoFetch();
           categoryThreeFetch();
                       
        }
      }, []);
    
    return (
        <>
        <Nav />
        <MainWrapper>
        <h1>Good evening, {user.name}</h1>
        
        {books && books.length > 0 ?
        <>
        <h1>Your favorites</h1>
        <MainContent>  
        {books.map((item,index) => 
                    //  <h1>{item.volumeInfo.title}</h1> 
                     <Card key={index} favorite book link={`https://google.com/search?q=${item.title}+book`} image={item.image ? item.image: null} name={item.title} />      
   
                )}
           
        </MainContent> </>: <FavoritesContainer>You don't have any favorite books</FavoritesContainer> }
        
        
        {existingBooks && existingBooks.category1 ?
        <>
        <h1>{capitalizeFirstLetter(tags[0])}</h1>
        <MainContent>
          
          {existingBooks.category1.map((item,index) => 
                      //  <h1>{item.volumeInfo.title}</h1> 
                       <Card key={index} book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: null} name={item.volumeInfo.title} />      
     
                  )}
             
          </MainContent> </> : null }

          

          {existingBooks && existingBooks.category2 ? 
          <>
          <h1>{capitalizeFirstLetter(tags[1])}</h1>
          <MainContent>
          
          {existingBooks.category2.map((item,index) => 
                      //  <h1>{item.volumeInfo.title}</h1> 
                       <Card key={index} book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: null} name={item.volumeInfo.title} />      
     
                  )}
             
          </MainContent> </> : null }

         

          {existingBooks && existingBooks.category3 ?
          <>
          <h1>{capitalizeFirstLetter(tags[2])}</h1>
           <MainContent>
          
          {existingBooks.category3.map((item,index) => 
                      //  <h1>{item.volumeInfo.title}</h1> 
                       <Card key ={index} book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: null} name={item.volumeInfo.title} />      
     
                  )}
             
          </MainContent> </> : null }
        </MainWrapper>
    </>
    )
}

export default Books
