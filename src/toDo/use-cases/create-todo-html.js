

/**
 * 
 * @param {ToDo} todo 
 */

export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('A TODO object is required');

    const { done, description, id } = todo;
    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
`;

    const liELement = document.createElement('li');
    liELement.innerHTML = html;
    liELement.setAttribute('data-id', id);
    if (todo.done)
        liELement.classList.add('completed')

    return liELement;
}