import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import { hideEditToDoModal } from '../../actions/editTodoModal';
import { startSaveNote } from '../../actions/todos';

const initialState = {
    id: '',
    title: '',
    description: '',
    done: false,
}

export const EditToDoModal = () => {

    const dispatch = useDispatch();

    const { show, toDo } = useSelector(state => state.editToDoModal);
    const [ formValues, handleInputChange, reset ] = useForm(toDo || initialState);
    const { id, title, description, done } = formValues;

    const activeId = useRef(id);

    useEffect(() => {  
        if (toDo && toDo.id !== activeId.current) {
            reset(toDo);
            activeId.current = toDo.id;
        }
    }, [toDo, reset])

    const handleClose = () => {
        dispatch(hideEditToDoModal());
    }

    const handleSave = () => {
        dispatch(hideEditToDoModal());
        dispatch(startSaveNote(formValues));
    }

    return (
        <>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                <Modal.Title>Edit ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 display-none">
                            <Form.Label>Id</Form.Label>
                            <Form.Control 
                                disabled={ true }
                                type="text" 
                                name='id'
                                value={ id } 
                                onChange={ handleInputChange } />
                        </Form.Group>

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
                <Button variant="success" onClick={ handleSave }>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
