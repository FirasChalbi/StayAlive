import React from 'react'
import slogan from '../image/slogan.jpg'
import './Slogan.css'


function Slogan() {
    const styles = {
        backgroundImage: `url(${slogan})`,
        backgroundPosition: 'center top',
        backgroundrRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom: '80px',
        paddingTop: '75px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      };
  return (
    <section class="slogan-area" style={styles}>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="inner-content" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h1>You're tired of feeling so stuck and disconnected</h1>
                    <p>You're hitting a breaking point in your life or relationship and need help from someone who gets it. <br />At SA, we can help.</p>
                    <a class="thm-btn3 bgclr-1" href="dd.C">Make an Appointment</a>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Slogan