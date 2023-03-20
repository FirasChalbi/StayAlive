import React from 'react'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'
import ContactForm from '../component/ContactForm'

function ContactUs() {
    const name = "Contact Us"
  return (
    
    <div>
      <TopTitle title={name}/>
      <Index title={name}/>
      <div style={{ height: '50px' }}></div>
      <ContactForm />      
    </div>
  )
}

export default ContactUs

