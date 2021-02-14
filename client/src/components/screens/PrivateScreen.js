import React, {useState, useEffect} from 'react'
import Header from './header';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {Slider} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {ImSad} from 'react-icons/im';
import {RiEmotionUnhappyLine} from 'react-icons/ri'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import {BiHappy, BiHappyBeaming} from 'react-icons/bi'
import {ContinueButton} from './globalStyles'
import {emojiState} from '../../actions/moodActions'
const useStyles = makeStyles((theme) => ({
    root: {
      width: 400,
   
     alignSelf:"center",
     padding:"10px 10px",
     '@media screen and (max-width: 960px)': {
        padding:'10px 30px'
    }
    },
    margin: {
      height: theme.spacing(3),
    },
  }));


const PrivateScreen = () => {


    const classes = useStyles();
    const dispatch = useDispatch();

  const[value, setValue] = useState(0);

 let emoji;
if(value === 0) emoji = <><Terrible /> <p>Terrible</p></>
if(value === 25) emoji = <><Sad /> <p>Sad</p></>
if(value === 50) emoji =<><Okay /> <p>Okay</p></>
if(value === 75) emoji = <><Happy /> <p>Happy</p></>
if(value === 100) emoji = <><Awesome /> <p>Awesome</p></>

    const user = useSelector(state => state.auth.user);
    
    return (
        <>
         <Header />
            <Wrapper>
           <Welcome> <h1>Hi {user.name}, Welcome back</h1></Welcome>
           <Welcome><p>Let's personalize your mood</p></Welcome>

            <CardWrapper>
            <Question>
                <p>How are you doing today?</p>
                </Question>
            <EmojiWrapper>
            

           {emoji}
           
            </EmojiWrapper>
            
               <Slider
               style={{width:400,color:'white' }}
                aria-label="pretto slider"
                defaultValue={50}
                value ={value}
                step={25}
                onChange={ (e, v) => 
                        setValue(v)
                
                }
                />
                <ContinueButton onClick = { () => dispatch(emojiState(value))}> Continue </ContinueButton>
             </CardWrapper>
             
           </Wrapper>

        </>
    )
}
 const CardWrapper = styled.div`
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  width: 600px;
  height:600px;
 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  p{
        color:#fff;
    }

    &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
 
    }
`;

const EmojiWrapper = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    
    margin-top:5rem;
    margin-bottom:50px;
    p{
        color:#fff;
    }
`
const Question = styled.div`
    
    margin-bottom:50px;

    p{
        color:#fff;
    }
`

const Sad = styled(ImSad)`

    margin-bottom: 1rem;
    font-size:4rem;
    color:white;
`
const Happy = styled(BiHappy)`

    margin-bottom: 1rem;
    font-size:4rem;
    color:white;
`
const Terrible = styled(RiEmotionUnhappyLine)`

    margin-bottom: 1rem;
    font-size:4rem;
    color:white;
`
const Okay = styled(HiOutlineEmojiHappy)`

    margin-bottom: 1rem;
    font-size:4rem;
    color:white;
`
const Awesome = styled(BiHappyBeaming)`

    margin-bottom: 1rem;
    font-size:4rem;
    color:white;
`

const Wrapper = styled.div`
    height: 90vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    width: 100%;
    background: #159957;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    
`

const Feel = styled.div`
   display:flex;
   
   width:40%;
    
    align-items: center;
    justify-content: center;

`

const Welcome = styled.div`
  
    display:flex;
    color:black;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    

    h1{
        margin-bottom:0.5rem;
        font-size:2rem;
        color:#DCDDE7;
        @media screen and (max-width: 960px) {
        align-items:center;
        justify-content: center;
        margin: 0 2rem;
    }
}
    p{
        margin: 1rem 0;
        font-size: 1.5rem;
        line-height: 1.1;
        color:#DCDDE7;
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

export default PrivateScreen
