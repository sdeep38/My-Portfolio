import React, { useState } from 'react'

export default function Navbar() {

  const [tooltip, setTooltip] = useState(false)

  const [hoverActiveLink, setHoverActiveLink] = useState('Home')

  const navLinks = [
    {
      label : 'Home', 
      icon: 'fa fa-home'
    }, 
    {
      label : 'About', 
      icon: 'far fa-user'
    }, 
    {
      label : 'Skills', 
      icon: 'fa fa-tasks'
    }, 
    {
      label : 'Projects', 
      icon: 'fa fa-code-branch'
    }, 
    {
      label : 'Education', 
      icon: 'fa fa-user-graduate'
    }, 
    {
      label : 'Contact', 
      icon: 'far fa-envelope'
    }, 
  ]

  return (
    <div className='navbar-right'>
      <ul className="navigation list-group d-flex">
        {navLinks.map((item, index) => {
          return <li key={index} className="nav-item list-group-item"><a href="/" onMouseEnter={(e) => {setTooltip(true); setHoverActiveLink(item.label)}} onMouseLeave={() => setTooltip(false)}><span className={(hoverActiveLink === item.label && tooltip) ? 'tooltip-text visible' : 'tooltip-text'} >{item.label}</span><i className={item.icon}></i></a></li>
        })}
      </ul>
    </div>
  )
}
