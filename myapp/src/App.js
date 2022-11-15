import React from 'react';
import './App.css';
import FunctionalComponent from './functionalComponent';
import ClassComponent from './classComponent'
import LearnState from './state';
import Learnprop from './props';
import Hideshow from './hideShow';
import Form from './form';
import Login from './formValidation';

function App() {
//     function clicking(){
//       alert("button clicked");
  
//     }
    return (
    <div className="App">
      {/* <h1>Hello World from app.js</h1>
      <button onClick={clicking}>Click Me</button>
     
      <FunctionalComponent/>
      <ClassComponent/>
      <LearnState/>
      <Learnprop name={"himanshu"} email="himanshu@gmail.com" />
      <Learnprop name={"partho"} email="partho@gmail.com" />
      <Learnprop name={"mukesh"} email="mukesh@gmail.com" />
      <Hideshow/> 
      <Form/> */}
      <Login/>
      
     

    </div>
  );
}

export default App;
