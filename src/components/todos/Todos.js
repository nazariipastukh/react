import {Todo} from './Todo'
import {useState, useEffect} from "react";

export const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(data)
            })
    }, [])

    return (
        <div>
            {todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo}/>
                )
            })}
        </div>
    )
}