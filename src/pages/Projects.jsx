import React from 'react'
import projectThumbnail from '../images/profile-img-custom.jpg'
import portfoliothumb from '../images/bgportfolio.png'
import rasthumb from '../images/bgras.png'
import diythumb from '../images/bgdiy.png'

export default function Projects() {

    const projectItems = [
        {
            label: 'Portfolio Website',
            thumbnail: portfoliothumb,
            technologies: [
                {
                    platform: "GitHub",
                    linkTo: 'https://github.com/sdeep38/My-Portfolio',
                },
            ],
            desc: 'This is an e-portfolio which describes me, my technical skills and achievements. The website is developed using HTML, CSS and the one of the modern JS library, ReactJS.'
        },
        {
            label: 'Room Allocation System',
            thumbnail: rasthumb,
            technologies: [
                {
                    platform: "GitHub (Frontend)",
                    linkTo: ' https://github.com/sdeep38/roomAllocationSystem',
                },
                {
                    platform: "GitHub (Backend)",
                    linkTo: 'https://github.com/sdeep38/roomAllocationSystem_backend',
                },
                
            ],
            desc: 'A room allocation system developed using Node JS as backend and ReactJS as frontend. It can be used to allocate rooms to students in various Halls of Residence at IIT Kharagpur. Includes basic user authentication services like Login and Logout.'
        },
        {
            label: 'Smart Dustbin',
            thumbnail: diythumb,
            technologies: [
                {
                    platform: "Report",
                    linkTo: 'https://docs.google.com/presentation/d/1VjrFM2fZ1C6ngFKVnffH8WtlncRUTIwwvFzkv4yrtGc/edit#slide=id.p2',
                },
                {
                    platform: "Demo",
                    linkTo: 'https://www.youtube.com/watch?v=qb8Pmvz6eFQ',
                },
                
            ],
            desc: 'A working model of an automation based garbage bin built in order to minimize the manual work of opening and closing the lid of a bin. This is a part of a DIY Course project. It uses components like Ultrasonic distance sensor and Servo Motor, which are embedded in an Arduino UNO, a programmable circuit board.'
        }
    ]
    return (
        <section className='projects-section' id='projects'>
            <div className="custom-container">
                <div className="main-content  custom-width">

                    <div className="section-header">
                        <h4 className='subtitle__rounded'><i className="fa fa-code-branch"></i> projects</h4>
                        <h1>My <span className="name__highlight">Projects</span></h1>
                    </div>

                    <p className="intro-text">Some of my recent projects...</p>

                    <div className="row all-projects">
                        {projectItems.map((currProject, index) => {
                            return <div key={index} className="col-md-12">
                                <div className="project-item">
                                    <div className="project-item-cover">
                                        <img className='project-thumbnail' src={currProject.thumbnail} alt="" />
                                        <div className='overlay'>
                                            <div className='overlay-desc'>
                                                <span>description : </span>{currProject.desc}
                                                </div>
                                        </div>

                                        <ul className="project-tech list-group">
                                            {currProject.technologies.map((social, index) => {
                                                return <li key={index} className='bg0 b0 list-group-item nopadding'><a href={social.linkTo} className='tech-item'>{social.platform}</a></li>
                                            })}

                                        </ul>
                                    </div>
                                    <a href='/' className="project-title">{currProject.label}</a>
                                </div>

                            </div>
                        })}

                    </div>

                </div>
            </div>
        </section >
    )
}
