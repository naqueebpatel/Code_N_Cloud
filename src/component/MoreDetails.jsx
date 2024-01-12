import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/MoreDetails.css';

const MoreDetails = ({ data }) => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const selectedCourse = data.find((course) => course.id === parseInt(id));
    setCourseDetails(selectedCourse);
  }, [data, id]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  // console.log(courseDetails);
  return (
    <div className="details-background">
      <div className="details-container">
        <img src={courseDetails.img} alt={courseDetails.title} className="details-image" />
        <div className="inner-details-container">
          <h1>{courseDetails.title}</h1>
          <p><strong>Overview:</strong> {courseDetails.overview}</p>
          <p><strong>Price:</strong> {courseDetails.price}</p>
          <p><strong>Instructor:</strong> {courseDetails.instructor}</p>
          <p><strong>Duration:</strong> {courseDetails.duration} weeks</p>
          <p><strong>Description:</strong> {courseDetails.description}</p>
          <p><strong>Course Type:</strong> {courseDetails.course}</p>
        </div>
      </div>
      <p><strong>Detailed Description:</strong>{courseDetails.long_description}</p>
      <div className='yvideo-container'>
        <div className="yvideo">
        <iframe  src={courseDetails.ylink1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          
        </div>
        <div className="yvideo">
        <iframe  src={courseDetails.ylink2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
      </div>
    </div>
  );
};

export default MoreDetails;
