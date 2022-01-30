import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AppBar } from '../AppBar';
import { TodoItems } from '../todos/TodoItems';
import { CreateTodoModal } from '../todos/CreateTodoModal';
import { LoadingModal } from '../todos/LoadingModal';
import { EditToDoModal } from '../todos/EditToDoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const HomeScreen = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <EditToDoModal />
            <LoadingModal />
            <AppBar />
            <Button 
                className='rounded-circle todos__todo-item-button buttons__float-button'
                variant='primary'
                onClick={ handleShow } >
                <FontAwesomeIcon icon={ faPlusCircle } />
            </Button>
            <CreateTodoModal show={ show } handleClose={ handleClose } />
            <div 
                style={{
                    width: "100vw",
                    display: 'flex',
                    height: '100vh',
                    justifyContent: 'center',
                    padding: '5rem 1px 1px 1px',
                }}
            >
                <TodoItems />
            </div>
        </>
    );
};
