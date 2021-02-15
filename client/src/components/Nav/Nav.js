import React from 'react'
import Navbar from './Navbar/Navbar';
import NavItem from './Navbar/NavItem/NavItem';
import {ReactComponent as Spotify} from '../../images/spotify (1).svg'
import {ReactComponent as Messenger} from '../../images/messenger.svg'
import {ReactComponent as Movies} from '../../images/movies.svg'
import {ReactComponent as Caret} from '../../images/sort-down.svg'
import {ReactComponent as CogIcon} from '../../images/settings.svg'
import {ReactComponent as Book} from '../../images/book.svg'
import {NavLogo, NavIcon} from '../screens/NavBar'
import mainLogo from '../../images/mainLogo.svg'
import {useSelector, useDispatch} from 'react-redux'
import {modal} from '../../actions/modalAction'
import styled from 'styled-components';
import './Nav.css'


const Nav = () => {

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    return (
        <div>
        <Navbar>
        <NavLogo to ="/">
                <NavIcon src={mainLogo} />
            </NavLogo>
      {isAuth ? <><NavItem icon = {<Spotify />} />
      <NavItem icon = {<Messenger />} />
      <NavItem icon = {<Movies />} />
      <NavItem icon = {<Book />} />
      <NavItem icon = {<Caret />}>
        
          <DropdownMenu />
           </NavItem>
           </> : <>
           <Button onClick ={ () => dispatch(modal())} primary>Sign In</Button>
            </>
           }
     </Navbar>
        </div>
    )
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
            Logout
          </DropdownItem>
          

        </div>
     

   
);
}