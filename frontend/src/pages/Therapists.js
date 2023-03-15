import React from 'react'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'
import Expert from '../component/Expert'

function Therapists() {
  const name = "Therapists"
  return (
    
    <div>
      <TopTitle title={name}/>
      <Index title={name}/>
      <div style={{ height: '50px' }}></div>
      
    </div>
  )
}

export default Therapists
/*<Expert />*/