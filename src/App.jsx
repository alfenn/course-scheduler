const schedule = {
  title: "CS Courses for 2018-2019"
};

const App = () => {
  const today = new Date();
  const day = today.toLocaleString([], {weekday: 'long'});
  const date = today.toLocaleDateString([], {dateStyle: 'long'})

  return (
    <div>
      <h1>Sample React code</h1>
      
      <p>Today is {day}, {date}.</p>
    </div>
  );
};

export default App;