import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import fly from '../image/butterfly.png'
import './ContactForm.css'

function ContactForm() {
  return (
    <section class="contact-form-area">
    <div class="contact-form-img">
        <img src="images/resources/contact-form.jpg" alt="" />
    </div>
    <div class="container1">
        <div class="sec-title">
            <h1>Get Touch With Us</h1>
            <div class="border">
            <img src={fly} alt="fly" height='30px' />
            </div>
            <p style={{textAlign:'left'}}>Stay Alive is a mental health website that aims to provide support and information to help individuals <br/> improve their mental well-being and prevent suicide.</p>  
        </div>
        <div class="row7">
            <div class="col7">
                <div class="quick-contact">
                    <div class="title">
                        <h2>Quick Contact</h2>
                    </div>
                    <ul class="contact-info">
                        <li>
                            <div className="icon-holder">
                                <FaMapMarkerAlt />
                            </div>
                            <div class="text-holder">
                                <h5><span>Address:</span> 121, Park Drive, Varick<br/> Str New York, NY 10012, USA</h5>
                            </div>
                        </li>
                        <li>
                            <div className="icon-holder">
                                <FaPhoneAlt />
                            </div>
                            <div class="text-holder">
                                <h5><span>Phone:</span> (123) 0200 12345 &amp;<br/>1800-45-678-9012</h5>
                            </div>
                        </li>
                        <li>
                            <div className="icon-holder">
                                <FaEnvelope />
                            </div>
                            <div class="text-holder">
                                <h5><span>Email:</span> Mailus@dailySpanz.com</h5>
                            </div>
                        </li>
                        <li>
                            <div className="icon-holder">
                                <FaClock />
                            </div>
                            <div class="text-holder">
                                <h5>Mon-Satday: 9.00am to 18.00pm <br/>Sunday: <span class="closes">Closed</span></h5>
                            </div>
                        </li>
                        
                    </ul>
                </div>
               
            </div>
            
            <div class="col7">
                <div class="contact-form">
                    <form id="contact-form" name="contact_form" class="default-form" action="inc/sendmail.php" method="post" novalidate="novalidate">
                        <div class="row7">
                            <div class="col-md-6">
                                <input type="text" name="form_name" value="" placeholder="Your Name*" required="" aria-required="true" />
                            </div>
                            <div class="col-md-6">
                                <input type="email" name="form_email" value="" placeholder="Your Mail*" required="" aria-required="true" />
                            </div>
                        </div>
                        <div class="row7">
                            <div class="col-md-6">
                                <input type="text" name="form_phone" value="" placeholder="Phone" />
                            </div>
                            <div class="col-md-6">
                                <input type="text" name="form_subject" value="" placeholder="Subject" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <textarea name="form_message" placeholder="Your Message.." required="" aria-required="true"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="" />
                                <button class="thm-btn bgclr-1" type="submit" data-loading-text="Please wait...">send message</button>
                            </div>
                        </div>
                    </form>  
                </div>
            </div>
            
        </div>
    </div>
</section>
  )
}

export default ContactForm