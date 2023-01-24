import ToDoStore, { Filters } from "../../store/ToDo.store";

let element;
/**
 * 
 * @param {String} elementId 
 */

export const renderPending = (elementId) => {
    if (!element)
        element = document.querySelector(elementId)

    if (!element)
        throw new Error(`Element ${elementId} not found`);

    element.innerHTML = ToDoStore.getToDos(Filters.Pending).length;
}

