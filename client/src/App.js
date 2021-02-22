import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/screens/PrivateScreen';
import {loadUser} from './actions/authActions';
import {useEffect} from 'react'
import store from './store'
import HomePage from './components/screens/HomePage'
import Movies from './components/screens/Movies';
import Books from './components/screens/Books'
import Chat from './components/screens/Chat';
const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    
   <Router>
   
        <Switch>
          <PrivateRoute exact path="/" component = {PrivateScreen} />
          <PrivateRoute exact path="/home" component = {HomePage} />
          <PrivateRoute exact path="/movies" component = {Movies} />
          <PrivateRoute exact path="/books" component = {Books} />
          <PrivateRoute exact path="/chat" component = {Chat} />
          
         
          <Route path = "*" component={() => "404 not found!"} />
        </Switch>
     
   </Router>

  
  );
}

export default App;
