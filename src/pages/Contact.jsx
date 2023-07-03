import React from 'react'

export default function Contact() {
    const handleContactForm = (e) => {
        e.preventDefault();
        alert('Form is currently disabled')
    }

    const contact = '7865992370'
    return (
        <section className='contact-section' id='contact'>
            <div className="custom-container">
                <div className="main-content  custom-width">

                    <div className="section-header">
                        <h4 className='subtitle__rounded'><i className="far fa-envelope"></i> contact</h4>
                        <h1>Let's Talk <span className="name__highlight">Together</span></h1>
                    </div>

                    <ul className="list-group contact-details">
                        <li className="list-group-item">
                            <i className="fa fa-phone"></i>
                            <span className="text">Mobile : {contact}</span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-location-dot"></i>
                            <span className="text">Location : Kharagpur, West Bengal</span>

                        </li>
                    </ul>

                    <form className="row g-3" id='contact-form' onSubmit={handleContactForm}>
                        <div className="col-md-6">
                            <label htmlFor="inputFullname" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="inputFullname" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputMessage" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="inputMessage" />
                        </div>
                        
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-primary rounded_30 bg-green"><i className="far fa-paper-plane px-1"></i> Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </section >
    )
}
