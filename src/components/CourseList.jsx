import Course from './Course'
import './CourseList.css'

const CourseList = ({courses, selected, toggleSelected}) => {  

  return (
  <div className='course-list'>
    { courses.map(([k, o]) => <Course key={k}
                                      id={k}
                                      course={o} 
                                      selected={selected} 
                                      toggleSelected={toggleSelected} />) }
  </div>
)};


export default CourseList;
