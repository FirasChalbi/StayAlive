import React from 'react'
import logo from '../../image/doc.jpg'
import fly from '../../image/butterfly.png'
import './SecondSection.css'

function SecondSection() {
  return (
    <section class="welcome-area">
    <div class="container1">
        <div class="sec-title">
            <h1>Welcome to Stay Alive</h1>
            <div class="border">
                <img src={fly} alt="fly" height='30px' />
            </div>
            
        </div>
        <div class="row1">
            <div class="col">
                <div class="text-holder">
                    <h4>Stay Alive is a mental health website that aims to provide support <br />and information to help individuals improve their mental well-being <br/> and prevent suicide.</h4>
                    <div class="inner-content">
                        
                        <div class="single-item">
                            <h3>Our Mission</h3>
                            <p>Empower individuals to prioritize their mental health, raise awareness about mental health issues.</p>
                        </div>
                        <div class="single-item border">
                            <h3>Our Vision</h3>
                            <p>Create a world where mental health is treated with the same importance as physical health.</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="read-more-button">
                            <a class="thm-btn bgclr-1" href="index.html">Read More</a>
                        </div>
                        <div class="title">
                            <h2 >Need advice? <span >+999 999 9999</span></h2>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="col">
                <div class="img-holder">
                    <img src={logo} alt="Awesome"  data-wow-delay="200ms" data-wow-duration="1500ms"/>    
                </div>   
            </div>     
        </div>
    </div>
</section>
  )
}

export default SecondSection

