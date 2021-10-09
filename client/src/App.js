import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Leaderboard from './pages/leaderboard';
import SignIn from './pages/login';
import SignUp from './pages/register';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
  );
}
  
export default App;