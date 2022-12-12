import './Course.css';
import './CourseList.css'
import { Link, NavLink } from 'react-router-dom';

const Course = ({ course, toggleSelected, user, isAdmin }) => {
  const activation = user !== null && isAdmin !== null;
  const cardColor = course.doesOverlap ? 'conflict' : 
    course.isSelected ? 'selected' : ''
  
  return (
    <div  className={`card m-1 p-2 ${cardColor}`}
          onClick={course.doesOverlap ? () => {} : () => toggleSelected(course.id)}
          data-cy='course'>
      <div className='card-body d-flex flex-column'>
        <h5 className='card-title'>{course.term} CS {course.number}</h5>
        <p className='card-text'>{course.title}</p>        
        <div className="mt-auto">
          <hr />
          <p className='card-text'>{course.meets}</p>
          <NavLink to={`/courses/${course.id}/edit`} style={{display: `${!activation ? 'none': ''}`}} end>Edit course info</NavLink>
          {/* <Link to={`/courses/${course.id}/edit`} style={{fontSize: '15px', color: 'gray'}}>Edit course info</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Course;
