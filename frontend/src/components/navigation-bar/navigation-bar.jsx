import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavigationBar() {
  const navigate = useNavigate()

  return (
    <div className="flex w-screen h-12 px-16 py-24 justify-between items-center">
      <div className="flex gap-x-4 lg:gap-x-8 xl:gap-x-12 items-center">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Blog<span className="text-[#FFB800]">skuy </span>
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#C4C4C4]">Blog</p>
      </div>
      <div>
        <button className="border bg-[#FFB800] hover:bg-[#ebaa02] hover:scale-105 duration-100 ease-in-out px-6 py-2 rounded-xl text-sm md:text-base lg:text-xl xl:text-2xl"
        onClick={() => navigate('/login') }>
          Login
        </button>
      </div>
    </div>
  )
}
