import React from 'react'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'
import Stories from '../component/Stories'

function Resources() {
  const name = "Resources"
  return (
    
    <div>
      <TopTitle title={name}/>
      <Index title={name}/>
      <div style={{ height: '50px' }}></div>
      <Stories />
    </div>
  )
}

export default Resources