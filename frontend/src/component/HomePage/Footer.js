import React from 'react'
import './Footer.css'
import logo from '../../image/logo2.png'
import arrow from '../../image/arrow.png'

function Footer() {
  return (
    <footer class="footer-area">
    <div class="arrow">
        <img src={arrow} alt="" />
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="footer-logo text-center">
                    <a href="index.html">
                        <img src={logo} alt="Awesome Footer Logo" height={'370px'} />
                    </a>
                </div>
            </div>
        </div>
        <div class="row4">
            <div class="col4">
                <div class="single-footer-widget pd-bottom50">
                    <div class="title">
                        <h3>Quick Contact</h3>
                        <span class="border"></span>
                    </div>
                    <div class="our-info">
                        <p>Stay Alive take the first step towards a better tomorrow and explore our website today.</p>
                    </div>
                    <ul class="footer-contact-info">
                        <li>
                            <div class="icon-holder">
                                <span class="flaticon-location"></span>
                            </div>
                            <div class="text-holder">
                                <h5>Address: *************<br />**************</h5>
                            </div>
                        </li>
                        <li>
                            <div class="icon-holder">
                                <span class="flaticon-technology"></span>
                            </div>
                            <div class="text-holder">
                                <h5>Phone: 99 999 999</h5>
                            </div>
                        </li>
                        <li>
                            <div class="icon-holder">
                                <span class="flaticon-note"></span>
                            </div>
                            <div class="text-holder">
                                <h5>Email: 7amadi@StayAlive.com</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-footer-widget pd-bottom50">
                    <div class="title">
                        <h3>Usefull Links</h3>
                        <span class="border"></span>
                    </div>
                    <ul class="usefull-links fl-lft">
                        <li><a href="az.c">About Us</a></li>
                        <li><a href="az.c">Procedures</a></li>
                        <li><a href="az.c">News &amp; Tips</a></li>
                        <li><a href="az.c">Threrapists</a></li>
                        <li><a href="az.c">Advice</a></li>
                        <li><a href="az.c">Stories</a></li>
                        <li><a href="az.c">FAQ's</a></li>
                        <li><a href="az.c">Contact Us</a></li>
                    </ul>
                    <ul class="usefull-links">
                        <li><a href="az.c">Resourses</a></li>
                        <li><a href="az.c">Get Offers</a></li>
                        <li><a href="az.c">Appointment</a></li>
                        <li><a href="az.c">Certificates</a></li>
                        <li><a href="az.c">Qualifications</a></li>
                        <li><a href="az.c">Private Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg">
                <div class="single-footer-widget clearfix">
                    <div class="title">
                        <h3>Subscribe Us</h3>
                    </div>
                    <div class="newsletter-box">
                        <p>Subscribe to our newsletter!</p>
                        <form class="newsletter-form" action="#">
                            <input placeholder="Email Address" type="text" />
                            <button type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                            <div class="envelope">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer