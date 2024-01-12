import React from 'react';
import CourseCard from './CourseCard';

const Academic = ({ data }) => {
  const academicCourses = data.filter(course => course.course === 'Academic');
    const head="Academic Courses"
  return (
    <div>
      <CourseCard data={academicCourses} head={head} />
    </div>
  );
};

export default Academic;
