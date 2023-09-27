import React from 'react'
import sally from '../assets/saly.png'
import BlackButton from '../components/button/button'
import InputField from '../components/input-field/input-field'

export default function LoginPage() {
  return (
    <div>
      <div className="flex w-screen h-12 px-16 py-24 justify-center items-center">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Blogskuy Login
        </p>
      </div>
      <div className="block lg:flex xl:flex px-16 lg:space-x-28 xl:space-x-28 justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={sally} width={500} height={500} />
        </div>
        <div className="text-2xl flex justify-center items-center">
          <div className="block space-y-4">
            <InputField inputType="text">Email</InputField>
            <InputField inputType="password">Password</InputField>
            <BlackButton>Login</BlackButton>
          </div>
        </div>
      </div>
    </div>
  )
}
