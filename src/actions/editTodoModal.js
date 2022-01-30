import { types } from '../types/types';

export const showEditToDoModal = (toDo) => ({
    type: types.editToDoModal__ShowModal,
    payload: toDo,
});

export const hideEditToDoModal = () => ({
    type: types.editToDoModal__HideModal
});