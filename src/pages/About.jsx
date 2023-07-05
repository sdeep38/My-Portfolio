import React from 'react'

export default function About() {

  return (
    <section className='about-section' id='about'>
      <div className="custom-container">
        <div className="main-content custom-width">

          <div className="section-header">
            <h4 className='subtitle__rounded'><i className="far fa-user"></i> about</h4>
            <h1>Undergraduate student at <span className="name__highlight">IIT Kharagpur</span></h1>
          </div>

          <p className="intro-text">Currently, I'm a third year undergraduate pursuing my B-Tech major in Electrical Engineering from IIT Kharagpur, 
          with specialization in Instrumentation Engineering. 
          <br />Interested in web development, inclined more towards backend development.</p>
          
        </div>
      </div>
    </section >
  )
}
