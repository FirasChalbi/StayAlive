import React from 'react';
import './Navbar.css';
import logo from '../../image/logo1.png';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    
    <div class="container">
        <div class="row">
            <div class="col">
                <nav class="main-menu">                
                        <div class="nav-container nav-left">
                            
                            <ul class="navigation">
                            
                                <li><Link to="/">Home</Link></li>
                                <li class="dropdown current"><Link to="/About-Us">About Us</Link>
                                    <ul >
                                        <li><Link to="/About-Us">About Stay Alive</Link></li>
                                        <li><a href="testimonials.html">Testimonials</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="appointment.html">Make an Appointment</a></li>
                                    </ul>
                                <div class="dropdown-btn"></div></li>
                                <li><Link to="/Therapists">Therapists</Link></li>
                                <li class="dropdown"><Link to="/Screening">Screening</Link>
                                    <ul>
                                        <li><Link to="/About-Us">Depression Test</Link></li>
                                        <li><a href="testimonials.html">Anxiety Test</a></li>
                                        <li><a href="faq.html">PTSD Test</a></li>
                                        <li><a href="appointment.html">See All Tests</a></li>
                                    </ul>
                                <div class="dropdown-btn"></div></li>
                            </ul>
                        </div>
                        <div class="image">
                            <Link to="/">
                                <img className='lg' src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div class="nav-container nav-right">
                            <ul class="navigation">
                                <li class="dropdown"><Link to="/Blog">Blog</Link>
                                    <ul>
                                    <li><Link to="/Blog">Blog</Link></li>
                                        <li><Link to="/Blog">Blog</Link></li>
                                        <li><Link to="/Blog">Blog</Link></li>
                                    </ul>
                                <div class="dropdown-btn"></div></li>
                                <li class="dropdown"><Link to="/Advice">Advice</Link>
                                    <ul>
                                        <li><a href="gallery.html">***** ***** ****</a></li>
                                        <li><a href="gallery.html">***** ***** ****</a></li>
                                        <li><a href="gallery.html">***** ***** ****</a></li>
                                    </ul>
                                <div class="dropdown-btn"></div></li>
                                <li><Link to="/Contact-Us">Contact Us</Link></li>
                                <li><Link to="/Resources">Resources</Link></li>
                            </ul>    
                        </div>
                        
                    
                </nav>
            </div>
        </div>
    </div>

  );
}

export default Navbar;
