import React from 'react'
import MainButtonProps from '@interface/MainButtonProps'

const MainButton = ({children, onClick}: MainButtonProps) => {
  return (
    <button onClick={onClick} className="btn bg-green-500 text-white hover:bg-green-800 text-xl">
        {children}
    </button>
  )
}

export default MainButton