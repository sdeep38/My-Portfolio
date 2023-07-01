import React, { useState } from 'react'
import Navbar from './Navbar'
import HamburgerMenuToggle from './HamburgerMenuToggle'

export default function HamburgerMenu() {
  const[showMenu, setShowMenu] = useState(false)
    return (
        <>
            <HamburgerMenuToggle onClick={() => setShowMenu(true)}/>
            <div className={showMenu ? 'responsive-hamburger-menu menu-active' : 'responsive-hamburger-menu'}>
                <div className="hamburger-menu-inner">
                    <div className="overlay"></div>
                    <span className="hide-menu-icon" onClick={() => setShowMenu(false)}><i className='fa fa-circle-xmark'></i></span>
                    <div className="menu-wrapper">
                        <Navbar addClass='hamburger-menu-items' showTooltip={false} />
                    </div>
                </div>
            </div>
        </>

    )
}
