
import React,{useState} from 'react'
import './Login.css'
import { Link } from "react-router-dom";
const Login = ({checkUser}) => {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const submit=(e)=>{
    
        e.preventDefault();
        console.log("we are inside submit ")
        if(!email ||!pass  ){
            alert("please Enter email and password")
        }
        else{
            checkUser(email,pass);
            setEmail("");
            setPass("");
        }
    }

  return (
    <div>

  
        <div className="login-page">
            <div className="form">
              
              <form onSubmit={submit} className="login-form">
                <input id="email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input  id="password" type="password" placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button type="submit" id="login">login</button>
                <p id="error"></p>
                <p className="message">Not registered? <Link  to="/signup">Create an account</Link></p>
              </form>
            </div>
          </div>
        
          {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
     */}
 </div>
  )
}

export default Login





