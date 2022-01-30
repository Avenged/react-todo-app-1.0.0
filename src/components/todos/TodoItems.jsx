import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoItems = () => {

    const { todos } = useSelector(state => state.todos);
    
    return (
        <div className='todos__todo-items'>
            {
                todos.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        { ...todo }
                    />
                ))
            }
        </div>
    );
};
