import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './MyComponents/Login';
import Signup from './MyComponents/Signup';

function App() {

  
  localStorage.setItem("user",JSON.stringify([{email:"ayu123@g.com",pass:"123"}]));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
let initUser;
if(localStorage.getItem("user")===null){
  initUser=[];
}
else{
  initUser=JSON.parse(localStorage.getItem("user"));
  console.log(initUser);
}

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  const [user,setUser]=useState(initUser);
  
    localStorage.setItem("user",JSON.stringify([{email:"ayu123@g.com",pass:"123"}]));
  
  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(user));
  },[user]);

  const checkUser=(email,pass)=>{
    console.log("i am  checking User");
    if(user.length==0){  // change this line
      alert("Sign up");
    }
    else{
      console.log(" the user is ",user);
      let afterfilteruser=user.filter((current)=>{
        return current.email==email;
      })
      if(afterfilteruser.length==0){
        alert("please Enter valid Email or Sign Up ")
      }
      else if(afterfilteruser[0].pass==pass){ 
         setIsLoggedIn(true);
      }
      else{
        alert("please enter valid password");
      }
    }
}
const addUser=(email,pass)=>{
  let person={
    email:email,pass:pass
  }
  setUser([...user,person]);
  console.log("the new array of user is ")
}

  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/login" render={()=>{
            return(
            <>
            {isLoggedIn ? (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            ) : (
              <Login checkUser={checkUser} />
            )}
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/signup">
           <Signup addUser={addUser}/>
          </Route>
        </Switch> 
      <Footer />
     
    </Router>
    </>
  );
}

export default App;
