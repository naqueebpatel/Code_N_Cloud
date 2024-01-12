import React from 'react';
import { useState, useEffect } from 'react';

export const Footer = () => {
  
        const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
      
        useEffect(() => {
          // Update the current year when the component mounts
          setCurrentYear(new Date().getFullYear());
        }, []);


    return (
        <div>
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
                <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">CODE N CLOUD</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p>
                                CodenCloud stands out as a premier IT coaching institute, dedicated to nurturing the next generation of IT professionals by offering top-notch education, practical training, and valuable industry connections.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p>
                                    <a href="/home" className="text-white">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">About</a>
                                </p>
                                <p>
                                    <a href="/contact" className="text-white">Contact</a>
                                </p>
                                <p>
                                    <a href="/courses" className="text-white">Courses</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Best Courses</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p>
                                    <a href="/moredetails/101" className="text-white">React Js</a>
                                </p>
                                <p>
                                    <a href="/moredetails/105" className="text-white">Springboot</a>
                                </p>
                                <p>
                                    <a href="/moredetails/107" className="text-white">Java</a>
                                </p>
                                <p>
                                    <a href="/moredetails/103" className="text-white">Java Script</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p><i className="fas fa-home mr-3"></i>104,West Wing Aurora Towers</p>
                                <p><i className="fas fa-envelope mr-3"></i>MG Road,Pune-411001</p>
                                <p><i className="fas fa-phone mr-3"></i>Maharashtra</p>
                                <p><i className="fas fa-print mr-3"></i> + 91 8237307229</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      ©  Copyright:{currentYear} <a className="text-white" href="#">Code-n-Cloud.com</a>
    </div>
            </footer>
        </div>
    );
};