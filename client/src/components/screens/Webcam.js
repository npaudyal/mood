import React, {useState, useRef, useEffect} from 'react'
import * as faceapi from 'face-api.js';

const Webcam = () => {

    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();
    const videoHeight = 480;
    const videoWidth = 640;

    useEffect(() => {
        const loadModels = async() => {
            const MODEL_URL = process.env.PUBLIC_URL + '/models';
            setInitializing(true);
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)

            ]).then(startVideo);
        }
        loadModels();
    }, [])
    
    const startVideo = () => {
        navigator.getUserMedia({
            video:{},
        }, stream => 
            videoRef.current.srcObject = stream
        )
    }

    const handleVideoOnPlay = () => {
        setInterval( async() => {
            if(initializing) {
                setInitializing(false);
            }
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            const displaySize = {
                wifth:videoWidth,
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
        }, 100)
    }
    return (
        <>
          <span>{initializing ? 'Initializing' : 'Ready'}</span> 
          <div style={{display:'flex', justifyContent='center'}}>
          <video ref = {videoRef} autoPlay muted height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay} />
          <canvas ref = {canvasRef} style={{position:'absolute'}} /> 
          </div>
        </>
    )
}

export default Webcam
