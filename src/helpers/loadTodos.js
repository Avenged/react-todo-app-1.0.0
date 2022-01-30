import { db } from '../firebase/firebase-config';

export const loadTodos = async (uid) => {

    const todosSnap = await db.collection(`${ uid }/todos/todos`).get();
    const todos = [];

    todosSnap.forEach( snapHijo => {
        todos.push({
            id: snapHijo.id,
            ...snapHijo.data()
        });
    });

    // const todos = [{
    //         id: 0,
    //         title: 'Hacer ejercicio',
    //         description: 'Recordar hacer ejercicio',
    //         done: false,  
    //     }, {
    //         id: 1,
    //         title: 'Darle comida al perro',
    //         description: 'Recordar darle comida al perro',
    //         done: false,  
    //     }, {
    //         id: 2,
    //         title: 'Darle comida al gato',
    //         description: 'Recordar darle comida al gato',
    //         done: false,  
    //     }, {
    //         id: 3,
    //         title: 'Comprar comida',
    //         description: 'Comprar comida',
    //         done: false,  
    //     }, {
    //         id: 4,
    //         title: 'Salir a correr',
    //         description: 'Salir a trotar un rato',
    //         done: false,  
    //     }, {
    //         id: 5,
    //         title: 'Hacer cafe',
    //         description: 'Colar cafe',
    //         done: false,  
    //     },
    // ];
    
    return todos;
}