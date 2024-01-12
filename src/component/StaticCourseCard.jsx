

import React from 'react'
import '../style/StaticCourseCard.css'
import image from '../assets/headerImg.jpg'
import REACT from '../assets/react.jpg';
import { FaArrowAltCircleRight } from "react-icons/fa"; 

export const StaticCourseCard = () => {
  return (
    <div className='stCourse'>
      <h1 className='h1 col-md-8 mx-auto text-center'>Courses</h1>
<section class="articles">

  <article>
    <div class="article-wrapper">
      <figure>
        <img src={REACT} alt="" />
      </figure>
      <div class="article-body">
        <h2>Professional Cources</h2>
        <p>
        Information technology as a course deals with computer systems and their functions.  
        </p>
        <a href={`/professional`} class="btn btn-primary">More Details</a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div class="article-body">
        <h2>Academic Cources</h2>
        <p>
        Academic Cources like C, C++, java, SQl, and many more subjects .
        </p>
        <a  href={`/academic`} class="btn btn-primary">More Details</a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper" style={{height:"100%"}}>
      
      <div class="article-body"  style={{height:"100%",display:"grid"}}>
       
        <a className="butt" href='/courses'><FaArrowAltCircleRight size={40} /><p style={{fontSize:"30px"}}>ALL COURSES</p></a>
 
      </div>
    </div>
  </article>
</section>

    </div>
  )
}

