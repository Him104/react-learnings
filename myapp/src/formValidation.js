import { useState } from "react";
import React from "react";

function Login(){
    const [user,setUser]= useState("");
    const [pass,setPass] = useState("");
    const [userErr,setUserErr] = useState(false);
    const [passErr,setPassErr] = useState(false);
    function loginHandle(e)
    {
    if(user.length<3 || pass.length<3)
    {
        alert("values are less than 3 elements")

    }
    else 
    {
        alert("all good :)")
    }
    e.preventDefault()
    }

    function userHandler(e) {
        let item = e.target.value;
        if(item.length<3){
            setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if(item.length<3){
            setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPass(item)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
            <input type={"text"} placeholder="enter userid" onChange={userHandler} />{userErr?<span>User not valid</span>:""}
            <br/><br/>

            <input type={"text"} placeholder="enter password" onChange={passwordHandler}/>{passErr?<span>Password not valid</span>:""}
            <br/><br/>

            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;