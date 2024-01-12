import './App.css';
import Home from './component/Home'
import {Footer} from './component/Footer'
import { Route ,Routes } from 'react-router-dom';
import  MoreDetails   from './component/MoreDetails';
import CourseCard from './component/CourseCard'
import Academic from './component/Academic';
import Professional from './component/Professional';
import Navbar from './component/Navbar';
import ContactUs from './component/ContactUs';
import { useState } from 'react';

import IMAGES from './component/Images'
import C from './assets/c.jpg';
import CPP from './assets/cpp.jpg';
import HTML from './assets/html.jpg';
import CSS from './assets/css.jpg';
import SPRING from './assets/SPRINGBOOT.jpg';
import NODE from './assets/node.jpg';
import PHP from './assets/php.jpg';
import PYTHON from './assets/python.jpg';
import JS from './assets/js.jpg';
import JAVA from './assets/java.jpg';
import REACT from './assets/react.jpg';
import DBMS from './assets/DBMS.jpg';
import STATISTICS from './assets/STATISTICS.jpg';
import FA from './assets/FA.jpg';
import BM from './assets/BM.jpg';
import RDBMD from './assets/RDBMS.jpg';
import DS from './assets/DS.jpg';
import SE from './assets/SE.jpg';
import BIGDATA from './assets/BIG-DATA.jpg';
import NODEJS from './assets/M-IMG/NODE.jpg';
import ADVANCEPHP from './assets/ADVANCE-PHP.jpg';
import HADOOP from './assets/HADOOP.jpg';
import OOSE from './assets/images (2).jpg';
import MONGODB from './assets/MONGO.jpg';
import ANDROID from './assets/download.jpg';
import DOTNET from './assets/DOT-NET.jpg';
import ANGULAR from './assets/ANGULAR.jpg';
import OS from './assets/OS.jpg';


function App() {

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }


  const data=[
    {
      id: 101,
      title: 'React-Js',
      img: REACT,
      overview: `Foundation for creating web pages. Defines the structure and content of a webpage.',
      long_description: 'React.js, commonly referred to as React, is an open-source JavaScript library used for 
                         building user interfaces or UI components. Developed and maintained by Facebook, React 
                         is particularly well-suited for creating single-page applications where user interfaces 
                         need to be highly dynamic and responsive. It follows a component-based architecture, 
                         allowing developers to build encapsulated and reusable UI components.
                         Explore how to structure content, create links, and utilize tags for various elements. 
                         In "codeN cloud," this course forms the foundation of every webpage.`,
      price: '8000',
      instructor: 'Umar Solanki',
      duration: 5,
      description: 'Frontend',
      course: 'Professional',
      link: '/reactjs',
      poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
      ylink1: 'https://www.youtube.com/embed/videoseries?si=uTUMBiFauMrYb7Oo&amp;list=PLrR3DUB3pznKGdEbgY2ajOA_1VovAqXWC',
      ylink2: 'https://www.youtube.com/embed/Kcd_t_hdZso?si=bcpoyXhDA1vuCoYm'
    },
    {
      id: 102,
      title: 'CSS',
      img: CSS,
      overview: 'Styles and designs the HTML structure. Responsible for the layout and presentation of web pages.',
      long_description: `CSS, or Cascading Style Sheets, is a style sheet language used to describe the 
                         presentation and formatting of a document written in markup languages such as HTML and 
                         XML. CSS enables web developers to control the visual appearance of web pages by 
                         specifying how elements should be styled, positioned, and formatted on the screen.
                         Delve into the art of web design with CSS. Understand how to style HTML elements, 
                         control layout, and create visually appealing websites. In "codeN cloud," 
                         master the skills to make your web pages not only functional but also aesthetically 
                         pleasing.`,
      price: '3000',
      instructor: 'Umar Solanki',
      duration: 5,
      description: 'Frontend',
      course: 'Academic',
      link: '/css',
      poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
      ylink1: 'https://www.youtube.com/embed/videoseries?si=meIwmB_IJr-QDsAW&amp;list=PLrR3DUB3pznIMwdhDcPB0tl65XGFrHqw4',
      ylink2: 'https://www.youtube.com/embed/qFhsQYTEEJ8?si=0uMo0ZsoaQDAKkpm'
    },    
      {
        id: 103,
        title: 'JavaScript',
        img: JS,
        overview: 'Adds interactivity and dynamic behavior to web pages. Often used for client-side scripting in web development.',
        long_description: `JavaScript is a high-level, interpreted programming language that is primarily 
                           used for building dynamic and interactive web pages. It was initially created to 
                           enhance the user experience on web browsers by enabling client-side scripting, 
                           allowing developers to create responsive and interactive elements within web 
                           pages .Unleash the power of JavaScript to bring your web pages to life. 
                           From manipulating the DOM to handling events, this course in "codeN cloud" 
                           covers the essentials of client-side scripting. Gain hands-on experience in
                           building interactive and dynamic user interfaces.`,
        price: '3000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Frontend',
        course: 'Academic',
        link: '/javascript',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=i5K2vx2jwnvHkLNh&amp;list=PLrR3DUB3pznIww-cBniFIFn6crsDSSaG4',
        ylink2: 'https://www.youtube.com/embed/lb7D0abJAqs?si=fqhr8Xe5JTtntQLo'
      },
      {
        id: 104,
        title: 'PHP',
        img: PHP,
        overview: 'Server-side scripting language. Used for web development to create dynamic web pages.',
        long_description: `PHP, which stands for "Hypertext Preprocessor," is a widely used server-side scripting 
                           language designed for web development. PHP is an open-source, general-purpose scripting 
                           language that is embedded within HTML code. It is executed on the server, generating 
                           dynamic content that is then sent to the client's web browser.Enter the realm of 
                           server-side scripting with PHP. Understand how PHP enables dynamic content generation, 
                           interacts with databases, and facilitates seamless integration with web applications. 
                           Acquire the skills to develop robust and dynamic server-side components for your 
                           projects in codeN cloud.`,
        price: '6000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Academic',
        link: '/php',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=J8wor7l4r32vE79M&amp;list=PLrR3DUB3pznLpwIk4deQFEsH6t_bqMuVs',
        ylink2: 'https://www.youtube.com/embed/MYPiJv7YDlk?si=meq3xIs5YM31CvBc'
      },
      {
        id: 105,
        title: 'Spring Boot',
        img: SPRING,
        overview: 'Simplifies the development of Java-based enterprise applications. Framework for building scalable and production-ready applications.',
        long_description: `Spring Boot is an open-source Java-based framework It is designed to simplify the 
                           process of building and deploying production-ready, stand-alone, and web-based applications.
                           Spring Boot builds on the existing Spring Framework and follows the 
                           convention-over-configuration and opinionated defaults to provide a streamlined 
                           development experience. Embark on the journey of Java web development with Spring Boot. 
                           Discover how this framework streamlines the process of building enterprise-level 
                           applications. From RESTful APIs to microservices, gain the expertise to develop 
                           scalable and efficient Java-based solutions in codeN cloud.`,
        price: '10000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/spring-boot',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=tiMAy0e35pQmd_Qy&amp;list=PLrR3DUB3pznJDozWqKWL9VIIx5cUhpOo2',
        ylink2: 'https://www.youtube.com/embed/faa046GOd_E?si=KbimOymlqk65rcpO'
      },
      {
        id: 106,
        title: 'HTML',
        img: HTML,
        overview: 'Foundation for creating web pages. Defines the structure and content of a webpage.',
        long_description: `HTML, which stands for "Hypertext Markup Language," is the standard markup language 
                           used to create and design documents on the World Wide Web. It provides a set of tags 
                           or elements that define the structure and content of a web page. HTML is a crucial 
                           technology in web development and serves as the backbone for creating web pages and 
                           web applications.Dive into the fundamentals of HTML.Explore how to structure content, 
                           create links, and utilize tags for various elements. 
                           In "codeN cloud," this course forms the foundation of every webpage.`,
        price: '4000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Frontend',
        course: 'Academic',
        link: '/html',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=fyL_UAafHxu1GJhH&amp;list=PLrR3DUB3pznK8eBpSbaGdcCv5qrsGlzHM',
        ylink2: 'https://www.youtube.com/embed/bAaYKuJpUg8?si=d17u41xxSj4URJKo'
      },
      {
        id: 107,
        title: 'Java',
        img: JAVA,
        overview: 'Versatile, object-oriented programming language. Widely used for building a variety of applications, including web and mobile.',
        long_description: `Java is a high-level, object-oriented, and versatile programming language .JAVA is 
                           well known for its platform independence and "Write Once, Run Anywhere" 
                           philosophy, Java has become one of the most widely used and influential programming 
                           languages.Master the versatility of Java, a powerful object-oriented programming 
                           language. This course in "codeN cloud" covers everything from basic syntax to 
                           advanced topics such as multithreading, networking, and GUI development. Acquire the 
                           skills to build diverse applications,from desktop to enterprise-level systems.`,
        price: '9000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Academic',
        link: '/java',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=wO0u9FFPM14n2jdN&amp;list=PLrR3DUB3pznIUoeLv_p2IEW_ZJQiv2AZn',
        ylink2: 'https://www.youtube.com/embed/1BBnL2lVcrs?si=fOMxsGmpfolIEfE9'
      },
      {
        id: 108,
        title: 'C++',
        img: CPP,
        overview: 'General-purpose programming language. Known for its efficiency and used in various applications, including systems programming and game development.',
        long_description: `C++ is a general-purpose programming language C++ is known for its efficiency, 
                           flexibility, and support for both procedural and object-oriented programming paradigms. 
                           It has become widely used in various domains, including systems programming, 
                           game development, embedded systems, and high-performance computing.Dive into C++, 
                           a high-performance programming language known for its efficiency and versatility. 
                           Explore object-oriented programming principles, memory management, and the creation 
                           of powerful applications. From system programming to game development, C++ in 
                           "codeN cloud" opens doors to a wide range of possibilities.`,
        price: '6000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Academic',
        link: '/c++',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=ucnlJSpNPshU__zo&amp;list=PLrR3DUB3pznLFM7KQBSgVEeTJXO1NwYbJ',
        ylink2: 'https://www.youtube.com/embed/aXQzV9Dsec8?si=pfiYhVo0FXnxQ7t0'
      },
      {
        id: 109,
        title: 'C',
        img: C,
        overview: 'Procedural programming language. Used for system and application development.',
        long_description: `C is a general-purpose programming language It is one of the most influential and 
                           widely used programming languages, known for its simplicity, efficiency, and 
                           close-to-hardware capabilities. C has had a profound impact on the development of 
                           many other programming languages, including C++, C#, and Objective-C.Explore the 
                           foundational aspects of the C programming language. Understand the principles of 
                           procedural programming, memory management, and data structures. Gain the skills to 
                           develop efficient and reliable software, making C in "codeN cloud" an essential 
                           language for system and application development.`,
        price: '7000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Academic',
        link: '/c',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=1yZvdUhXQxClxDho&amp;list=PLrR3DUB3pznKSaBTTr_WZbmw5TGJ1iDGp',
        ylink2: 'https://www.youtube.com/embed/tD5XOM4rp7o?si=ZnkQbvbZEr1YCADi'
      },
      {
        id: 110,
        title: 'Nodejs',
        img: NODE,
        overview: 'JavaScript runtime for server-side development. Allows building scalable network applications.',
        long_description: `Node.js is an open-source, server-side JavaScript runtime environment that allows 
                          developers to run JavaScript code on the server.The key features of Node.js is its 
                          event-driven, non-blocking I/O model, making it well-suited for building scalable 
                          and high-performance network applications.Harness the capabilities of Node.js 
                          for server-side JavaScript development. Learn how to build scalable and high-performance 
                          network applications. From handling HTTP requests to asynchronous programming, this 
                          course in "codeN cloud" equips you with the skills to leverage JavaScript on the server 
                          side.`,
        price: '8000',
        instructor: 'Umar Solanki',
        duration: 5,
        description: 'Backend',
        course: 'Professional',
        link: '/nodejs',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: '',
        ylink2: ''
      },
      {
        id: 111,
        title: 'Python',
        img: PYTHON,
        overview: 'General-purpose programming language known for its simplicity and readability.',
        long_description: `Python is a high-level, interpreted, and general-purpose programming language known 
                           for its readability, simplicity, and versatility. Python is one of the most popular 
                           programming languages for creating a wide range of applications, including web 
                           development, data science, artificial intelligence, automation, and more.
                           Dive into the world of Python, a versatile and beginner-friendly programming language. 
                           Learn the fundamentals of Python syntax, data structures, and control flow. 
                           From basic scripting to web development and data analysis, Python is your gateway to 
                           a multitude of applications.`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Professional',
        link: '/python',
        poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=RHRWr9p9h_H52N1K&amp;list=PLrR3DUB3pznKbkcgWZnZPULZSBGLbfpui',
        ylink2: 'https://www.youtube.com/embed/ILHswlrSde0?si=8jZuEMwBi2jwEU42',
      },
        {
        id: 112,
        title: 'DBMS',
        img: DBMS,
        overview: 'An interface between the database and its users  provides a systematic data storage and manipulation..',
        long_description: `A Database Management System (DBMS) is software designed to manage, organize, and 
                           facilitate access to databases. It serves as an interface between the database and the end-users or 
                           application programs, providing a systematic way to create, retrieve, update, and manage data. 
                           The primary purpose of a DBMS is to ensure the efficient and secure storage, retrieval, and manipulation 
                           of data in a structured format.Explore how to create databases, and use commands for various entries. 
                           In "codeN cloud," this course forms the foundation of creating and mantaining databases.`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=RLqBeo-Mrpo2IA78&amp;list=PLrR3DUB3pznIOtLYcOP5f5LJ5obmBYCBd',
        ylink2: 'https://www.youtube.com/embed/uDnX0JEY4YQ?si=Tan4c9K_fTjPwJ7M'
        
        },
        {
        id: 113,
        title: 'Statistics',
        img: STATISTICS,
        overview: 'An indispensable tool in the analysis of activities in the field of business, commerce and industry..',
        long_description: `Statistics is a branch of mathematics that involves the collection, analysis, 
                           interpretation, presentation, and organization of data. It provides methods and 
                           techniques for making inferences and drawing conclusions about populations based on 
                           a representative sample of data. Statistics is widely used in various fields, 
                           including science, business, economics, social sciences, medicine, and government, 
                           to summarize and interpret information, identify patterns, and make informed decisions
                           In "codeN cloud," learn this academic cource in a easy and efficient manner.`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=A8mvXhi2yu0ql-DV&amp;list=PLrR3DUB3pznKx234VWwiRKXZ2VHqa46ts',
        ylink2: 'https://www.youtube.com/embed/7FF4yffw_ng?si=mOcw4TrGx5oT-AHw'
        },

        {
        id: 114,
        title: 'Financial Accounting',
        img: FA,
        overview: ' The branch of accounting concerned with the summary, analysis and reporting of financial transactions related to a business.',
        long_description: `Financial accounting is a systematic process of recording, categorizing, and 
                           communicating summaries of the company's financial transactions and performance 
                           to external users, such as creditors, investors, and regulators.  The primary 
                           purpose of financial accounting is to provide relevant, reliable, and understandable 
                           financial information about an entity's performance and financial position. This 
                           information is communicated through financial statements, including the income 
                           statement, balance sheet, and cash flow statement.Learn Accounts in the most simplest 
                           way with effective tips and tricks here at "codeN cloud"`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
     id: 115,
        title: 'Business Mathematics',
        img: BM,
        overview: `Application of mathematical principles and techniques to solve business problems and make informed business decisions',
        long_description: 'Business mathematics involves the application of mathematical principles to solve 
                           business problems, analyze financial data, and make informed decisions in various 
                           aspects of commerce and management.The goal of business mathematics is to provide 
                           quantitative tools and methods that enable individuals in the business world to make
                           sound financial and operational decisions based on a solid mathematical foundation.
                           Get detailed and complete solutions for each problem that will help you excel academically`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
     id: 116,
        title: 'Relational database',
        img: RDBMD,
        overview: ' database management system provides a foundation for querying and analyzing information in a structured manner.',
        long_description: `A relational database is a digital database management system (DBMS) that organizes
                           data into structured tables with rows and columns The relational database model ensures 
                           data integrity, facilitates efficient querying and retrieval of information It is 
                           commonly used to interact with and manage data in relational databasesthis 
                           course in "codeN cloud" equips you with the skills to write statements create and
                           efficiently manage multiple databases`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=n2WtFJBztRlwKQ8Z&amp;list=PLrR3DUB3pznI0IHy31tgmDHv-jo_kxdks',
        ylink2: 'https://www.youtube.com/embed/N-c1w1W2zgs?si=HEgzJW6_w2WTe4Ej'
        },
        {
        id: 117,
        title: 'Data Structure',
        img:DS ,
        overview: 'The fundamental to computer programming in any language works in work on algorithm development and problem analysis.',
        long_description: `A data structure is a representation of the data in the program. A data structure is 
                           a systematic way of organizing and accessing data, and an algorithm is a step- by-step 
                           procedure for performing some task in a specific amount of time. Data structure is 
                           nothing but arrangement of data and their relationship and the allowed operations.
                           Learn data structures like linked lists, stacks, queues, trees, and graphs etc 
                           here at "codeN cloud".` ,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=OuYCtrRaRIvr8XBM&amp;list=PLrR3DUB3pznKj5a93UTidbSQla0h5QcIL',
        ylink2: 'https://www.youtube.com/embed/l-N43WLM6Hs?si=653oLdBjF2fSBsi1'
        },
        {
        id: 118,
        title: 'Software engineering',
        img: SE,
        overview: `The systematic application of engineering principles to the design, development, testing, and maintenance of software systems.',
        long_description: 'software engineering is an engineering branch associated with the development of software 
                           product using well-defined scientific principles, methods andprocedures. The outcome of 
                           software engineering is an efficient and reliable software product.Software engineering 
                           includes various modules diagrams etc for better understanding of a system' "codeN cloud" 
                           will help you understand various concepts related to software engineering as well as 
                           make efficient and correct diagrams `,
        price: '5000', 
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=ch70FDF3xtYopEFY&amp;list=PLrR3DUB3pznITxdMSxScN5OP_BjFw5M_m',
        ylink2: 'https://www.youtube.com/embed/Ug-JY8m573o?si=5eTCZIT618UyWOiH'
        },
        {
        
     id: 119,
        title: 'Angular JS',
        img: ANGULAR,
        overview: `Open-source front-end web application framework designed to simplify the development of dynamic, single-page web applications..',
        long_description: 'AngularJS is a JavaScript-based open-source front-end web application framework 
                           maintained by Google. It facilitates the development of dynamic, single-page web 
                           applications by providing a structured framework for building client-side applications, 
                           enabling features such as two-way data binding, modularization, and dependency injection.
                           AngularJS simplifies the development process and enhances the maintainability of web 
                           applications by promoting a declarative approach to building user interfaces.
                           In "codeN cloud,"master the skills to make your web pages mantainable and dynamic`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Frontend',
        course: 'Professional',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
     id: 120,
        title: 'Big data',
        img: BIGDATA,
        overview: 'Involves the storage, processing, and analysis of massive volumes of structured and unstructured data,.',
        long_description: `Big data refers to extremely large and complex sets of data that cannot be easily 
                           managed, processed, or analyzed with traditional data processing tools Big data often 
                           requires advanced technologies and analytics methods to extract meaningful insights, 
                           patterns, and trends for informed decision-making in various domains such as business, 
                           science, and technology.Get detailed learning and explaination of all concepts covered 
                           in this subject at "codeN cloud,"`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
       id: 121,
        title: 'Operating System',
        img: OS,
        overview: 'OS is system software that serves as an intermediary between computer hardware and the user, providing a set of services and functions.',
        long_description: `An operating system is a software program that serves as an intermediary between 
                           computer hardware and user applications. It provides essential services such as 
                           managing hardware resources, facilitating communication between software and hardware 
                           components, and supporting user interactions.It acts as a crucial layer that enables 
                           efficient and secure utilization of computer resources, allowing multiple applications 
                           to run simultaneously and providing a user-friendly environment for interaction with 
                           the computer.Get complete understanding of the subject with detailed eplaination of 
                           algorithms here at codeN cloud,"`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=PT-EerVz25uHGhsV&amp;list=PLrR3DUB3pznLeH48RBvCjyTK9PzNKhrVv',
        ylink2: 'https://www.youtube.com/embed/3TwiJX0tULw?si=PznuSO0JyhPucVQt'
        },
        {
        id: 122,
        title: 'NODE JS',
        img: NODEJS,
        overview: 'Runtime environment that allows the execution of JavaScript code on the server side, facilitating scalable and event-driven applications.',
        long_description: `Node.js is an open-source, cross-platform runtime environment that executes JavaScript 
                           code outside a web browser. It allows developers to use JavaScript for server-side 
                           scripting, enabling the creation of scalable and high-performance network applications.
                           It well-suited for handling concurrent connections and building real-time applications 
                           like web servers and chat applications.This course in "codeN cloud" equips you with the 
                           skills to leverage Node JS on the server side.`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Professional',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''

        },
        {
     
       id: 123,
        title: 'Advance PHP',
        img: ADVANCEPHP,
        overview: ' advanced & sophisticated techniques, features, and practices within PHP',
        long_description: `The Advanced PHP training course is designed to demonstrate advanced web development concepts 
                           like Object-Orientation in PHP.Advance PHP include a connection with Database, Session 
                           handling, Cookies management. The mail function, Date time, Error Handling these come in 
                           Advance PHP.Acquire the skills to develop robust and dynamic websites with sessions cookies etc 
                           in codeN cloud.`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Academic',
        course: '',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
        id: 124,
        title: 'Hadoop',
        img: HADOOP,
        overview: 'pen-source framework for distributed storage and processing of large-scale data across clusters of commodity hardware.',
        long_description: `Hadoop is an open-source framework designed for the distributed storage and processing 
                           of large sets of data using a cluster of commodity hardware. It is part of the Apache 
                           Software Foundation's projects and provides a scalable, reliable, and cost-effective 
                           solution for handling big data.Hadoop allows organizations to store and process vast 
                           amounts of structured and unstructured data. It is particularly well-suited for tasks 
                           such as batch processing, data warehousing, and large-scale data analysis'Get familiar 
                           with Hadoop at codeN cloud'` ,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
      
        id: 125,
        title: 'OOSE',
        img: OOSE,
        overview: `A computer programming model that organizes software design around data, or objects, rather than functions and logic.',
        long_description: 'Object-Oriented Software Engineering (OOSE) is an approach to software design, 
                           development, and maintenance that emphasizes the use of object-oriented principles 
                           and concepts. It involves the systematic application of engineering principles to 
                           the entire software development life cycle, with a focus on creating modular, 
                           reusable, and maintainable software systems.Have crystal clear understanding of all 
                           concepsts as well as digrams like uml diagram, class diagram ,object diagram etc' 
                           with codeN cloud`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
        id: 126,
        title: 'MongoDB',
        img: MONGODB,
        overview: 'Widely used open-source NoSQL database management system that stores and retrieves data in a flexible, JSON-like format.',
        long_description: `MongoDB is a widely used, open-source NoSQL (Not Only SQL) database management system 
                           that is designed to handle large volumes of unstructured or semi-structured data. 
                           It stores and retrieves data in flexible, JSON-like BSON (Binary JSON) documents 
                           rather than traditional tables and rows used in relational databases. 
                           It provides high performance, scalability, and flexibility for managing and querying 
                           unstructured or semi-structured data. Get your hands on this trending backend 
                           technology at codeN cloud`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Backend',
        course: 'Professional',
        link: '/',
        poster: '',
        ylink1: '',
        ylink2: ''
        },
        {
        id: 127,
        title: 'Android Programming',
        img: ANDROID,
        overview: 'Refers to the development of applications specifically designed to run on the Android operating system..',
        long_description: `Android programming refers to the development of mobile applications specifically for 
                           the Android operating system, which is widely used on smartphones, tablets, smart TVs, 
                           and other devices. It involves creating software applications using the Android 
                           Software Development Kit (SDK) and a programming language'Android programming 
                           involves designing user interfaces, implementing functionality, handling data, 
                           and ensuring compatibility with a wide range of devices. The development process 
                           includes testing on emulators or physical devices, debugging, and optimizing 
                           performance to create robust and user-friendly Android applications update your resume 
                           with this trending language with us here at codeN cloud`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Non-programming',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=A6ujyKVaS5IWfWUz&amp;list=PLrR3DUB3pznI1Wuk1sLU9Oh4a7WvbtC6w',
        ylink2: 'https://www.youtube.com/embed/soTVbEabXgs?si=VLB2tao1uz2CWFBQ'
        },
        {
       id: 128,
        title: 'Dot Net framework',
        img: DOTNET,
        overview: 'Provides a comprehensive set of tools and libraries for building and running applications on Windows environments..',
        long_description: `The .NET Framework is a software development framework developed by Microsoft that 
                           provides a comprehensive and consistent programming model for building Windows
                           applications. It includes a large library of coded solutions to common programming 
                           problems and a runtime environment for executing and managing applications written in 
                           various programming languages. The .NET Framework supports the development and 
                           execution of desktop, web, and mobile applications ASP.NET is used as backend and C# & 
                           VB.NET are used for frontend development.CodeNcloud will help you get 
                           familiar with this latest programming language.`,
        price: '5000',
        instructor: 'Umar Solanki',
        duration: 6,
        description: 'Frontend',
        course: 'Academic',
        link: '/',
        poster: '',
        ylink1: 'https://www.youtube.com/embed/videoseries?si=i9_rXRXpDvobpxRG&amp;list=PLrR3DUB3pznJ8J2lhBd5_DmvAkHtmFN9S',
        ylink2: 'https://www.youtube.com/embed/Dj_kUT-mJS0?si=yxylwOjJuwGGWE_m'    
        },
      
      
];



const head="Courses...";

  return (
    !loading && (
    <div className="App">
        <Navbar/>        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/courses" element={<CourseCard data={data} head={head}/>} />
          <Route path='/moredetails/:id' element={<MoreDetails data={data}/>}></Route> 
          <Route path="/academic" element={<Academic data={data} />} />   
          <Route path="/professional" element={<Professional data={data} />} /> 
          <Route path="/contact" element={<ContactUs/>} />    
             
        </Routes>
        <Footer/>
    </div>
  )
  );
}

export default App;
