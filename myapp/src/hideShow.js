import { useState } from "react";

function Hideshow(){

    const [data,setData]= useState(true) 

        return (
            <div className="App">
                {
                data ? <h1>hello World</h1>:null
                }
                <button onClick={()=>setData(!data)}>Toggle</button>
            </div>
        )

    

}

export default Hideshow;