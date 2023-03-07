import React from 'react'
import logo from '../../images/Blitzpath.jpeg'
import logo1 from '../../images/Blitzpathlogo.jpeg'
import {Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="container">
    <header className="nav-item">
        <div className="logo-section">
          <div className="logo">
          <Link to="/g">
            <img src={logo1} alt="" />
            </Link>
            </div>
            <div className="logo1">
            <Link to="/g">
            <img src={logo} alt="" />
            </Link>
            </div>
        </div>
        <nav className='desktop-device'>
            <ul  className='navlink'>
                <li><Link to="#">Services And Products</Link></li>
                <li><Link to="#">Customer Stories</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/Careers">Careers</Link></li>
                <li><Link to="/ContactUs">Contact</Link></li>
            </ul>
        </nav>
        <nav className='mobile-device'>
            <div class="nav-container">
              <div class="dropdown">
                <button class="dropbtn">
                <div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                  </div></button>
                <div class="dropdown-content">
                  <Link to="#">Home</Link>
                  <Link to="#">Services and Products</Link>
                  <Link to="#">Customer Stories</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="#">Careers</Link>
                  <Link to="#">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
    </header>
    </div>
  )
}

export default Navbar
