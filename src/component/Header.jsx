import React from "react";
import HeaderImg from "../assets/headerImg.jpg";
import { NavLink } from "react-router-dom";
import "../style/Header.css";
import Swal from "sweetalert2";
import Typical from "react-typical";

export const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Access form data using event.target
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("Form data: ", formDataObject);

    // Reset the form fields
    event.target.reset();

    Swal.fire({
      title: `Good job ${formDataObject.name}!`,
      text: "Your Response has been Submitted Successfully!!!",
      icon: "success",
    });
  };

  return (
    <div>
      <nav className="headerBox">
        <a href={`/moredetails/106`} className="link">
          HTML
        </a>
        <a href={`/moredetails/102`} className="link">
          CSS
        </a>
        <a href={`/moredetails/103`} className="link">
          JS
        </a>
        <a href={`/moredetails/109`} className="link">
          C
        </a>
        <a href={`/moredetails/108`} className="link">
          C++
        </a>
        <a href={`/moredetails/107`} className="link">
          Java
        </a>
        <a href={`/moredetails/111`} className="link">
          Python
        </a>
        <a href={`/moredetails/104`} className="link">
          PHP
        </a>
        <a href={`/moredetails/101`} className="link">
          React Js
        </a>
      </nav>

          <div className="headerMain">
        <div className="headerInfo">
          <div className="form-parent">
            <form
              className="form cc-float-form"
              name="contact-form"
              
              onSubmit={handleSubmit}
            >
              <h2 style={{ color: "black" }}>CONTACT US</h2>
              <h5 style={{ color: "black" }}>
                Book a <span style={{ color: "red" }}>FREE</span> live class
              </h5>
              <p style={{ color: "black" }}></p>
              Name:
              <p type="Name:">
                <input placeholder="Enter your name " required></input>
              </p>
              Email:
              <p type="Email:">
                <input
                  placeholder="Enter your email"
                  type="email"
                  required
                ></input>
              </p>
              Contact No:
              <p type="Contact No:">
                <input placeholder="Enter your number" required></input>
              </p>
              Message:
              <p type="Message:">
                <input placeholder="Enter your msg" required></input>
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: "",
                  marginLeft: "13px",
                  fontWeight: "bold",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                Book Live Class{" "}
              </button>
            </form>
          </div>

          <div className="embut">
            <h1>
              Welcome to <span className="codenColor">Code n Cloud</span>
            </h1>
            <h3>
              Learn{" "}
               {
                <Typical
                  steps={[
                    "DSA",
                    1500,
                    "React-JS",
                    1500,
                    "Node-Js",
                    1500,
                    "C++",
                    1500,
                    "SQL",
                    1500,
                    "Java",
                    1500,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              } 
            </h3>
            <p>
              CodenCloud is a leading IT coaching institute that provides
              comprehensive and industry-relevant training to individuals
              aspiring to build a successful career in the field of Information
              Technology. With a commitment to excellence, CodenCloud offers a
              diverse range of courses and coaching programs designed to empower
              students with the skills and knowledge required in today's dynamic
              IT landscape.
              <p>Your Email</p>
              <form>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                />
                <button className="button-40">GET STARTED</button>
              </form>
            </p>
          </div>
        </div>

        <div className="headerImg">
          <img src={HeaderImg} alt="" className="headerImg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
