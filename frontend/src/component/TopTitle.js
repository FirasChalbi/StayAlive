import React from 'react'
import './TopTitle.css'
import arrow from '../image/arrow.png'

function TopTitle(props) {
  return (
    <section class="breadcrumb-area">
        <div className='pos'> 
        <img className='im' src={arrow} alt='ss'/>
	              <div class="breadcrumbs">
	                  <h1>{props.title}</h1>
	              </div>
                  </div>
    </section>
  )
}

export default TopTitle

