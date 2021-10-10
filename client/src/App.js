import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages';
import Home from './pages/home';
import Leaderboard from './pages/leaderboard';
 


function getToken() {
  const tokenString = sessionStorage.getItem('token');
  console.log(tokenString);
  const userToken = JSON.parse(tokenString);
  return tokenString
}


function App() {
  const token = getToken();
  console.log("TOKEN:",token);
  if(token){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </Router>
    );
  }else{
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}
  
export default App;