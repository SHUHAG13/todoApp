import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import NewTodo from './NewTodo';

const Home = () => {
    const [todos, setTodos] = useState([]);

    // Function to add a new todo
    const handleTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), ...todo }]);
    };

    // Function to delete a todo
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-base-200 p-6">
            <div className="card w-full max-w-lg shadow-xl bg-base-100 p-6">
                <h1 className="text-3xl font-bold text-center text-primary mb-4">ToDo App</h1>
                <NewTodo onAddTodo={handleTodo} />
                <Todos passTodos={todos} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Home;
