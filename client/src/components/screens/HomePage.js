import React from 'react'
import {useSelector} from 'react-redux'
import Nav from '../Nav/Nav'
import styled from 'styled-components';
import Spotify from '../../images/spotify-brands.svg'
const HomePage = () => {

    const result = useSelector(state => state.mood.result);
    return (
        <>
            <Nav />
            <MainWrapper>
            <MainContent>
                <h1>Your favorites</h1>
                <CardsWrap>
                    <Card>
                        <CardImage src={Spotify}>

                        </CardImage>
                        <CardContent>
                           <h3>Liked Songs</h3>
                        </CardContent>
                    </Card>
                </CardsWrap>
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
   
    padding:0.5rem 2rem;

    h1{
        font-size:1.8rem;
        padding:2px;
    }
    
`
const CardsWrap = styled.div`
    display: flex;
    padding:5px;
  

`
const Card = styled.div`
    background: #282828;
    border-radius:10px;
    width:180px;
    overflow:hidden;
    padding:.88rem;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);


`

const CardImage = styled.img`
    height:160px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }


`

const CardContent = styled.div`
    padding:0.4rem 0;
h3{
    font-weight: 600;
    font-size:0.9rem;
}`