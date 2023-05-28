import React, { useState } from 'react'

export default function Navbar() {

  const [tooltip, setTooltip] = useState(false)

  const [hoverActiveLink, setHoverActiveLink] = useState('Home')

  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    {
      label : 'Home', 
      icon: 'fa fa-home',
      to: '#home'
    }, 
    {
      label : 'About', 
      icon: 'far fa-user',
      to: '#about'
    }, 
    {
      label : 'Skills', 
      icon: 'fa fa-tasks',
      to: '#home'
    }, 
    {
      label : 'Projects', 
      icon: 'fa fa-code-branch',
      to: '#home'
    }, 
    {
      label : 'Education', 
      icon: 'fa fa-user-graduate',
      to: '#home'
    }, 
    {
      label : 'Contact', 
      icon: 'far fa-envelope',
      to: '#home'
    }, 
  ]

  return (
    <div className='navbar-right'>
      <ul className="navigation list-group d-flex">
        {navLinks.map((item, index) => {
          return <li key={index} className="nav-item list-group-item"><a href={item.to} className={activeLink == item.label ? 'active' : ''} onClick={() => setActiveLink(item.label)}  onMouseEnter={(e) => {setTooltip(true); setHoverActiveLink(item.label)}} onMouseLeave={() => setTooltip(false)}><span className={(hoverActiveLink === item.label && tooltip) ? 'tooltip-text visible' : 'tooltip-text'} >{item.label}</span><i className={item.icon}></i></a></li>
        })}
      </ul>
    </div>
  )
}
