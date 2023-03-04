import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div>
         {/* eslint-disable-next-line */}
    <span onClick={()=>window.scroll(0,0)} className='header'>🎬 Entertainment Hub 🎥</span>
 
    </div>
  )
}

export default Header