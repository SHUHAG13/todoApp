import React from 'react';

const Todo = ({ todo, onDelete }) => {
    const { title, desc, id } = todo;

    return (
        <article className="card bg-base-100 shadow-md p-4 flex justify-between items-center">
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
            </div>
            <button 
                className="btn btn-error btn-sm"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </article>
    );
};

export default Todo;
