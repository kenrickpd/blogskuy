import React from 'react'
import sally from '../assets/saly.png'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex w-screen h-12 px-16 py-24 justify-between items-center">
        <div className="flex gap-x-4 lg:gap-x-8 xl:gap-x-12 items-center">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Blog<span className="text-[#FFB800]">skuy </span>
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#C4C4C4]">
            Blog
          </p>
        </div>
        <div>
          <button
            className="border bg-[#FFB800] hover:bg-[#ebaa02] hover:scale-105 duration-100 ease-in-out px-6 py-2 rounded-xl text-sm md:text-base lg:text-xl xl:text-2xl"
            onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
      <div className="block lg:flex lg:flex-row-reverse xl:flex xl:flex-row-reverse items-center justify-between px-16">
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
