import React from 'react'
import PropTypes from 'prop-types'

function BlackButton({ children, className }) {
  return (
    <button
      className={`block bg-black py-4 rounded-md  w-[300px]  md:w-[500px] lg:w-[600px]  xl:w-[600px]  hover:bg-[#323232] ease-in duration-100 ${className}`}>
      <p className="text-white text-base md:text-xl lg:text-2xl xl:text-2xl text-center">{children}</p>
    </button>
  )
}

BlackButton.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default BlackButton
