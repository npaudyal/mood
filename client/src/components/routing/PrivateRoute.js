import React from 'react'
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = () => {
    return (
       <Route
       {...rest}
       />
    )
}

export default PrivateRoute
