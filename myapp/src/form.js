import { useState } from "react";

function Form (){
    const [name,setName]= useState("");
    const [tnc,setTnc]= useState(false);
    const [interest,setInterest]= useState("");
    function getFormData(e)
    {
        console.warn(name,tnc,interest)
        e.preventDefault()
    }
    return(
        <div className="App">
            <h1>Form handling in react</h1>
            <form onSubmit={getFormData}>
                <input type={"text"} placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>select options</option>
                    <option>hunks</option>
                    <option>falseLord</option>
                </select><br/><br/>
                <input type={"checkbox"} onChange={(e)=>setTnc(e.target.checked)}/>
                <span>Accept terms and conditions</span>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Form;