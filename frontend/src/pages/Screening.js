import React from 'react'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'
import Test from '../component/Test'

function Screening() {
  const name = "Screening"
  return (
    
    <div>
      <TopTitle title={name}/>
      <Index title={name}/>
      <div style={{ height: '50px' }}></div>
      <Test />
    </div>
  )
}

export default Screening