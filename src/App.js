import "./App.css";
import Results from "./components/Results";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Results className="results"></Results>
        <Summary className="summary"></Summary>
      </div>
    </div>
  );
}

export default App;
