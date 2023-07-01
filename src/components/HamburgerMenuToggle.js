import React from 'react'

export default function HamburgerMenuToggle({onClick}) {
  return (
    <span className="hamburger-menu-toggle" onClick={onClick}>
        <i className='fa fa-bars'></i>
    </span>
  )
}
