import { types } from '../types/types';

const initialState = {
    toDo: null,
    show: false,
}

export const editToDoModalReducer = (state = initialState, action) => {
    switch (action.type) {      
        case types.editToDoModal__ShowModal:
            return {
                ...state,
                show: true,
                toDo: {
                    ...action.payload,
                }
            }
        case types.editToDoModal__HideModal:
            return {
                ...state,
                show: false,
            }
        default:
            return state;
    }
}