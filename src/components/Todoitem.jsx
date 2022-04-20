
import './Todoitem.css';

export const Todoitem = ({todo , classdiv, todoindex, handlestatus, Deltetodo}) => {

    return (
        <div className= {`${classdiv}`} >
            <div>{todoindex+1}. {todo.title} </div>
            
            <div  className={`${todo.status}`}>{todo.status ? "Done" : "Not Done"}</div>
            {/* {todo.title} {todo.status ? "Done" : "Not Done"} */}
            <div className='toggle_delete'>
            <button className='button' onClick={() => {
                Deltetodo(todo.id)
            }}>Delete</button>
            <button className='button' onClick={()=>{
                handlestatus(todo.id)
                }}>Toggle</button>
            </div>
        </div>
        
        // className="com_tododiv"

    )
}


