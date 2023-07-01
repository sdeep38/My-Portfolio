import React from 'react'
import projectThumbnail from '../images/profile-img-custom.jpg'

export default function Projects() {

    const projectItems = [
        {
            label: 'Portfolio Website',
            thumbnail: projectThumbnail,
            technologies: [
                {
                    platform: "GitHub",
                    linkTo: '/',
                },
                {
                    platform: "Website",
                    linkTo: '/',
                }
            ],
            desc: 'This is a simple portfolio website built using HTML, CSS and React-JS'
        },
        {
            label: 'Room Allocation System',
            thumbnail: projectThumbnail,
            technologies: [
                {
                    platform: "GitHub",
                    linkTo: '/',
                },
                
            ],
            desc: 'This is a simple portfolio website built using HTML, CSS and React-JS'
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
                                            <div className='overlay overlay-desc'>
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
