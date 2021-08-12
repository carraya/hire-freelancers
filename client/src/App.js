//IMPORT CSS
import './App.css';

//IMPORT PACKAGES
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';

//IMPORT COMPONENTS
import Home from './components/Home/Home.js';
import Freelancers from './components/Freelancers/Freelancers.js';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
import Messenger from './components/Messenger/Messenger.js';

//IMPORT CONTEXTS
import { AuthContext } from './contexts/AuthContext.js';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/freelancers" component={ Freelancers }></Route>
        <Route path="/signup">{ user ? <Redirect to="/"/> : <Signup/> }</Route>
        <Route path="/login">{ user ? <Redirect to="/"/> : <Login/> }</Route>
        <Route path="/profile">{ !user ? <Redirect to="/"/> : <Profile/> }</Route>
        <Route path="/messenger">{ !user ? <Redirect to="/"/> : <Messenger/> }</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
