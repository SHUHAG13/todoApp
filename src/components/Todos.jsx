import React from 'react';
import Todo from "./Todo";

const Todos = ({ passTodos, onDelete }) => {
    return (
        <section className="w-full flex flex-col gap-3">
            {passTodos.length > 0 ? (
                passTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onDelete={onDelete} />
                ))
            ) : (
                <p className="text-center text-gray-500">No todos available</p>
            )}
        </section>
    );
};

export default Todos;
