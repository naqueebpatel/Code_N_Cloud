import React from 'react';
import CourseCard from './CourseCard';

const Professional = ({ data }) => {
  const professionalCourses = data.filter(data => data.course === 'Professional');
  const head="Professional Courses";

  return (
    <div>
      <CourseCard data={professionalCourses} head={head} />
    </div>
  );
};

export default Professional;