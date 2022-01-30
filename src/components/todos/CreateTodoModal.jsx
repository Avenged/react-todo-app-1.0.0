import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import { startNewTodo } from '../../actions/todos';

export const CreateTodoModal = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        title: '',
        description: '',
        done: false,
    });

    const { title, description, done } = values;

    const handleAddNew = () => {
        dispatch(startNewTodo(values));
        reset();
        handleClose();
    }

    return (
        <>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                <Modal.Title>Create A New ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='title'
                                value={ title } 
                                onChange={ handleInputChange } />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='description'
                                value={ description } 
                                onChange={ handleInputChange } />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check 
                                type="checkbox" 
                                name='done'
                                label="Done" 
                                checked={ done }
                                onChange={ handleInputChange } />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={ handleClose }>
                    Close
                </Button>
                <Button variant="success" onClick={ handleAddNew }>
                    Create
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
