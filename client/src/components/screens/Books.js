import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import{MainWrapper, MainContent, FavoritesContainer, MainContentFavorites} from './HomePage';
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import {loadBooks} from '../../actions/favoriteActions'
import { loadUser } from '../../actions/authActions';
import { storeBooks } from '../../actions/mediaActions';
import Loading from '../Loading/Loading';

const Books = () => {

    const user = useSelector(state=> state.auth.user)
    const books = useSelector(state=> state.favorites.books)
    const existingBooks = useSelector(state => state.media.books)
    var tags = useSelector(state => state.mood.keywords)
    const fromCamera = useSelector(state => state.mood.fromCam)

    const dispatch = useDispatch();
    tags = tags.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
     });

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

     const [categoryOne, setCategoryOne] = useState({bookOne:[]});
     const [categoryTwo, setCategoryTwo] = useState({bookTwo:[]});
     const [categoryThree, setCategoryThree] = useState({bookThree:[]});
     const[spinner, setSpinner] = useState(false)


    
    const categoryOneFetch = () => {
       
        return new Promise((resolve) => {
            try {

           
                axios.get(`api/books?&book_name=${tags[0]}`)
                .then((response) => {
                    setCategoryOne({bookOne:response.data.items.slice(0,16)})
                    dispatch(storeBooks({'category1': response.data.items.slice(0,16)}))
                   
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
                setCategoryTwo({bookTwo:response.data.items.slice(0,16)})
                dispatch(storeBooks({'category2': response.data.items.slice(0,16)}))

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
                setCategoryThree({bookThree:response.data.items.slice(0,16)})
                dispatch(storeBooks({'category3': response.data.items.slice(0,16)}))

        }).catch((error) => console.log(error))

        } catch (error) {
            console.log(error)
        }

    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      useEffect(() => {
        setSpinner(true)

        dispatch(loadUser()).then(() => dispatch(loadBooks(user._id))).catch((error) => console.log(error));

        if(existingBooks === undefined || Object.keys(existingBooks).length ===0 ) {
           categoryOneFetch();
           categoryTwoFetch();
           categoryThreeFetch();
                       
        }
        setTimeout(() => {
            setSpinner(false);
        }, 2000);
      }, []);
    
    return (
        <>
        <Nav />
        {
            spinner ? <Loading /> :
            <>
                <MainWrapper>
        <h2 style ={{color:'white', paddingLeft:'3rem'}}>Hello, {user.name}</h2>
        <hr style={{marginLeft:'3rem', width:'82vw', marginBottom:'2rem'}}></hr>
        
        {books && books.length > 0 ?
        <>
        <h1>Your favorites</h1>
        <MainContentFavorites>  
        {books.map((item,index) => 
                    //  <h1>{item.volumeInfo.title}</h1> 
                     <Card key={index} favorite book link={`https://google.com/search?q=${item.title}+book`} image={item.image ? item.image: null} name={item.title} />      
   
                )}
           
        </MainContentFavorites> </>: <FavoritesContainer>You don't have any favorite books</FavoritesContainer> }
        
        <HeadingCategory />

        
        {existingBooks && existingBooks.category1 ?
        <>
        <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[0])}</h2>
        <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
        <MainContent>
          
          {existingBooks.category1.map((item,index) => 
                      //  <h1>{item.volumeInfo.title}</h1> 
                       <Card key={index} book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: null} name={item.volumeInfo.title} />      
     
                  )}
             
          </MainContent> </> : null }

          

          {existingBooks && existingBooks.category2 ? 
          <>
          <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[1])}</h2>
        <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
          <MainContent>
          
          {existingBooks.category2.map((item,index) => 
                      //  <h1>{item.volumeInfo.title}</h1> 
                       <Card key={index} book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: null} name={item.volumeInfo.title} />      
     
                  )}
             
          </MainContent> </> : null }

         

          {existingBooks && existingBooks.category3 ?
          <>
          <h2 style={{color:'grey', fontSize:'16px', marginLeft:'3rem'}}>{capitalizeFirstLetter(tags[2])}</h2>
        <hr style={{marginLeft:'3rem', width:'82vw'}}></hr>
           <MainContent>
          
          {existingBooks.category3.map((item,index) => 
                      //  <h1>{item.volumeInfo.title}</h1> 
                       <Card key ={index} book link={`https://google.com/search?q=${item.volumeInfo.title}+book`} image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: null} name={item.volumeInfo.title} />      
     
                  )}
             
          </MainContent> </> : null }
        </MainWrapper>
            </>
        }
        
    </>
    )
}

export default Books
