import React, { useState } from 'react'

export default function Navbar({ addClass, showTooltip }) {

  const [tooltip, setTooltip] = useState(false)

  const [hoverActiveLink, setHoverActiveLink] = useState('Home')

  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    {
      label: 'Home',
      icon: 'fa fa-home',
      to: '#home'
    },
    {
      label: 'About',
      icon: 'far fa-user',
      to: '#about'
    },
    {
      label: 'Skills',
      icon: 'fa fa-tasks',
      to: '#skills'
    },
    {
      label: 'Projects',
      icon: 'fa fa-code-branch',
      to: '#projects'
    },
    {
      label: 'Education',
      icon: 'fa fa-user-graduate',
      to: '#education'
    },
    {
      label: 'Contact',
      icon: 'far fa-envelope',
      to: '#contact'
    },
  ]

  return (
    <ul className={"navigation list-group d-flex nav-right" + addClass}>
      {navLinks.map((item, index) => {
        return <li key={index} className="nav-item list-group-item"><a href={item.to} className={activeLink === item.label ? 'active' : ''} onClick={() => setActiveLink(item.label)} onMouseEnter={(e) => { setTooltip(true); setHoverActiveLink(item.label) }} onMouseLeave={() => setTooltip(false)}><span className={(hoverActiveLink === item.label && tooltip && showTooltip) ? 'tooltip-text visible' : 'tooltip-text'} >{item.label}</span><i className={item.icon}></i></a></li>
      })}
    </ul>
  )
}
