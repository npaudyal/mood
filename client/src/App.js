import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
const App = () => {
  return (
   <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component = {LoginScreen} />
          <Route exact path="/register" component = {RegisterScreen} />
          <Route exact path="/forgotPassword" component = {ForgotPasswordScreen} />
          <Route exact path="/passwordreset/:resetToken" component = {ResetPasswordScreen} />
        </Switch>
      </div>
   </Router>
  );
}

export default App;
