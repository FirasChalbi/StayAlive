import React from 'react'
import TopTitle from '../component/TopTitle'
import Index from '../component/Index'
import LoginPage from '../component/HomePage/LoginPage'

function Blog() {
  const name = "Blog"
  return (
    
    <div>
      <TopTitle title={name}/>
      <Index title={name}/>
      <div style={{ height: '50px' }}></div>
      <LoginPage />
      
    </div>
  )
}

export default Blog