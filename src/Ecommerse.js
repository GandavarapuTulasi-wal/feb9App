import { useState } from 'react'
function Ecommerse() {
    let [todos, setTodos] = useState([])
    const addProduct=(event)=>{
        event.preventDefault();
        let todoObject={
            name:event.target.name.value,
            description:event.target.description.value,
            price:event.target.price.value,
            color:event.target.color.value,
            date:event.target.date.value,
        }
        let newTodos=[...todos,todoObject];
        setTodos(newTodos)
        event.target.name.value=""
        event.target.description.value=""
        event.target.description.value=""
        event.target.color.value=""
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
            <h1>Ecommerse App</h1>
            <form onSubmit={addProduct}>
                <input type="text" name="name" placeholder="Enter Product Name" className="todo-user-input"/><br/>
                <textarea rows="3" cols="24" name="description" className="todo-user-input" placeholder="Enter Description"></textarea><br/>
                <input type="number" name="price" placeholder="Enter Price" className="todo-user-input"/><br/>
                Color : <input type="color" name="color" placeholder="Enter Product Color" className="color"/><br/>
                <input type="date" name="date" placeholder="Enter Expiry Date" className="todo-user-input"/><br/>
                <button className="add">Add</button>

            </form>
            <div className="container">
            <div className="box">
            {todos.map((val, index) => (
                <div className="Border box">
                <p>Product name: {val.name}</p>
                <p>Description: {val.description}</p>
                <p>Price: ${val.price}</p>
                <p>Color : {val.color}</p>
                <p>Expiry Date:{val.date}</p>
                <button className="delete" onClick={()=>{deleteTodo(index)}}>Delete</button>
                </div>
            ))}
        </div>
        </div>

        </div>
    )

}
export default Ecommerse