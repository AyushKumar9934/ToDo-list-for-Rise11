
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





// import React, { useState } from 'react';

// export const AddTodo = ({ addTodo }) => {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");


//     const submit = (e) => {
//         e.preventDefault();
//         if (!title || !desc) {
//             alert("Title or Description cannot be blank");
//         }
//         else {
//             addTodo(title, desc);
//             setTitle("");
//             setDesc("");
//         }
//     }
//     return (
//         <div className="container my-3">
//             <h3>Add a Todo</h3>
//             <form onSubmit={submit}>
//                 <div className="mb-3">
//                     <label htmlFor="title" className="form-label">Todo Title</label>
//                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="desc" className="form-label">Todo Description</label>
//                     <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
//                 </div>
//                 <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
//             </form>
//         </div>
//     )
// }

