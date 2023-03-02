import React from 'react';
import './Navbar.css';
import logo from '../image/logo1.png';

function Navbar() {
  return (
    
    <div class="container">
        <div class="row">
            <div class="col">
                <nav class="main-menu">
                    
                
                        <div class="nav-container nav-left">
                            
                            <ul class="navigation">
                            
                                <li><a href="index.html">Home</a></li>
                                <li class="dropdown current"><a href="about.html">About Us</a>
                                    <ul>
                                        <li><a href="about.html">About Stay Alive</a></li>
                                        <li><a href="testimonials.html">Testimonials</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="appointment.html">Make an Appointment</a></li>
                                    </ul>
                                <div class="dropdown-btn"></div></li>
                                <li><a href="therapists.html">Therapists</a></li>
                                <li><a href="therapists.html">Therapists</a></li>
                            </ul>    
                        </div>
                        <div class="image">
                            <a href="index.html">
                                <img className='lg' src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div class="nav-container nav-right">
                            <ul class="navigation">
                                <li class="dropdown"><a href="blog-default.html">Blog</a>
                                    <ul>
                                        <li><a href="blog-default.html">Blog</a></li>
                                        <li><a href="blog-large.html">Blog</a></li>
                                        <li><a href="blog-single.html">Blog</a></li>
                                    </ul>
                                <div class="dropdown-btn"></div></li>
                                <li class="dropdown"><a href="gallery-grid.html">Advice</a>
                                    <ul>
                                        <li><a href="gallery-grid.html">***** ***** ****</a></li>
                                        <li><a href="gallery-without-grid.html">***** ***** ****</a></li>
                                        <li><a href="gallery-single.html">***** ***** ****</a></li>
                                    </ul>
                                <div class="dropdown-btn"></div></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="therapists.html">resources</a></li>
                            </ul>    
                        </div>
                        
                    
                </nav>
            </div>
        </div>
    </div>

  );
}

export default Navbar;
