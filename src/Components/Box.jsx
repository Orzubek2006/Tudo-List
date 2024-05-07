import { useState } from "react";
import "./Box.css"

const Box = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    

    const handleAddTodo = () =>  {
        if (newTodo.trim() !== "") {
            setTodos([...todos, {text:newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }; 
    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    };

    return (
        <div className="box">
            <h1>Todo List</h1>
            <div className="box_1">
            <input className="tex" type="text"  placeholder="Add Text ..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button className="btn" onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input className="butt" type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)} />
                        <span style={{textDecoration: todo.checked ? "line-through" : "none",}}>{todo.text}</span>
                        <button className="but" onClick={() => handleDeleteTodo(index)}><i class='bx bx-trash'></i></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Box;