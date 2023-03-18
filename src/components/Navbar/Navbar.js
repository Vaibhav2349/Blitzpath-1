import React from 'react'
import logo from '../../images/Blitzpath.jpeg'
import logo1 from '../../images/Blitzpathlogo.jpeg'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import DayNightToggle from 'react-day-and-night-toggle'
function Navbar({isDarkMode,setIsDarkMode}) {
  
  return (
    <div className="container">
    <header className="nav-item" id = "items">
        <div className="logo-section">
          <div className="logo">
          <Link to="/Blitzpath">
            <img src={logo1} alt="" />
            </Link>
            </div>
            <div className="logo1">
            <Link to="/Blitzpath">
            <img src={logo} alt="" />
            </Link>
            </div>
        </div>
        <nav className='desktop-device'>
            <ul  className='navlink'>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/customer_stories">Customer Stories</Link></li>
                <li><Link to="/about/#about">About Us</Link></li>
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
                
                  <Link to="/services">Services</Link>
                  <Link to="/customer_stories">Customer Stories</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/Careers">Careers</Link>
                  <Link to="/ContactUs">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
    </header>
    {/* <div className="dark-mode">

          <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />
    </div> */}
    </div>
  )
}

export default Navbar
