import Course from './Course'
import './CourseList.css'

const CourseList = ({termCourses, toggleSelected, user, isAdmin}) => {  
  // termCourses.map(course => course.id === 'F211' || course.id === 'F111' ? console.log(course.id) : '');
  // termCourses.map((course) => console.log(course.id));
  return (
    <div className='course-list'>      
      { termCourses.map(course => <Course 
                                    key={course.id}
                                    course={course}
                                    toggleSelected={toggleSelected}
                                    user={user} 
                                    isAdmin={isAdmin} /> ) }
    </div>
  )};

export default CourseList;
