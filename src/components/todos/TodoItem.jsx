import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startDeleteting } from '../../actions/todos';
import { showEditToDoModal } from '../../actions/editTodoModal';

export const TodoItem = ({ id, title, description, done }) => {

    const dispatch = useDispatch();

    const handleDeleteToDo = () => {
        dispatch(startDeleteting(id));
    }

    const handleEditToDo = () => {
        dispatch(showEditToDoModal({
            id,
            title,
            description,
            done
        }));
    }

    const onChange = ({ target }) => {

    }

    return (
        <div className='todos__todo-item'>
            <span className='display-none'>{ id }</span>
            <h4>{ title }</h4>
            <p>{ description }</p>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <input disabled={ true } type='checkbox' checked={ done } onChange={ onChange } />
                
                <div>
                    <Button 
                        className='rounded-circle todos__todo-item-button mx-2'
                        variant="primary"
                        onClick={ handleEditToDo }>
                        <FontAwesomeIcon icon={ faEdit } />
                    </Button>
                    <Button 
                        className='rounded-circle todos__todo-item-button'
                        variant="danger"
                        onClick={ handleDeleteToDo }>
                        <FontAwesomeIcon icon={ faTrashAlt } />
                    </Button>
                </div>
            </div>
        </div>
    );
};
