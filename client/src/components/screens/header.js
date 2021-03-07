import React from 'react';
import './header.css'
import mainLogo from '../../images/mainLogo.svg'; 
import styled from 'styled-components';


const Header = () => {
  return (
    <header>
      
       <Logo src={mainLogo}/>

      <div className="title">
        <h1>mood</h1>
      </div>
      
    </header>
  )
}

const Logo = styled.img`
  height:80px;
  width:100px;  

`

export default Header;