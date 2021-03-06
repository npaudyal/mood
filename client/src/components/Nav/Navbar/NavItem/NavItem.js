import React, {useState} from 'react'
import './NavItem.css'
const NavItem = (props) => {

    const[open, setOpen] = useState(false);

      return (
        <>
    
        <li className="nav-item">
           
            <a href= {props.link} className="icon-button" onClick={ () => setOpen(!open)}>
                {props.icon}
            
                <span className="link-text">{props.text}</span>
            </a>

            {open && props.children}
        </li>
        </>
    )
}

export default NavItem
