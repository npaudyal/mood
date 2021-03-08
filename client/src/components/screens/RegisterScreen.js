import React from 'react'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './RegisterScreen.css'
import {IoLogoFacebook, IoLogoGoogle} from 'react-icons/io' 
import {useDispatch} from 'react-redux';
import {signUpClicked} from '../../actions/signUpAction'
import{useSelector} from 'react-redux';
import {register} from '../../actions/authActions'
import {clearModal} from '../../actions/modalAction'
import {Redirect} from 'react-router';
import { clearErrors } from '../../actions/errorActions';

const RegisterScreen = () => {

  const isAuthenticated = useSelector(state => state.auth.user);
  const error =  useSelector(state => state.error);
  const id =  useSelector(state => state.error.id);

  const history = useHistory();



const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// const [msg, setMsg] = useState(null);

    
const registerHandler = () => {
 
  const newUser = {
    name, email,password
  }
  
 
  dispatch(register(newUser));
  
 
}


const dispatch = useDispatch();


  if(isAuthenticated) {
    dispatch(clearErrors());
    dispatch(clearModal());
     history.push("/");
  }


    return (
      <>

      
      
        <h3>Sign Up</h3>
        {/* <label htmlFor="name">Username:</label> */}
        <Padding />
        {id ==="REGISTER_FAIL" ? <Warning>{error.msg.msg}</Warning>  : null}
        
        <StyledInput 
            type="text"
            required
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}

            />
             {/* <label htmlFor="email">Email:</label> */}
        <StyledInput 
            type="text"
            required
            id="email"
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

            <Padding />
            <MyButton onClick={registerHandler}> Sign Up</MyButton>
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

const Warning = styled.button`
    width: 100%;
   border-radius:8px;
    background:#DF5A62;
    margin-bottom:20px;
    white-space:nowrap;
    padding: 12px 64px;
    color: white;
    font-size: 15px;
    outline:none;
    border:none;
    cursor:pointer;
    font-weight:100;

`
  

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
