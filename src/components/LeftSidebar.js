import React from 'react'
import profileImage from '../images/profile-img-custom.jpg'
import resume from '../images/resume.pdf'

export default function LeftSidebar() {

    const socialLinks = [           // provide your social links
        {
            label: 'github',
            icon: 'fab fa-github',
            to: 'https://github.com/sdeep38',                    
        },
        {
            label: 'whatsapp',
            icon: 'fab fa-whatsapp',
            to: '/',
        },
        {
            label: 'linkedin',
            icon: 'fab fa-linkedin',
            to: 'https://www.linkedin.com/in/soumyadeep-saha-548258279/',
        },
        {
            label: 'Instagram',
            icon: 'fab fa-instagram',
            to: '/',
        },
    ]

    const email = 'soumya243@kgpian.iitkgp.ac.in'   //email goes here
    const mylocation = 'Durgapur, West Bengal'    //address goes here

    return (
        <div className='left-profile-bar'>
            <img className='profile-img' src={profileImage} alt="avatar" />
            <h2 className="user-email">{email}</h2>
            <h2 className="user-address"><span className="prefix"></span>{mylocation}</h2>
            <ul className="social list-group d-flex">
                {socialLinks.map((item, index) => {
                    return <li key={index} className="nav-item b0 list-group-item bg0"><a href={item.to} className='social-profile-link'><i className={item.icon}></i></a></li>
                })}

            </ul>
            <a href={resume} target='_blank' rel='noreferrer' className="get-in-touch bg-green rounded_30 d-flex align-items-center justify-content-center fw_500">Resume</a>
        </div>
    )
}
