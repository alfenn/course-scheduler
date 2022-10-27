import CourseList from './CourseList'


const Schedule = ({ courses, selected }) => (
  <div>
    {
      selected.length === 0
      ? <div>
          <h2>The schedule is empty</h2>
          <p>Click on a course to add it to your schedule.</p>
        </div>
      : <CourseList courses={courses} 
                    selected={selected} />
    }
  </div>
);


export default Schedule;
