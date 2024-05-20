import React from 'react'
import Nav from './Nav'
import HeroComponent from './HeroComponent'
import Content from './Content'
function Home() {
  return (
    <div className='bg-[#000000] mx-auto text-white h-[100vh] w-full overflow-x-hidden'>
      <Nav />
      <HeroComponent />
      <Content />
    </div>
  )
}

export default Home
