import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import Landing from './components/screens/Landing';


const App = () => {
  return (
  //  <Router>
  //     <div className="app">
  //       <Switch>
  //         <PrivateRoute rxact path="/" component = {PrivateScreen} />
  //         <Route exact path="/login" component = {LoginScreen} />
  //         <Route exact path="/register" component = {RegisterScreen} />
  //         <Route exact path="/forgotPassword" component = {ForgotPasswordScreen} />
  //         <Route exact path="/passwordreset/:resetToken" component = {ResetPasswordScreen} />
  //       </Switch>
  //     </div>
  //  </Router>
  
    <Router>
      <Switch>
  <Landing />
  </Switch>
  </Router>

  );
}

export default App;
