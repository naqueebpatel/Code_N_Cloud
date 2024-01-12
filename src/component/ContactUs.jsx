// ContactUs.jsx

import "../style/ContactUs.css";
import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
        console.log('Form data: ', formDataObject);
        
        event.target.reset();

        Swal.fire({
            title: `SUCCESSFUL  ${formDataObject.fname}!`,
            text: "Your response has been submitted successfully!",
            icon: "success"
        });
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="contact-heading">CONTACT</h6>
                        <h1 >Get In Touch</h1>
                        <p>We're here to help and answer any Question you might have. We look forward to hearing from you
                            <span><i className="fas fa-smile"></i></span></p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="row g-3 justify-content-center text-center">
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="fname" placeholder="Full Name" required/>
                    </div>
                    <div className="col-md-3">
                        <input type="email" className="form-control" name="email" placeholder="E-mail" required/>
                    </div>
                    <div className="col-md-4">
                        <input type="number" className="form-control" name="contact" placeholder="Contact Number" required/>
                    </div>
                    <div className="col-md-10">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="col-md-10">
                        <textarea name="message" cols="30" rows="5" className="form-control" placeholder="Message" />
                    </div>
                    <div className="col-md-10 d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Contact</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
