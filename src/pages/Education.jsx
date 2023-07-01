import React from 'react'

export default function Education() {
    const timelineItems = [
        {
            start: 2021,
            end: 2025,
            org: 'Indian Institute of Technology, Kharagpur',
            work: 'BTech Instrumentation Engineering'
        },
        {
            start: 2019,
            end: 2021,
            org: 'Hem Sheela Model School',
            work: 'CBSE Class 12'
        },
        {
            start: 2010,
            end: 2019,
            org: 'Hem Sheela Model School',
            work: 'CBSE Class 10'
        }
    ]
    return (
        <section className='education-section' id='education'>
            <div className="custom-container">
                <div className="main-content  custom-width">

                    <div className="section-header">
                        <h4 className='subtitle__rounded'><i className="fa fa-user-graduate"></i> experience</h4>
                        <h1>Education and <span className="name__highlight">Experience</span></h1>
                    </div>

                    {/* <p className="intro-text">Some of my recent projects...</p> */}

                    <div className="exp-timeline">
                        {timelineItems.map((item, index) => {
                            return <div key={index} className="exp-item">
                                <span className="date">{item.start + ' - ' + item.end}</span>
                                <h2 className="exp-title">{item.work}</h2>
                                <p>{item.org}</p>
                            </div>
                        })}

                    </div>


                </div>
            </div>
        </section >
    )
}
