import React, { useState, useEffect } from 'react'

import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    });
    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://ih0.redbubble.net/image.618427277.3222/flat,400x400,075,f.u2.jpg'
        alt='Netflix Logo'
      />
    </div>
  )
}

export default Nav