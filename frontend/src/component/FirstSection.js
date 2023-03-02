import React from 'react'
import './FirstSection.css'
import arrow from '../image/arrow.png'
import bvideo from '../video/bvideo.mp4'

function FirstSection() {
  return (
    <div className='coloor'>
      <div className='title'>
        <img src={arrow} alt='ss'/>
        
        <div className='hh'>
          <h1>Get your Issues Sorted</h1>
          <p>Stay Alive is a mental health website that aims to provide support
              to help <br />individuals improve their mental
              and prevent suicide.
          </p>
          <div className='tbutton'>
                    <div class="bottom1">
                        <div class="read-more-button">
                            <a class="thm-btn bgclr-1" href="index.html">Read More</a>
                        </div>
                    </div>
                    <div className='sp'></div>
                    <div class="bottom2">
                        <div class="read-more-button">
                            <a class="thm-btn bgclr-2" href="index.html">contact us</a>
                        </div>
                    </div>
              
          </div>    
        </div>
        </div>
        <video className='vid' autoPlay loop muted>
         <source src={bvideo} type="video/mp4" />
        </video>
        <div class="overlay"></div>
        
    </div>
  )
}

export default FirstSection
/*
<div class="video-section">
<img src={arrow} alt='ss'/>
<h2>Section Title</h2>
  <video autoplay loop muted>
  <source src={bvideo} type="video/mp4" />
  </video>
</div>
*/