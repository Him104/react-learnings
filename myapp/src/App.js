import './App.css';
import FunctionalComponent from './functionalComponent';
import ClassComponent from './classComponent'

function App() {
    function clicking(){
      alert("button clicked");
  
    }
    return (
    <div className="App">
      <h1>Hello World from app.js</h1>
      <FunctionalComponent/>
      <ClassComponent/>
      <button onClick={clicking}>Click Me</button>
    </div>
  );
}

export default App;
