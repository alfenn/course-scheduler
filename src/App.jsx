import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dispatcher from './components/Dispatcher'
import { useDbData } from './utilities/firebase';

const queryClient = new QueryClient();

const App = () => {
  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (data===undefined) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  console.log(data);
  return (
    <QueryClientProvider client={queryClient}>
      <Dispatcher data={data} />
    </QueryClientProvider>        
  );
}

export default App;