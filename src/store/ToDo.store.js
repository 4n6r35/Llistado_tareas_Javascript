
import { ToDo } from "../toDo/models/todo.models"


export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    ToDos: [
        new ToDo('Piedra del alma'),
        new ToDo('Piedra del espacio'),
        new ToDo('Piedra del tiempo'),
        new ToDo('Piedra del poder'),
        new ToDo('Piedra del realidad'),
    ],

    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('InitStore 🍊');
}

const loadStore = () => {
    // console.log(localStorage.getItem('state'));
    if (localStorage.getItem('state')) return;
    const { ToDos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.ToDos = ToDos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

const getToDos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.ToDos];
        case Filters.Completed:
            return state.ToDos.filter(todo => todo.done);
        case Filters.Pending:
            return state.ToDos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addToDo = (description) => {
    if (!description) throw new Error('Description is required');
    state.ToDos.push(new ToDo(description));
    saveStateToLocalStorage();

}


/**
 * 
 * @param {String} todoId 
 */

const toggleToDo = (todoId) => {
    state.ToDos = state.ToDos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });

    saveStateToLocalStorage();
}

const deleteToDo = (todoId) => {
    state.ToDos = state.ToDos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.ToDos = state.ToDos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter.toString();
}

export default {
    addToDo,
    deleteCompleted,
    deleteToDo,
    getCurrentFilter,
    getToDos,
    initStore,
    loadStore,
    setFilter,
    toggleToDo,
}