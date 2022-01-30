import { types } from '../types/types';

const initialState = {
    show: false
}

export const modalsReducer = (state = initialState, action) => {
    switch (action.type) {      
        case types.modalsShow:
            return {
                ...state,
                show: true,
            }
        case types.modalsHide:
            return {
                ...state,
                show: false,
            }
        default:
            return state;
    }
}