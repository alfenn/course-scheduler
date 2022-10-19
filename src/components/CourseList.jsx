import Course from './Course'
import './CourseList.css'

const CourseList = ({courses}) => {  
  // courses.map(([]))
  return (
  <div className='course-list'>
    { courses.map((course, index) => <Course key={index} course={course} />) }
    {/* { Object.entries(courses).map(([id, course]) => <Course key={id} course={course} />) } */}
  </div>
)};


export default CourseList;
