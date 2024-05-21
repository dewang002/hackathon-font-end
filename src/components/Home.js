import React from 'react'
import HeroComponent from './utils/HeroComponent'
import AboutContent from './utils/AboutContent'
import Content from './utils/Content'
import VisionContent from './utils/VisionContent'
import Eyes from './utils/Eyes'
function Home() {
  return (
    <div className='bg-black overflow-x-hidden'>
      <HeroComponent />
      <Content />
      <AboutContent />
      <VisionContent />
      <Eyes />
    </div>
  )
}

export default Home
