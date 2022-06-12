import React from 'react'

const Button = ({color, bgColor, size, text, borderRadius, customFunc}) => {
  return (
    <button type='button' onClick={customFunc ? customFunc : ()=> console.log('no custom func') }
    style={{backgroundColor: bgColor, color: color, borderRadius: borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl cursor-pointer`}
    >
      {text}
    </button>
  )
}

export default Button