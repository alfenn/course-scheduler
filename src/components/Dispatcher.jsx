import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useJsonQuery } from '../utilities/fetch';
import Planner from './Planner';
import CourseEditForm from './CourseEditForm';

const Dispatcher = ({ data }) => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Planner data={data} />} />
        <Route path='/courses/:courseId/edit' element={<CourseEditForm data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Dispatcher;