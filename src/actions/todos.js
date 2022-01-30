import { db } from '../firebase/firebase-config';

import { loadTodos } from "../helpers/loadTodos";
import { types } from '../types/types';
import { HideLoadingModal, showLoadingModal } from './modals';

export const startNewTodo = (toDo) => {
    return async(dispatch, getState) => {
        dispatch(showLoadingModal());
        const { uid } = getState().auth;
        const { id } = await db.collection(`${ uid }/todos/todos`).add(toDo);
        dispatch(addNewTodo({ ...toDo, id }));
        dispatch(HideLoadingModal());
    }
}

export const addNewTodo = (toDo) => ({
    type: types.todosAddNew,
    payload: toDo,
})

export const startLoadingTodos = (uid) => {
    return async(dispatch) => {        
        dispatch(showLoadingModal());
        const todos = await loadTodos(uid);
        dispatch(setTodos(todos));
        dispatch(HideLoadingModal());
    }
}

export const setTodos = (todos) => ({
    type: types.todosLoad,
    payload: todos,
});

export const startDeleteting = (id) => {
    return async(dispatch, getState) => {       
        const uid = getState().auth.uid; 
        dispatch(showLoadingModal());
        await db.doc(`${ uid }/todos/todos/${ id }`).delete();
        dispatch(deleteTodo(id));
        dispatch(HideLoadingModal());
    }
}

export const deleteTodo = (id) => ({
    type: types.todosDelete,
    payload: id
});


export const startSaveNote = (toDo) => {
    return async( dispatch, getState ) => {
        dispatch(showLoadingModal());

        const { uid } = getState().auth;

        const toDoToFirestore = { ...toDo };
        delete toDoToFirestore.id;

        await db.doc(`${ uid }/todos/todos/${ toDo.id }`).update( toDoToFirestore );

        dispatch(refreshToDo(toDo.id, toDoToFirestore));

        dispatch(HideLoadingModal());
    }
}

export const refreshToDo = (id, toDo) => ({
    type: types.todosUpdated,
    payload: {
        id,
        toDo: {
            id,
            ...toDo
        }
    }
});

export const todoLogout = () => ({
    type: types.todosLogoutCleaning
});