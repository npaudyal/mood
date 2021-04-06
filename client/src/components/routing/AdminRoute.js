import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Landing from '../screens/Landing';


const AdminRoute = ({component: Component, ...rest}) => {

const isAdmin = useSelector(state => state.auth.user.role);


    return (
       <Route
       {...rest}
       render = {
           props => isAdmin === "admin" ? (
               <Component {...props} />
           ) : (
              <h1> Restricted Page </h1>
           )
       }
       />
    )
}

export default AdminRoute
