const addTodoForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;

};

addTodoForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodoForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addTodoForm.reset();
    }
    
});

// delete todo
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term);

        }).forEach((todo) => {
            todo.classList.add('filtered');
        });

        Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term);

        }).forEach((todo) => {
            todo.classList.remove('filtered');
        });
};

// search todo
search.addEventListener('keyup', e => {
    const term = e.target.value.trim().toLowerCase();
    filterTodos(term);
});