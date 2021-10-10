import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages';
import Home from './pages/home';
import Leaderboard from './pages/leaderboard';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/leaderboard' component={Leaderboard} />
      </Switch>
    </Router>
  );
}
  
export default App;