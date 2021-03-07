import React, {useState, useRef, useEffect} from 'react'
import * as faceapi from 'face-api.js';
import Header from './header';
import styled from 'styled-components';
import { ContinueButton } from './globalStyles';

const Question = () => {

    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();
    const videoHeight = 480;
    const videoWidth = 640;

    const manualHandle = () => {

    }

    const webcamHandle = async() => {
        const MODEL_URL = process.env.PUBLIC_URL + '/models';
        setInitializing(true);
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)

        ]).then(startVideo);
    }
    const startVideo = () => {
        navigator.getUserMedia({
            video:{}
        }, stream => videoRef.current.srcObject = stream,
        () => console.warn("Error getting video")
        )
    }

    const handleVideoOnPlay = async () => {

            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            const displaySize = {
                width:videoWidth,
                height:videoHeight
            }
            faceapi.matchDimensions(canvasRef.current, displaySize);
            const detections =  await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasRef.current.getContext('2d').clearRect(0,0,videoWidth, videoHeight);
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
            
            console.log(detections);
        
    }
    return (
        <>
            <Header />
            <Wrapper>
           <Welcome> <h1>Hi , Welcome back</h1></Welcome>
           <Welcome><p>Let's personalize your mood</p></Welcome>

            <CardWrapper>

              <QuestionArea>
                 <p>Would you like to try mood recognition via webcam? </p>
              </QuestionArea>

                {initializing ? <>
            <span>{initializing ? 'Initializing' : 'Ready'}</span> 
          <div style={{display:'flex', justifyContent:'center'}}>
          <video ref = {videoRef} autoPlay muted height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay} />
          <canvas ref = {canvasRef} style={{position:'absolute'}} /> 
          </div> 
                </> : 
                <>
                 <ContinueButton onClick={webcamHandle}>Yes</ContinueButton>
                 <ContinueButton onClick={manualHandle}>Do it manually</ContinueButton>
                </>
                }
               
             </CardWrapper>
             
           </Wrapper>
        </>
    )
}
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
const CardWrapper = styled.div`
overflow: hidden;
display:flex;
flex-direction:column;
justify-content: start;
align-items: center;
padding:3rem;
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

const QuestionArea = styled.div`
    
    margin-bottom:50px;

    p{
        color:#fff;
        font-size:1.2rem;
    }
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

export default Question
