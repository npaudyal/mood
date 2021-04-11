import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Landing from '../screens/Landing';
import HomePage from '../screens/HomePage';


const PrivateRoute = ({component: Component, ...rest}) => {

const isAuth = useSelector(state => state.auth.user);
const media = useSelector(state => state.media)


    return (
       <Route
       {...rest}
       render = {
           props =>isAuth && Object.keys(media).length > 0 ? 
           (
               <Component {...props} />
           ) : isAuth ? (
               <Component {...props} />
           ):
            
           (
              <Landing />
           )
       }
       />
    )
}

export default PrivateRoute
