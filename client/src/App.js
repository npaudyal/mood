import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import Landing from './components/screens/Landing';
import {loadUser} from './actions/authActions';
import {useEffect} from 'react'
import store from './store'
import Header from './components/screens/header'
import HomePage from './components/screens/HomePage'
import Nav from './components/Nav/Nav'
const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  })

  return (
    
   <Router>
   
        <Switch>
          <PrivateRoute exact path="/" component = {PrivateScreen} />
          <PrivateRoute exact path="/home" component = {HomePage} />
          
         
          <Route path = "*" component={() => "404 not found!"} />
        </Switch>
     
   </Router>

  
  );
}

export default App;
