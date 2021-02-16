import React, {useState, useEffect} from 'react'
import Header from './header';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {Slider} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {ContinueButton} from './globalStyles'
import {emojiState, cause, result} from '../../actions/moodActions'
import {useHistory} from 'react-router-dom'
import
{Terrible, Sad, Okay, Happy, Awesome, EmojiWrapper, EmojiButtonWrapper,  Work, School, Family, Music, Excercise, Travel,
 Health, Relationship, Weather, Food, Sleep, Festival, ImaHappy, ImaGood, ImaLucky, ImaBored, ImaStressed, ImaAngry, ImaSad,
 Romantic, Blessed, Awkward, Pumped, Curious


} from '../emoticons'





const PrivateScreen = () => {

    const history = useHistory();
 
    const dispatch = useDispatch();

  const[value, setValue] = useState(0);
  const[causeValue, setCauseValue] = useState('');
  const[resultValue, setResultValue] = useState('');
  const[emojiContinueClicked, setEmojiContinueClicked] = useState(false);
  const[causeContinueClicked, setCauseContinueClicked] = useState(false);


 let emoji;
if(value === 0) emoji = <><Terrible /> <p>Terrible</p></>
if(value === 25) emoji = <><Sad /> <p>Sad</p></>
if(value === 50) emoji =<><Okay /> <p>Okay</p></>
if(value === 75) emoji = <><Happy /> <p>Happy</p></>
if(value === 100) emoji = <><Awesome /> <p>Awesome</p></>

    const user = useSelector(state => state.auth.user);
    const emojiStateSelector = useSelector(state => state.emojiState);


   
    const handleRedirect = () => {
        
      dispatch(result(resultValue));
     

       history.push('/home');
      
    }
    const QuestionRenderer = () => {

        if(!emojiContinueClicked && !causeContinueClicked ) {
            return (
                <>
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
            <ContinueButton onClick = { () => { 
                dispatch(emojiState(value));
                setEmojiContinueClicked((prev) => !prev);
                }}> Continue </ContinueButton>
            
            </>
            
            )
        }



        if(emojiContinueClicked && !causeContinueClicked) {
            return ( <>
                <Question>
            <p>Why are you feeling this way?</p>
            </Question>
            <EmojiButtonWrapper>
            <EmojiButton onClick={() => {setCauseValue('Work');}}><Work/><p>Work</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('School')}><School/><p>School</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Family')}><Family/><p>Family</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Relationship')}><Relationship/><p>Relation</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Excercise')}><Excercise/><p>Excercise</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Food')}><Food/><p>Food</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Travel')}><Travel/><p>Travel</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Health')}><Health/><p>Health</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Weather')}><Weather/><p>Weather</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Music')}><Music/><p>Music</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Sleep')}><Sleep/><p>Sleep</p></EmojiButton>
            <EmojiButton onClick={() => setCauseValue('Festival')}><Festival/><p>Festival</p></EmojiButton>
           
            </EmojiButtonWrapper>

            <ContinueButton onClick ={() => {

                dispatch(cause(causeValue));
                setCauseContinueClicked((prev) => !prev);  

            }}>Continue</ContinueButton>

            </>)
        } 


        else {

            return (<> 
            
            <Question>
            <p>Interesting. How are you feeling about this?</p>
            </Question>
            <EmojiButtonWrapper>
            <EmojiButton onClick={() => setResultValue('Happy')}><ImaHappy/><p>Happy</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Sad')}><ImaSad/><p>Sad</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Good')}><ImaGood/><p>Good</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Lucky')}><ImaLucky/><p>Lucky</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Bored')}><ImaBored/><p>Bored</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Stressed')}><ImaStressed/><p>Stressed</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Angry')}><ImaAngry/><p>Angry</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Romantic')}><Romantic/><p>Romantic</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Blessed')}><Blessed/><p>Blessed</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Awkward')}><Awkward/><p>Awkward</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Pumped')}><Pumped/><p>Pumped</p></EmojiButton>
            <EmojiButton onClick={() => setResultValue('Curious')}><Curious/><p>Curious</p></EmojiButton>
           
            </EmojiButtonWrapper>

            <ContinueButton onClick = { () => {
              
                handleRedirect();
                setCauseContinueClicked(false);
                setEmojiContinueClicked(false);
            }
                
                }> Continue </ContinueButton>

            </>)

        }


    }
    
    return (
        <>
         <Header />
            <Wrapper>
           <Welcome> <h1>Hi {user.name}, Welcome back</h1></Welcome>
           <Welcome><p>Let's personalize your mood</p></Welcome>

            <CardWrapper>

              <QuestionRenderer />
            
             </CardWrapper>
             
           </Wrapper>

        </>
    )
}
 const EmojiButton = styled.button`

   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
    width:70px;
    height:70px;
  
    margin:5px 5px;
    border-radius:7px;
    outline:none;
    cursor:pointer;
    border:none;
    background:transparent;
    color:white;

    &:focus{
        border: 3px solid white;
    }

    p{
        color:white;
        font-size:12px;
    }

    

  



`




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

const Question = styled.div`
    
    margin-bottom:50px;

    p{
        color:#fff;
    }
`


const Wrapper = styled.div`
    height: 83vh;
    max-height:100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    width: 100%;
    background: #BBD2C5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #292E49, #536976, #BBD2C5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #292E49, #536976, #BBD2C5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    
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
