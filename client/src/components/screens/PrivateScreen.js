import React, {useState, useEffect} from 'react'
import Header from './header';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {Slider} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {ContinueButton} from './globalStyles'
import {emojiState,keyword} from '../../actions/moodActions'
import {useHistory} from 'react-router-dom'
import
{Terrible, Sad, Okay, Happy, Awesome, EmojiWrapper, EmojiButtonWrapper} from '../emoticons'





const PrivateScreen = () => {

    const history = useHistory();
 
    const dispatch = useDispatch();

  const[value, setValue] = useState(0);

    const[keyWords, setKeyWords] = useState([]);

  const[emojiContinueClicked, setEmojiContinueClicked] = useState(false);
  const[causeContinueClicked, setCauseContinueClicked] = useState(false);

  const[feelGoodButtonColor, setFeelGoodButtonColor] = useState(false);
  const[feelGoodFontColor, setFeelGoodFontColor] = useState(false);

  const[emotionalButtonColor, setEmotionalGoodButtonColor] = useState(false);
  const[emotionalFontColor, setEmotionalFontColor] = useState(false);

  const[thoughtfulButtonColor, setThoughtfulButtonColor] = useState(false);
  const[thoughtfulFontColor, setThoughtfulFontColor] = useState(false);

  const[intenseButtonColor, setIntenseButtonColor] = useState(false);
  const[intenseFontColor, setIntenseFontColor] = useState(false);

  const[touchingButtonColor, setTouchingButtonColor] = useState(false);
  const[touchingFontColor, setTouchingFontColor] = useState(false);

  const[romanticButtonColor, setRomanticButtonColor] = useState(false);
  const[romanticFontColor, setRomanticFontColor] = useState(false);

  const[depressingButtonColor, setDepressingButtonColor] = useState(false);
  const[depressingFontColor, setDepressingFontColor] = useState(false);

  const[thrillingButtonColor, setThrillingButtonColor] = useState(false);
  const[thrillingFontColor, setThrillingFontColor] = useState(false);

  const[funnyButtonColor, setFunnyButtonColor] = useState(false);
  const[funnyFontColor, setFunnyFontColor] = useState(false);

  const[pumpedButtonColor, setPumpedButtonColor] = useState(false);
  const[pumpedFontColor, setPumpedFontColor] = useState(false);

  const[darkButtonColor, setDarkButtonColor] = useState(false);
  const[darkFontColor, setDarkFontColor] = useState(false);

  const[inspiringButtonColor, setInspiringButtonColor] = useState(false);
  const[inspiringFontColor, setInspiringFontColor] = useState(false);


 let emoji;
if(value === 0) emoji = <><Terrible /> <p>Terrible</p></>
if(value === 25) emoji = <><Sad /> <p>Sad</p></>
if(value === 50) emoji =<><Okay /> <p>Okay</p></>
if(value === 75) emoji = <><Happy /> <p>Happy</p></>
if(value === 100) emoji = <><Awesome /> <p>Awesome</p></>

    const user = useSelector(state => state.auth.user);
    const emojiStateSelector = useSelector(state => state.emojiState);


   
    const handleRedirect = () => {
        
       history.push('/home');
      
    }
    
const FeelGoodEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${feelGoodButtonColor ? 'white': 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
     color:${feelGoodFontColor ? 'black' : 'white'};;
     font-size:12px;
 }

`
const EmotionalEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${emotionalButtonColor ? 'white': 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
     color:${emotionalFontColor ? 'black': 'white'};;
     font-size:12px;
 }

`
const ThoughtfulEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${thoughtfulButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
     color:${thoughtfulFontColor ? 'black':'white'};
     font-size:12px;
 }

`
const IntenseEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${intenseButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
    color:${intenseFontColor ? 'black':'white'};

     font-size:12px;
 }

`
const TouchingEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${touchingButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
    color:${touchingFontColor ? 'black':'white'};

     font-size:12px;
 }

`
const RomanticEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${romanticButtonColor ? 'white': 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
    color:${romanticFontColor ? 'black':'white'};

     font-size:12px;
 }

`
const DepressingEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${depressingButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
    color:${depressingFontColor ? 'black':'white'};
     font-size:12px;
 }

`
const ThrillingEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${thrillingButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
    color:${thrillingFontColor ? 'black':'white'};
     font-size:12px;
 }

`
const FunnyEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${funnyButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
     color:${funnyFontColor ? 'black':'white'};
     font-size:12px;
 }

`
const InspiringEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${inspiringButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
     color:${inspiringFontColor ? 'black':'white'};
     font-size:12px;
 }

`
const PumpedEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${pumpedButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
     color:${pumpedFontColor ? 'black':'white'};
     font-size:12px;
 }

`
const DarkEmojiButton = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 width:100px;
 height:50px;
 margin:5px 5px;
 border-radius:7px;
 outline:none;
 cursor:pointer;
 border:solid 2px white;
 background:${darkButtonColor ? 'white' : 'transparent'};
 color:white;

 &:focus{
     border: 3px solid white;
 }

 p{
     color:${darkFontColor ? 'black':'white'};
     font-size:12px;
 }

`



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
            <p> What kind of mood-based content would you prefer?</p>
            </Question>
            <EmojiButtonWrapper>
            <FeelGoodEmojiButton onClick={() => {dispatch(keyword('feelgood')); setFeelGoodButtonColor((prev) => !prev); setFeelGoodFontColor((prev) => !prev) }}><p>Feel-Good</p></FeelGoodEmojiButton>
            <EmotionalEmojiButton onClick={() => {dispatch(keyword('emotional')); setEmotionalGoodButtonColor((prev) => !prev); setEmotionalFontColor((prev) => !prev) }}><p>Emotional</p></EmotionalEmojiButton>
            <ThoughtfulEmojiButton onClick={() => {dispatch(keyword('thoughtful')); setThoughtfulButtonColor((prev) => !prev); setThoughtfulFontColor((prev) => !prev) }}><p>Thoughtful</p></ThoughtfulEmojiButton>
            <IntenseEmojiButton onClick={() => {dispatch(keyword('intense'));setIntenseButtonColor((prev) => !prev); setIntenseFontColor((prev) => !prev) }}><p>Intense</p></IntenseEmojiButton>
            <TouchingEmojiButton onClick={() => {dispatch(keyword('touching'));setTouchingButtonColor((prev) => !prev); setTouchingFontColor((prev) => !prev) }}><p>Touching</p></TouchingEmojiButton>
            <RomanticEmojiButton onClick={() => {dispatch(keyword('romantic'));setRomanticButtonColor((prev) => !prev); setRomanticFontColor((prev) => !prev) }}><p>Romantic</p></RomanticEmojiButton>
            <DepressingEmojiButton onClick={() => {dispatch(keyword('sad'));setDepressingButtonColor((prev) => !prev); setDepressingFontColor((prev) => !prev) }}><p>Sad</p></DepressingEmojiButton>
            <ThrillingEmojiButton onClick={() => {dispatch(keyword('thrilling'));setThrillingButtonColor((prev) => !prev); setThrillingFontColor((prev) => !prev) }}><p>Thrilling</p></ThrillingEmojiButton>
            <FunnyEmojiButton onClick={() => {dispatch(keyword('funny'));setFunnyButtonColor((prev) => !prev); setFunnyFontColor((prev) => !prev) }}><p>Funny</p></FunnyEmojiButton>
            <InspiringEmojiButton onClick={() => {dispatch(keyword('inspiring'));setInspiringButtonColor((prev) => !prev); setInspiringFontColor((prev) => !prev) }}><p>Inspiring</p></InspiringEmojiButton>
            <PumpedEmojiButton onClick={() => {dispatch(keyword('rush'));setPumpedButtonColor((prev) => !prev); setPumpedFontColor((prev) => !prev) }}><p>Rush</p></PumpedEmojiButton>
            <DarkEmojiButton onClick={() => {dispatch(keyword('dark'));setDarkButtonColor((prev) => !prev); setDarkFontColor((prev) => !prev) }}><p>Dark</p></DarkEmojiButton>
           
            </EmojiButtonWrapper>

            <ContinueButton onClick ={() => {

               
                
                handleRedirect();
                setCauseContinueClicked(false);
                setEmojiContinueClicked(false);

            }}>Continue</ContinueButton>

            </>)
        } 

        else {
            handleRedirect();
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
    );

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

const Question = styled.div`
    
    margin-bottom:50px;

    p{
        color:#fff;
    }
`


const Wrapper = styled.div`
    height: 85vh;
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
