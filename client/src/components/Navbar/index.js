import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElement';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/leaderboard'>Leaderboard</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
          <NavBtnLink to='/sign-up'>Sign UP</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;