import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElement';
  
function logout(){
  sessionStorage.removeItem('token');
}
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/leaderboard'>Leaderboard</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={logout} to='/'>Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;