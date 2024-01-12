import React from 'react'
import {Header} from './Header'
import {Video} from'./Video'
import ContactUs from'./ContactUs'
import {StaticCourseCard} from'./StaticCourseCard'
import Alumini from './Alumini'
// import DemoCard from './DemoCard'

const Home = () => {
  return (
    <div>
      <Video/>
      <Header/>    
      <StaticCourseCard/>     
      <Alumini />  

      <ContactUs/>
    </div>
  )
}

export default Home
