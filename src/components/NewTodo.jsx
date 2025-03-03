import React, { useState } from 'react';

const NewTodo = ({ onAddTodo }) => {
    const [todo, setTodo] = useState({ title: "", desc: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todo.title.trim() || !todo.desc.trim()) return; // Prevent empty todos
        onAddTodo(todo);
        setTodo({ title: "", desc: "" });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTodo((oldTodo) => ({ ...oldTodo, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="form-control">
                <label htmlFor="title" className="label">
                    <span className="label-text">Title:</span>
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={todo.title}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter title"
                />
            </div>

            <div className="form-control">
                <label htmlFor="desc" className="label">
                    <span className="label-text">Description:</span>
                </label>
                <textarea
                    id="desc"
                    name="desc"
                    value={todo.desc}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Enter description"
                />
            </div>

            <button type="submit" className="btn btn-primary w-full">Add Todo</button>
        </form>
    );
};

export default NewTodo;
