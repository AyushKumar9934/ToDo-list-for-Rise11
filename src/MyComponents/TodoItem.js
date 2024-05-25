import React,{useState} from 'react'




export const TodoItem = ({todo, onDelete, OnUpdate}) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);
    const [updatedDesc, setUpdatedDesc] = useState(todo.desc);

    const handleUpdate = () => {
        OnUpdate(todo, updatedTitle, updatedDesc);
        setIsUpdating(false);
    }

    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
           {isUpdating ? (
               <div>
                   <input type="text" placeholder='Newtitle' value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} /><br></br>
                   <input type="text" placeholder='NewDesc' value={updatedDesc} onChange={(e) => setUpdatedDesc(e.target.value)} />
                   <button onClick={handleUpdate}>Submit Update</button>
               </div>
           ) : (
               <button className="btn btn-sm btn-warning mx-3" onClick={()=>{setIsUpdating(true)}}>Update</button>
           )}
        </div>
        <hr/> 
        </>
    )
}