import React from 'react';
import './menu.css';
//import Footer from './Footer';

import { Link } from 'react-router-dom';

const Menu = () =>{

 return(
  <div className="menu">
     <nav className="navstyle">
     
          <Link id="links" to="">  Home              </Link> 
          <Link id="links" to="Rooms"> Rooms         </Link> 
          <Link id="links" to="Contact"> Contact     </Link> 
          <Link id="links" to="About"> About         </Link> 
          
     </nav>
  </div>
 )
} 

export default Menu;