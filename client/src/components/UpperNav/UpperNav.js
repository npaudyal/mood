import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Admin from '../screens/Admin'
import './UpperNav.css'
const UpperNav = () => {

    const name = useSelector(state=> state.auth.user.name)
    const admin = useSelector(state => state.auth.user.role)
    const history = useHistory();

    const profilepageHandler = () => {

        history.push('/profile')
    }

    const adminPageHandler = () => {
        history.push('/admin')
    }


    return (
        <>
            <div className="upperNav">
                <div className ="profileButton" onClick ={profilepageHandler}>
                            {name.split(' ').slice(0,1).join(' ')}
                     </div>
                {admin === "admin" ?  <div className ="profileButton" onClick ={adminPageHandler}>
                           Admin
                     </div> : null}
                    
            </div>
        </>
    )
}

export default UpperNav
