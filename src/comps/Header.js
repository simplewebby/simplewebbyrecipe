import React from "react";

const Header = (props) => {
  return (
   
      <nav className="navbar navbar-dark bg-primary text-light">
       <h2>{props.text}</h2>
      </nav>
     
   
  );
};

export default Header;