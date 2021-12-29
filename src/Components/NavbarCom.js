import React from 'react';
import {Link} from 'react-router-dom';
function NavbarCom()
{
return(
<>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/addUser">Add</Link>
      </li>
     
    
    </ul>
    
  </div>
</nav>

  
    </>
);
}
export default NavbarCom;