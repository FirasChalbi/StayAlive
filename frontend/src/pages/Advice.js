import React from 'react'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'
import Madvice from '../component/Madvice'

function Advice() {
  const name = "Advice"

  return (
    <div>
      <TopTitle title={name}/>
      <Index title={name}/>
      <div style={{ height: '50px' }}></div>
      <Madvice />
    </div>
  )
}

export default Advice