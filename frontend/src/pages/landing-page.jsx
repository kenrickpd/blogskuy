import React from 'react'
import sally from '../assets/saly.png'
import NavigationBar from '../components/navigation-bar/navigation-bar'

export default function LandingPage() {
  return (
    <div>
      <NavigationBar />
      <div className="block lg:flex lg:flex-row-reverse xl:flex xl:flex-row-reverse  items-center justify-between px-16">
        <img src={sally} alt="saly" width={500} height={500} />
        <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <p>
            no <span className="font-bold">blog</span>
          </p>
          <p>
            no <span className="text-[#FFB800]">skuy</span>
          </p>
        </div>
      </div>
    </div>
  )
}
