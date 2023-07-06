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
          <br />I'm currently exploring the world of web development. Based on which I developed some <a className='link' href='#projects'>projects</a> to get my hands-on experience.
          <br />Besides, I also love problem-solving. I solve problems in online coding platforms like LeetCode, and HackerRank. Check out my <a className='link' href='#skills'>skills</a> to know more.
          <br />Apart from academics, I am also into extracurricular activities. I love playing sports like football and badminton. I have also been an active member of the National Sports Organization, Football at IIT Kharagpur. I was also a part of the Silver winning Rangoli Team at Radhakrishnan Hall of Residence for the year 2022-23.
          <br />Looking forward to <a className='link' href='#contact'>collaborate</a> and build something new.
          </p>
          
        </div>
      </div>
    </section >
  )
}
