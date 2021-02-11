import { Router } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import spotify from '../../images/spotify.svg'
import netflix from '../../images/netflix.svg'
import chat from '../../images/chat.svg'
import book from '../../images/book.svg'
import NavBar from './NavBar'
const Landing = () => {
    const fadeLeft = {
        hidden:{opacity:0, x:-100},
        visible:{opacity:1, x:0}
    }
    return (
        <>
        <NavBar />
      <Section>
          
          <Container>
            <ColumnLeft>
            <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
            >Welcome to mood</motion.h1>
            <motion.p
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{duration:1}}
            >Listen to your    heart</motion.p>
            <Button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95, backgroundColor:'#085630', border:'none', color:"#000"}}
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1.5}}}
            
            >Sign In</Button>
            </ColumnLeft>
            <ColumnRight>
            <Image src = {spotify} alt='spotify'
             whileTap={{scale:0.9}}
             drag={true}
             dragConstraints={{left:0, right:150, top:0, bottom:50}}
             initial={{opacity:0, y:-100}}
             animate={{opacity:1, y:0, transition:{duration:1}}}
             />
            <Image src = {netflix} alt='netflix'
             whileTap={{scale:0.6}}
             drag={true}
             dragConstraints={{left:50, right:0, top:0, bottom:50}}
             initial={{opacity:0, y:-100}}
             animate={{opacity:1, y:0, transition:{duration:1}}} />
            <Image src = {chat} alt='chat'
             whileTap={{scale:0.8}}
             drag={true}
             dragConstraints={{left:0, right:250, top:0, bottom:50}}
             initial={{opacity:0, x:-100}}
             animate={{opacity:1, x:0, transition:{duration:1}}} />
            <Image src = {book} alt='book'
             whileTap={{scale:0.9}}
             drag={true}
             dragConstraints={{left:0, right:0, top:0, bottom:0}}
             initial={{opacity:0, y:100}}
             animate={{opacity:1, y:0, transition:{duration:1}}} />
            </ColumnRight>  
           
            </Container>
      </Section>
      </>
    )
}

const Section = styled.section`
    height: 100vh ;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

@media screen and (max-width:768px) {
    background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }


`

const Container = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr;
    height:100vh;
    padding:3rem calc((100vw - 1300px)/2);

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnLeft = styled.div`
    display:flex;
    color:black;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:5rem 4rem;

    h1{
        margin-bottom:0.5rem;
        font-size:2rem;
        @media screen and (max-width: 960px) {
        align-items:center;
        justify-content: center;
    }
    }

    p{
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
        @media screen and (max-width: 960px) {
        align-items:center;
        justify-content: center;
    }
    }
    @media screen and (max-width: 960px) {
        align-items:center;
        justify-content: center;
    }

`

const Button = styled(motion.button)`
    padding:1rem 3rem;
    font-size:1rem;
    border:2px solid #085630;
    border-radius:30px;
    outline:none;
    cursor:pointer;
    background: transparent;
    color:#D85548;
    font-weight:700;
`

const Image = styled(motion.img)`
    position:absolute;
    height:100%;
    width:100%;
    max-width:250px;
    max-height:250px;

    @media screen and (max-width: 960px) {
        display:none;
    }
  
`

const ColumnRight = styled.div`
      display:flex;
    justify-content:center;
    align-items:center;
    padding:2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top:120px;
        left:10px;
    }
    
    ${Image}:nth-child(2) {
        top:100px;
        right:10px;
    }

    
    ${Image}:nth-child(3) {
        bottom:120px;
        left:50px;
    }
    ${Image}:nth-child(4) {
        bottom:120px;
        right:25px;
    }
`
export default Landing
