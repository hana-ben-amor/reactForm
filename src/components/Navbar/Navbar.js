import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
     
<nav className="navbar navbar-expand-lg fixed-top  bg-light p-3">
<ul className="nav nav-pills nav-fill">
 
  <li className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
  <li className="nav-itemhana">
    <a className="nav-link" href="#">Projects</a>
  </li>
  <li className="nav-item ">
    <a className="nav-link ">Workshops</a>
  </li>
  <li className="nav-item">
    <a className="nav-link ">Contact Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Subscribe</a>
  </li>
</ul>
</nav>
</div>
  )
}

export default Navbar