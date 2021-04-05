import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/screens/PrivateScreen';
import {loadUser} from './actions/authActions';
import {useEffect} from 'react'
import {store} from './store'
import HomePage from './components/screens/HomePage'
import Movies from './components/screens/Movies';
import Books from './components/screens/Books'
import ChatContent from './components/Chat/ChatContent'
import Webcam from './components/screens/Webcam'
import Question from './components/screens/Question';
import { resetState } from './actions/mediaActions';
import Profile from './components/screens/Profile'
const App = () => {


  return (
    
   <Router>
   
        <Switch>
          
          <PrivateRoute exact path="/" component = {Question} />
          <PrivateRoute exact path="/manual" component = {PrivateScreen} />
          <PrivateRoute exact path="/home" component = {HomePage} />
          <PrivateRoute exact path="/movies" component = {Movies} />
          <PrivateRoute exact path="/books" component = {Books} />
          <PrivateRoute exact path="/chat" component = {ChatContent} />
          <PrivateRoute exact path="/profile" component = {Profile} />
          <Route path = "*" component={() => "404 not found!"} />
        </Switch>
     
   </Router>

  
  );
}

export default App;
