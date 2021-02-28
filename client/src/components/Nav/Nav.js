import React from 'react'
import Navbar from './Navbar/Navbar';
import NavItem from './Navbar/NavItem/NavItem';
import {ReactComponent as Messenger} from '../../images/facebook-messenger-brands.svg'
import {ReactComponent as Spotify} from '../../images/spotify-brands.svg'
import {ReactComponent as Movies} from '../../images/video-solid.svg'
import {ReactComponent as Caret}from '../../images/arrow-circle-right-solid.svg'
import {ReactComponent as  CogIcon} from '../../images/settings.svg'
import {ReactComponent as Book }from '../../images/book-open-solid.svg'
import {NavLogo, NavIcon} from '../screens/NavBar'
import {ReactComponent as MainLogo} from '../../images/mainLogo.svg'
import {useSelector, useDispatch} from 'react-redux'
import {clearModal, modal} from '../../actions/modalAction'
import styled from 'styled-components';
import {logout} from '../../actions/authActions';
import './Nav.css'
import { clearMood } from '../../actions/moodActions';
import { Redirect, useHistory } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav'

const Nav = () => {

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    return (
        <div>
        {isAuth ? <><UpperNav /></>: null}
        <Navbar>
        <Logo text={<p>MOOD</p>}></Logo>
    <NavItem link="/home" icon = {<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="spotify" className="svg-inline--fa fa-spotify fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path></svg> }text={<p>Spotify</p>} />
      <NavItem link="/chat"icon = {<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-messenger" className="svg-inline--fa fa-facebook-messenger fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path></svg>} text={<p>Chatroom</p>}> </NavItem>
      <NavItem link="/movies" icon = {<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" className="svg-inline--fa fa-video fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg>}text={<p>Movies</p>}></NavItem>
      <NavItem link ="/books" icon= {<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" className="svg-inline--fa fa-book-open fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg>} text={<p>Book</p>}> </NavItem>
      
      
      {isAuth ? <>
        <NavItem icon = {<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" className="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>} text={<p>Sign In</p>}>
        
        <DropdownMenu />
         </NavItem>
         
      
      </> : null}
     
           {/* <Button onClick ={ () => dispatch(modal())} primary>Sign In</Button> */}
        
           
     </Navbar>
        </div>
    )
}

const Logo = (props) => {
    return (
        <>
        <li className="logo">
           
           <a href= "#" className="icon-button" >
           <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
           
               <span className="link-text">{props.text}</span>
           </a>

          
       </li>
        </>

    );


}

const Button = styled.button`
    border-radius:14px;
    background-color: #484a4d;
    white-space:nowrap;
    padding: ${({big}) => (big ? '12px 64px': '10px 20px')};
    color: white;
    height:60px;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor:pointer;
    font-weight:500;
    

    &:hover {
        transition: all 0.3s ease-out;
       
       filter:brightness(1.2);
        color:white;
        
      
    }

    @media screen and (max-width: 960px) {
            width: 100%;
        }

`

export default Nav

function DropdownMenu  ()  {

    const dispatch = useDispatch();
    const history = useHistory();
    function DropdownItem(props) {
    return (
        <a href= "#" className="menu-item">
            <span className="icon-button1">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right1">{props.rightIcon}</span>
        </a>
    );
}
return (
  
    <div className="dropdown">
       
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
          >
           <p  onClick={ () => {
               dispatch(logout());
               dispatch(clearMood());
               dispatch(clearModal());
               history.push('/');
               //clear continue button as well....TODO
           }}>  Logout</p>
          </DropdownItem>
          

        </div>
     

   
);
}

