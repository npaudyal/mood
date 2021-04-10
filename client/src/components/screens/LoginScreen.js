import React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';
import {Redirect} from 'react-router';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import {IoLogoFacebook, IoLogoGoogle} from 'react-icons/io' 
import {useDispatch} from 'react-redux';
import {Button} from './globalStyles'
import {login} from '../../actions/authActions'
import {signUpClicked} from '../../actions/signUpAction'
import {clearModal} from '../../actions/modalAction'
import {clearErrors} from '../../actions/errorActions'
const LoginScreen = () => {

  const isAuthenticated = useSelector(state => state.auth.user);
    const error =  useSelector(state => state.error);
    const id =  useSelector(state => state.error.id);
  const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginHandler = () => {
      const user = {
       email,password
      }
        dispatch(login(user));
       

    }

    
  if(isAuthenticated) {
    dispatch(clearErrors());
    dispatch(clearModal());
  
    history.push("/");
  }



    return (
      
   
        <>
        
          <h3>Sign In</h3>
          {/* <label htmlFor="name">Username:</label> */}
          <Padding />
          {id ==="LOGIN_FAIL" ? <Warning>{error.msg.msg}</Warning>  : null}

               {/* <label htmlFor="email">Email:</label> */}
          <StyledInput 
              type="email"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
  
              />
  
  
              <Padding />
              <MyButton onClick={loginHandler}> Sign In</MyButton>
              <Padding />
             {/* <Divider>Or</Divider>
  
             <Padding />
             <SocialMediaButton facebook>
              <FacebookIcon></FacebookIcon> Continue with Facebook
             </SocialMediaButton>
  
             <Padding />
             <SocialMediaButton>
              <GoogleLogo></GoogleLogo> Continue with Google
             </SocialMediaButton>
  
             <Padding />
             <Padding /> */}
             <Padding />
             <Padding />
             
           <h5> Don't have an account? </h5>
  
             <h4 style={{color:"grey", textDecoration:"underline", cursor:"pointer"}} onClick={ () => dispatch(signUpClicked())}>Sign Up</h4>
  
        </>
      )
  }
  
  const FacebookIcon = styled(IoLogoFacebook)`
     font-size:1.6rem; 
  `
  const GoogleLogo = styled(IoLogoGoogle)`
      font-size:1.6rem;
  `
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
    const AnotherButton = styled.button`
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
    


export default LoginScreen
