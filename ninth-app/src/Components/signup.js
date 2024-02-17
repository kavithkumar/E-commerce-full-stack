import { useState } from "react";

export default function Signup(){
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const CollectData=async (e)=>{
        e.preventDefault();
        let result=await fetch('http://localhost:8081/customer/register',{
            method:'post',
            body: JSON.stringify({username,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result=await result.json;
        localStorage.setItem("customers",JSON.stringify(result))
    }
    return(
        <div className="login-container">
      <form className="login-form">
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">signup</button>
      </form>
    </div>

    )
}