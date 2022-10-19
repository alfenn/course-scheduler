import './Course.css';
import './CourseList.css'

const Course = ({course}) => (
    <div className='card m-1 p-2'>        
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title'>{course.term} CS {course.number}</h5>
            <p className='card-text'>{course.title}</p>
            <div className="mt-auto">
                <hr />
                <p className='card-text'>{course.meets}</p>
            </div>            
        </div>        
    </div>
)

export default Course;

