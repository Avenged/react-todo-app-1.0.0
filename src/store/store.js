import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { modalsReducer } from '../reducers/modalsReducer';
import { todosReducer } from '../reducers/todosReducer';
import { uiReducer } from '../reducers/uiReducer';
import { editToDoModalReducer } from '../reducers/editToDoModalReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    todos: todosReducer,
    modals: modalsReducer,
    editToDoModal: editToDoModalReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);