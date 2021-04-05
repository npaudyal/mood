import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './UpperNav.css'
const UpperNav = () => {

    const name = useSelector(state=> state.auth.user.name)
    const history = useHistory();

    const profilepageHandler = () => {

        history.push('/profile')
    }


    return (
        <>
            <div className="upperNav">
                <div className ="profileButton" onClick ={profilepageHandler}>
                            {name.split(' ').slice(0,1).join(' ')}
                     </div>
            </div>
        </>
    )
}

export default UpperNav
