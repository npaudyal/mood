import React from 'react'
import styled from 'styled-components'
import {AiOutlineHeart, AiFillHeart, AiTwotoneHeart} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'
import {bookLiked, musicLiked, moviesLiked, moviesRemoved, musicRemoved, bookRemoved} from '../../actions/favoriteActions';

const Card = (props) => {
    const userId = useSelector(state => state.auth.user._id)
    const favoritesArray = useSelector(state =>state.favorites)
    const dispatch = useDispatch();

    const favoriteDehandler = () => {
        if(props.movies) {
            const newMovies = {
                title:props.name, image:props.image, userId
              }
              dispatch(moviesRemoved(newMovies));
              
           }
        if(props.music) {
            const newMusic = {
                title:props.name, image:props.image, userId
              }
              dispatch(musicRemoved(newMusic));
              
           }
        if(props.book) {
            const newBook = {
                title:props.name, image:props.image, userId
              }
              dispatch(bookRemoved(newBook));
              
           }
    }
   const favoriteHandler = () => {

       if(props.book) {
        const newBook = {
            title:props.name, image:props.image, userId
          }

        if (!favoritesArray.books.map(item =>item.title).includes(newBook.title)) {
            dispatch(bookLiked(newBook));

        }
          
       
    }
       if(props.music) {
        const newMusic = {
            title:props.name, image:props.image, url:props.link, userId
          }
          if (!favoritesArray.music.map(item =>item.title).includes(newMusic.title)) {
            dispatch(musicLiked(newMusic));

        }
          
       }
       if(props.movies) {
        const newMovies = {
            title:props.name, image:props.image, userId
          }
          if (!favoritesArray.movies.map(item =>item.title).includes(newMovies.title)) {
            dispatch(moviesLiked(newMovies));

        }
          
       }
   }
    return (
        <>
            <CardsWrap>
                <CardBody>
                <a href={props.link} target = "_blank"style={{color: "#FFFFFF",
            textDecoration: "none"}}> <CardImage movie={props.movie} src={props.image} /> </a>
                    <CardContent> {props.name}</CardContent>
                    {props.favorite ?  <HeartRed onClick={favoriteDehandler}/>: <Heart onClick={favoriteHandler}/> }
                    
                </CardBody>
            </CardsWrap>
        </>
    )
}

export default Card

const CardsWrap = styled.div`
    
    display: flex;
    padding:5px;
    flex-direction:row;
    flex-wrap:wrap;
`
const CardBody = styled.div`
    background: #282828;
    border-radius:10px;
    width:180px;
    overflow:hidden;
   
    padding:.88rem;
   height:230px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    margin:5px;
    transition: all 0.1s ease-in;
    &:hover{
        transform:scale(1.1);
        cursor: pointer;
    }

`

const Heart = styled(AiOutlineHeart)`

    font-size:1.5rem;
    padding-bottom:0.2rem;

`
const HeartRed = styled(AiTwotoneHeart)`

    font-size:1.5rem;
    padding-bottom:0.2rem;
    color:white;

`

const CardImage = styled.img`
    height:160px;
   width:150px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        
    }
`

const CardContent = styled.div`
    padding:0.3rem 0.3rem;
    text-overflow:ellipsis;
    overflow:hidden;
    justify-content:center;
    white-space:nowrap;
h3{
    font-weight: 600;
    font-size:0.9rem;
   
}`