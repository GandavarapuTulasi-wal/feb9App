import { useState } from 'react'
function Comment() {
    let [todos, setTodos] = useState([])
    const addForum=(event)=>{
        event.preventDefault();
        let todoObject={
            title:event.target.title.value,
            body:event.target.body.value,
            author:event.target.author.value,
            date:event.target.date.value,
        }
        let newTodos=[...todos,todoObject];
        setTodos(newTodos)
        event.target.title.value=""
        event.target.body.value=""
        event.target.author.value=""
        event.target.date.value=""
    }
    let deleteTodo=(indexToDelete)=>{
        let newTodos=todos.filter(function(val,index){
            if(indexToDelete==index){
                return false
            }
            return true
        })
        setTodos(newTodos)
    }

    return (
        <div class="card">
            <h1>Comments</h1>
            <form onSubmit={addForum}>
                <input type="text" name="title" placeholder="Enter Comment title" className="todo-user-input"/><br/>
                <textarea rows="3" cols="24" name="body" className="todo-user-input" placeholder="Enter Comment Body"></textarea><br/>
                <input type="text" name="author" placeholder="Enter Author name" className="todo-user-input"/><br/>
                <input type="date" name="date" placeholder="Enter Submission Date" className="todo-user-input"/><br/>
                <button className="add">Add</button>

            </form>
            <div className="container">
            <div className="box">
            {todos.map((val, index) => (
                <div className="Border box">
                <p>Comment Title:{val.title}</p>
                <p>Comment Body:{val.body}</p>
                <p>Author:{val.author}</p>
                <p>Submission Date:{val.date}</p>
                <button className="delete" onClick={()=>{deleteTodo(index)}}>Delete</button>
                </div>
            ))}
        </div>
        </div>

        </div>
    )

}
export default Comment