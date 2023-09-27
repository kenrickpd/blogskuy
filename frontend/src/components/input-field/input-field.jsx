import React from "react"
import PropTypes from 'prop-types'

function InputField( {children, inputType, className }){
    return(
        <div className={ `${className}`}>
            <p className="text-base md:text-xl lg:text-2xl xl:text-2xl ">{children}</p>
            <input type={`${inputType}`} className="bg-[#C4C4C4] rounded-md w-[300px] h-[36px] md:w-[500px] md:h-[36px] lg:w-[600px] lg:h-[48px] xl:w-[600px] xl:h-[48px]"  />
        </div>
    )
}

InputField.propTypes = {
    children: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default InputField