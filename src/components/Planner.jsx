import Banner from './Banner';
import TermPage from './TermPage';

const Planner = ({ data }) => {  
  return (
    <div className="container">
        <Banner title={data.title} />          
        <TermPage courses={data.courses} />        
    </div>    
  );
}

export default Planner;
