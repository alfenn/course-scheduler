import React, {useState} from 'react';
import CourseList from './CourseList'
import TermSelector from './TermSelector'
import Modal from './Modal'
import Schedule from './Schedule'
import './TermPage.css'


const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const toggleSelected = (item) => setSelected(
      selected.includes(item)
      ? selected.filter(x => x !== item)
      : [...selected, item]
    );    

    // console.log(Object.values(courses).filter(o => o["term"] === selection))
    return (
      <div>
        <nav>
          <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
          <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4"></i></button>
        </nav>        
        <CourseList courses={Object.entries(courses).filter(([k, o]) => o["term"] === selection)} 
                    selected={selected}
                    toggleSelected={toggleSelected} />
        <Modal open={open} close={closeModal}>
          <Schedule courses={Object.entries(courses).filter(([k, o]) => selected.includes(k))} selected={selected} />
        </Modal>
        {/* <CourseList courses={Object.values(data).filter(course => course.term === selection)} /> */}        
      </div>
    );
}
  
export default TermPage;
