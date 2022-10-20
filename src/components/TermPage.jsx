import React, {useState} from 'react';
import CourseList from './CourseList'
import TermSelector from './TermSelector'


const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
      selected.includes(item)
      ? selected.filter(x => x !== item)
      : [...selected, item]
    );

    

    // console.log(Object.values(courses).filter(o => o["term"] === selection))
    return (
      <div>
        <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
        <CourseList courses={Object.entries(courses).filter(([k, o]) => o["term"] === selection)} 
                    selected={selected}
                    toggleSelected={toggleSelected} />
        {/* <CourseList courses={Object.values(data).filter(course => course.term === selection)} /> */}
      </div>
    );
}
  
export default TermPage;
