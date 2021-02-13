import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Landing from '../screens/Landing';


const PrivateRoute = ({component: Component, ...rest}) => {

const isAuth = useSelector(state => state.auth.user);


    return (
       <Route
       {...rest}
       render = {
           props => isAuth ? (
               <Component {...props} />
           ) : (
              <Landing />
           )
       }
       />
    )
}

export default PrivateRoute
