import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useJsonQuery } from '../utilities/fetch';
import Planner from './Planner';
import CourseEditForm from './CourseEditForm';

const Dispatcher = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');    
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
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