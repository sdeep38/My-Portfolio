import React from 'react'

export default function Home() {
  return (
    <section className='hero-section' id='home'>
      <div className="custom-container">
        <div className="main-content custom-width">
          <div className="section-header">
            <h4 className='subtitle__rounded'><i className="fa fa-home"></i> introduce</h4>
            <h1>Hello, I'm <span className="name__highlight">Soumyadeep Saha</span></h1>
          </div>
          <p className="intro-text">Welcome to my Portfolio website !</p>
          <a href="#projects" className="go-to-projects fw_500 d-flex align-items-center justify-content-center"> <span>My Projects</span><i className="fa fa-arrow-down"></i> </a>
        </div>
      </div>
    </section>
  )
}
