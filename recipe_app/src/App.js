import "./App.css";

//App function component
const App = () => {
  //API keys
  const APP_ID = "2297f343";
  const APP_KEY = "50ce8dfaed3ee54874588ee166e66381";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
  `;

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
