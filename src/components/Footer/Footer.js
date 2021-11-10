// Fn Comp with Anonymous Fn 
import React from 'react';
import Menu from '../Menu/Menu';

const Footer = function(){
  // keep your variables here
  const year = 2021;

  return(
    <footer className="text-center">
      <hr />
      <Menu />
      <p>Copyright {year} - Arun</p>
    </footer>
  )
}

export default Footer;
