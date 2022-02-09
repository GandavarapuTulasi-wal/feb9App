import { useState } from 'react'
function Comment(props) {
    let [todos, setTodos] = useState([])
    const addTodo=(event)=>{
        event.preventDefault();
        let todoObject={
            reply:event.target.reply.value,
            author:event.target.author.value,
        }
        let newTodos=[...todos,todoObject];
        setTodos(newTodos)
        event.target.reply.value=""
        event.target.author.value=""
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
            <h1>Topic : {props.topic}?</h1>
            <form onSubmit={addTodo}>
                <input type="text" name="reply" placeholder="Enter Reply" className="todo-user-input"/><br/>
                <input type="text" name="author" placeholder="Enter Author name" className="todo-user-input"/><br/>
                
                <button className="add">Add</button>

            </form>
            <div className="container">
            <div className="box">
                <table>
                    <tr>
                        <th>No</th>
                        <th>Reply</th>
                        <th>author</th>
                    </tr>
            {todos.map((val, index) => (
                <tr>
                <td>{index+1}</td>
                <td>{val.reply}</td>
                <td>{val.author}</td>
                </tr>
            ))}
            </table>
        </div>
        </div>

        </div>
    )

}
export default Comment