import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

import {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from '../api/apiSlice';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')

    const {
        data: todos, //renaming data to todos
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();
    
    const [addTodo] = useAddTodoMutation(); 
    const [updateTodo] = useUpdateTodoMutation(); 
    const [deleteTodo] = useDeleteTodoMutation(); 


    // console.log(useGetTodosQuery());
    // console.log(deleteTodo(1))
    //     updateTodo,
    //     deleteTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({userId: 1, title: newTodo, completed: false})
        setNewTodo('')
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>


    let content;
        if (isLoading) {
            content = <p>Loading...</p>
        } else if (isSuccess) {
            // content = todos.map(todo => (
            //     <article key={todo.id}>
            //         {todo.id}
            //     </article>
            // ))
            content = todos.map(todo => {
                return(
                    <article key={todo.id}>
                        <div className='todo'>
                            <input id={todo.id} 
                            type='checkbox' checked={todo.completed}
                            onChange={()=> updateTodo({...todo, completed: !todo.completed})}
                            />
                            <label htmlFor={todo.id}>{todo.title}</label>
                        </div>
                        <button className='trash' onClick={()=> deleteTodo({id: todo.id})}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </article>
                )
            })

        } else if(isError) {
            content = <p>{error}</p>
        }
        // console.log(content);

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}
export default TodoList