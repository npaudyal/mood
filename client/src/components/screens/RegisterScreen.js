import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './RegisterScreen.css'
import {IoLogoFacebook, IoLogoGoogle} from 'react-icons/io' 
import {useDispatch} from 'react-redux';
import {signUpClicked} from '../../actions/signUpAction'
const RegisterScreen = () => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

    
const registerHandler = () => {
    console.log('registerHandler');
}

const dispatch = useDispatch();

    return (
      <>
      
        <h3>Sign Up</h3>
        {/* <label htmlFor="name">Username:</label> */}
        <Padding />
        <StyledInput 
            type="text"
            required
            id="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}

            />
             {/* <label htmlFor="email">Email:</label> */}
        <StyledInput 
            type="text"
            required
            id="name"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            />

{/* <label htmlFor="password">Password:</label> */}
        <StyledInput 
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            />

{/* <label htmlFor="password">Confirm Password:</label> */}
        <StyledInput 
            type="password"
            required
            id="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}

            />
            <Padding />
            <MyButton> Sign Up</MyButton>
            <Padding />
           <Divider>Or</Divider>

           <Padding />
           <SocialMediaButton facebook>
            <FacebookIcon></FacebookIcon> Continue with Facebook
           </SocialMediaButton>

           <Padding />
           <SocialMediaButton>
            <GoogleLogo></GoogleLogo> Continue with Google
           </SocialMediaButton>

           <Padding />
           <Padding />
           <Padding />
           <Padding />
           
           <h5> Already have an account? </h5>

           <h4 style={{color:"grey", textDecoration:"underline", cursor:"pointer"}} onClick={() => dispatch(signUpClicked())}>Sign In</h4>

      </>
    )
}

const FacebookIcon = styled(IoLogoFacebook)`
   font-size:1.6rem; 
`
const GoogleLogo = styled(IoLogoGoogle)`
    font-size:1.6rem;
`

const Divider = ({ children }) => {
    return (
      <div className="container">
        <div className="border" />
        <span className="content">
          {children}
        </span>
        <div className="border" />
      </div>
    );
  };
  

const MyButton = styled.button`
    display:block;
    background-color:#0D7E1A;
    color:#fff;
    font-size:.9rem;
    border:0;
    width:100%;
    border-radius:5px;
    height:40px;
    padding:0 20px;
    cursor:pointer;
    box-sizing:border-box;

    &:hover {
   background-color:black;
    
   
}

`

const SocialMediaButton = styled.button`
  display:flex;
    background-color:${({facebook}) => (facebook ? '#0D65BE': '#F50319')};
    color:#fff;
    font-size:.9rem;
    border:0;
    width:100%;
    border-radius:5px;
    height:40px;
    padding:0 20px;
    padding-right:150px;
    cursor:pointer;
    box-sizing:border-box;
    align-items:center;
    justify-content: space-between;
    &:hover {
   background-color:black;
    
   
}
`

const Padding = styled.div`
    padding-bottom:20px;
    


`
const StyledInput = styled.input`
    display:block;
    
    width:100%;
    background-color:#eee;
    height:40px;
    border-radius:5px;
    border:1px solid #ddd;
    
    margin:5px 0 5px 0;
    padding:20px;
    box-sizing:border-box;

`

export default RegisterScreen
