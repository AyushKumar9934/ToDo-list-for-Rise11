import React,{useState} from 'react'
import Login from './Login';
import { Link ,useHistory } from "react-router-dom";
const Signup = ({addUser}) => {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const history = useHistory();
    const submit=(e)=>{
    
        e.preventDefault();
        console.log("we are inside submit submit of Signup ")
        if(!email ||!pass  ){
            alert("please Enter email and password")
        }
        else{
          addUser(email,pass);
           
            setEmail("");
            setPass("");
            history.push("/");
        }
    }







  return (
    <div>

  
        <div className="login-page">
            <div className="form">
              
              <form onSubmit={submit} className="login-form">
                <input id="email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input  id="password" type="password" placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button type="submit" id="login">Sign Up</button>
                <p id="error"></p>
                
                <p className="message">Already registered? <Link to="/">Login Now</Link></p>
              </form>
            </div>
          </div>
        
         
 </div>
  )
}

export default Signup