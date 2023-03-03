import React from 'react'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'

function ContactUs() {
    const name = "Contact Us"
  return (
    
    <div>
      <TopTitle title={name}/>
      <Index title={name}/>
      <div style={{ height: '50px' }}></div>
    </div>
  )
}

export default ContactUs