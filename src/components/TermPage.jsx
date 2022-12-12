import React, { useState } from 'react';
import CourseList from './CourseList'
import TermSelector from './TermSelector'
import Modal from './Modal'
import Schedule from './Schedule'
import { hasOverlap } from '../utilities/checkConflicts';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
import { useProfile } from '../utilities/profile';

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);

const AuthButton = ({ user }) => {
  return user ? <SignOutButton /> : <SignInButton />;
};

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermPage = ({ courses }) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  const [selected, setSelected] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  // const [user] = useAuthState();
  const [{user, isAdmin},] = useProfile();
  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  // console.log(courses);

  const toggleSelected = (id) => {
    setSelected(
      selected.includes(id)
        ? selected.filter(selectedCourseId => selectedCourseId !== id)
        : [...selected, id]
    );
  }

  const doesCourseOverlapWtihSelectedCourses = (course, courseId, selectedCourseIds) => {
    return selectedCourseIds.reduce((prev, selectedCourseId) => {
      const selectedCourse = courses[selectedCourseId];
      return (
        (hasOverlap(selectedCourse.meets, course.meets) 
                    && (selectedCourse.term === course.term) 
                    && !selectedCourseIds.includes(courseId)
        ) || prev
      );
    }, false);
  }

  const coursesWithInfo = Object.entries(courses).map(([id, course]) => {
    return ({
      doesOverlap: doesCourseOverlapWtihSelectedCourses(course, id, selected),
      isSelected: selected.includes(id),
      id,
      ...course
    })
  });

  const displayedCourses = coursesWithInfo.filter(course => course.term===selection)
  const selectedCourses = coursesWithInfo.filter(course => course.isSelected===true)  

  return (
    <div>
      <nav className='d-flex justify-content-between'>
        <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
        <div>
          <AuthButton user={user} />
          <button className="btn btn-outline-dark mx-3" onClick={openModal}><i className="bi bi-cart4"></i></button>
        </div>        
      </nav>
      <CourseList termCourses={displayedCourses}
                  selected={selected}
                  toggleSelected={toggleSelected}
                  user={user}
                  isAdmin={isAdmin} />
      <Modal isVisible={isVisible} closeModal={closeModal}>
        <Schedule selectedCourses={selectedCourses} toggleSelected={() => {}} />
      </Modal>
      {/* <CourseList courses={Object.values(data).filter(course => course.term === selection)} /> */}
    </div>
  );
}

export default TermPage;
