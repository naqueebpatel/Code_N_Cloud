import React, { useState } from "react";
import AluminiCard from "./AluminiCard";

export const AluminiList = () => {
    const [data, setData] = useState([
        { id: 101, sname: "Alice", mssg: "very helpful smd it helped me to clear out my doubts regarding oops concept", cname: "c++", description: "backend" },
        { id: 102, sname: "Ben", mssg: "one of the best platforms ever experienced and learned a lot about frontend opportunities", cname: "css", description: "frontend" },
        { id: 103, sname: "Charles", mssg: "helped me to resolve various algorithms of dsa", cname: "DSA", description: "backend" },
        { id: 104, sname: "Denver", mssg: "productive content about solving queries of sql and validations", cname: "Sql", description: "Database" },
        { id: 105, sname: "Elcid", mssg: "understood about various concepts of frontend frameworks", cname: "React js", description: "frontend" },
        { id: 106, sname: "Francis", mssg: "progressive courses regarding job opportunities", cname: "python", description: "backend" },
        { id: 107, sname: "George", mssg: "accomplished my frontend courses with the help of these courses organized by code n cloud", cname: "css", description: "frontend" },
        { id: 108, sname: "Henry", mssg: "creative way of teaching concepts of java framework", cname: "Springboot", description: "backend" },
        { id: 109, sname: "Indiana", mssg: "appreciate the fact that I have a large amount of knowledge about full-stack development", cname: "reactjs", description: "frontend" }
    ]);
  return (
    <div>
            <AluminiCard data={data}/>
        </div>
  )
}


