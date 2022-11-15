import React from "react";
import { useState } from "react";

function LearnState() {
   const [data,setData]=useState(0)
   function updatedData() {
    setData(data+1)
    
   }
        
    return (
        <div className="App">
            <h1>{data}</h1>
            <button onClick={updatedData}>Click to update Data</button>
        </div>
    ) 
    }
export default LearnState;