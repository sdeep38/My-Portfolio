import React from 'react'
import profileImage from '../images/profile-img-custom.jpg'

export default function LeftSidebar() {

    const socialLinks = [           // provide your social links
        {
            label: 'github',
            icon: 'fab fa-github',
            to: '/',                    
        },
        {
            label: 'whatsapp',
            icon: 'fab fa-whatsapp',
            to: '/',
        },
        {
            label: 'linkedin',
            icon: 'fab fa-linkedin',
            to: '/',
        },
        {
            label: 'Instagram',
            icon: 'fab fa-instagram',
            to: '/',
        },
    ]

    const email = 'example@gmail.com'   //your email goes here
    const location = 'Durgapur, West Bengal'    //provide your address

    return (
        <div className='left-profile-bar'>
            <img className='profile-img' src={profileImage} alt="avatar" />
            <h2 className="user-email">{email}</h2>
            <h2 className="user-address"><span className="prefix"></span>{location}</h2>
            <ul className="social list-group d-flex">
                {socialLinks.map((item, index) => {
                    return <li key={index} className="nav-item b0 list-group-item bg0"><a href={item.to} className='social-profile-link'><i className={item.icon}></i></a></li>
                })}

            </ul>
            <a href="/" className="get-in-touch">Get in Touch</a>
        </div>
    )
}
