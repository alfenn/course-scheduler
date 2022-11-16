import CourseList from './CourseList'


const Schedule = ({ selectedCourses, toggleSelected }) => (
  <div>
    {
      selectedCourses.length === 0
      ? <div>
          <h2>The schedule is empty</h2>
          <p>Click on a course to add it to your schedule.</p>
        </div>
      : <div>
          <h2>Your schedule</h2>
          <CourseList termCourses={selectedCourses} toggleSelected={toggleSelected} />
        </div>      
    }
  </div>
);


export default Schedule;
