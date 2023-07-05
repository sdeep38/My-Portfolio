import React, { useState } from 'react'
import projectThumbnail from '../images/profile-img-custom.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import reactjsLogo from '../images/reactjs.png'
import nodejsLogo from '../images/nodejs.png'
import cppLogo from '../images/cpp.png'
import djLogo from '../images/django.png'

export default function Skills() {
    const [sliderRef, setSliderRef] = useState(null)

    const skillSet = [
        {
            label: 'HTML',
            logo: htmlLogo,
            desc: 'Use this primarily to give a basic structure to website',
        },
        {
            label: 'CSS',
            logo: cssLogo,
            desc: 'Main tool to design and beautify the elements of the webpage',
        },
        {
            label: 'React JS',
            logo: reactjsLogo,
            desc: 'Among the new frontend technologies that I am currently exploring. The current website is coded using this library.',
        },
        {
            label: 'Node JS',
            logo: nodejsLogo,
            desc: 'Beginner level proficiency, the second most backend framework learned after Django. Still exploring to learn more.',
        },
        {
            label: 'Django',
            logo: djLogo,
            desc: 'The first backend web framework that I learned while I was in senior secondary standard. Still learning to improve.',
        },
        {
            label: 'C++',
            logo: cppLogo,
            desc: 'Proficient and mostly used language while solving problems related to data structures and algorithms.',
        },

    ]


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1221,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true
                }
            }
        ]
    };

    return (
        <section className='skills-section' id='skills'>
            <div className="custom-container">
                <div className="main-content  custom-width">

                    <div className="section-header">
                        <h4 className='subtitle__rounded'><i className="fa fa-tasks"></i> skills</h4>
                        <h1>My Technical <span className="name__highlight">Strengths</span></h1>
                    </div>

                    <p className="intro-text">Languages and frameworks learnt</p>

                    <div className="skill-slider-wrapper">
                        <div className="controls">
                            <button className='slider-btn' onClick={sliderRef?.slickPrev}>
                                <span className="fa fa-angle-left"></span>
                            </button>
                            <button className='slider-btn' onClick={sliderRef?.slickNext}>
                                <span className="fa fa-angle-right"></span>
                            </button>
                        </div>


                        <Slider ref={setSliderRef} {...settings} className='all-skills-carousel'>
                            {skillSet.map((item, index) => {
                                return <div className='skill-item-outer' key={index}>
                                    <div className="skill-item-inner">
                                        <img className='item-logo' src={item.logo} alt={item.label} />
                                        <h2 className="item-title">{item.label}</h2>
                                        <p className="desc">{item.desc}</p>
                                    </div>

                                </div>
                            })}
                        </Slider>
                    </div>

                </div>
            </div>
        </section >
    )
}

