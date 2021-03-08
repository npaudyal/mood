import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import{MainWrapper, MainContent} from './HomePage';
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import {loadBooks} from '../../actions/favoriteActions'
import { loadUser } from '../../actions/authActions';

const Books = () => {

    const user = useSelector(state=> state.auth.user)
    const books = useSelector(state=> state.favorites.books)
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
        
        try {

           
            axios.get(`api/books?&book_name=${tags[0]}`)
            .then((response) => {
                setCategoryOne({bookOne:response.data.items})
               
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    const categoryTwoFetch = () => {
        
        try {

           
            axios.get(`api/books?&book_name=${tags[1]}`)
            .then((response) => {
                setCategoryTwo({bookTwo:response.data.items})
        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    const categoryThreeFetch = () => {
        
        try {

           
            axios.get(`api/books?&book_name=${tags[2]}`)
            .then((response) => {
                setCategoryThree({bookThree:response.data.items})
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
            categoryOneFetch();
            categoryTwoFetch();
            categoryThreeFetch();
            
           
      }, []);
    
    return (
        <>
        <Nav />
        <MainWrapper>
        <h1>Good evening, {user.name}</h1>
        <MainContent>  
        {books.map(item => 
                    //  <h1>{item.volumeInfo.title}</h1> 
                     <Card book link={`https://google.com/search?q=${item.title}+book`} image={item.image ? item.image: null} name={item.title} />      
   
                )}
           
        </MainContent>
        <h1>{(tags[0])}</h1>
        <MainContent>  
        {categoryOne.bookOne.map(item => 
                    //  <h1>{item.volumeInfo.title}</h1> 
                     <Card book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: null} name={item.volumeInfo.title} />      
   
                )}
           
        </MainContent>
        <h1>{(tags[1])}</h1>
        <MainContent>
        {categoryTwo.bookTwo.map(item => 
                    //  <h1>{item.volumeInfo.title}</h1> 
                     <Card book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null} name={item.volumeInfo.title}/>      
   
                )}
           
        </MainContent>

        <h1>{(tags[2])}</h1>
        <MainContent>
        {categoryThree.bookThree.map(item => 
                    //  <h1>{item.volumeInfo.title}</h1> 
                     <Card book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail:null} name={item.volumeInfo.title}/>      
   
                )}
           
        </MainContent>
        </MainWrapper>
    </>
    )
}

export default Books
