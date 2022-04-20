
import {Todoinput} from "./Todoinput"
import { useState } from 'react';
import {Todoitem} from "./Todoitem"
import { nanoid } from "nanoid";
import "./Todo.css"


function Todo() {
    
  const [todolist, setTodolist] = useState([])
  
  const [show, setShow] = useState(true)

    const getdata = (todo) => {
        const payload = {
            title: todo,
            status : false,
            id : nanoid(5),
        }
        // console.log("recived", todo)
        setTodolist([...todolist,payload])
    }
    
    const handlestatus = (id) => {
      console.log("id:", id)
      //find id from todolist
      //toggle status
      //get new array , set it again new todolist
      setTodolist(
        todolist.map((e) => (e.id===id ? {...e, status : !e.status} : e))
      );
    }

    const Deltetodo = (id) => {
      console.log(id)
      setTodolist(
        todolist.filter((e) => (e.id!==id))
      )
    }

    return (
      <div className="todo">
       <Todoinput  getdata = {getdata} />
       {todolist.filter((e)=>(e.status===false)).map((e,i) => {
          return <Todoitem  todo={e} todoindex={i} classdiv={"tododiv"} handlestatus={handlestatus} Deltetodo= {Deltetodo}/>
       })}
        <button className="com_todo" onClick={() => {
          setShow(!show)
        }} >completed todo</button>
        {show ? todolist.filter((e)=>(e.status===true)).map((e,i) => {
          return <Todoitem  todo={e} todoindex={i} classdiv={"com_tododiv"}  handlestatus={handlestatus} Deltetodo= {Deltetodo}/>
       }) : null}
      </div>
    );
} 
// todolist.filter((e) => (e.status === false))
  
  export {Todo};