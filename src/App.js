import './App.css';
import Timer from "./Components/Timer"

function App() {

  return (
    <div className="App">
        <Timer starttime={0} endtime={10}></Timer>
    </div>
  );
}

export default App;
