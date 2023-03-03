import React from 'react'
import SecondSection from '../component/SecondSection'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'

function AboutUs() {
  const name = "About Us"
  return (
    <div>
    <TopTitle title={name}/>
    <Index title={name}/>
    <div style={{ height: '50px' }}></div>
    <SecondSection />
    </div>
  )
}

export default AboutUs