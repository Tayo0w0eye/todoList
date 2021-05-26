const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
        list.innerHTML += html;
};


addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim(); //.trim allows us to remove space before of after text that is entered 
   
    if(todo.length){    //this checks if todo has length, or a user type something in the text box
        generateTemplate(todo);
        addForm.reset(); // reset all the input field in the form.
    }
})


//function that delete todos
list.addEventListener('click', e=>{

    if(e.target.classList.contains('delete')){ //checks if the target element we clicked on contains the class of delete
        e.target.parentElement.remove(); //delete the parent of that element which is the li tag
    }
})


//function that filters todos
const filterTodos = (term)=> {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term)) //includes todos that does NOT contain the term entered.
        .forEach((todo) => todo.classList.add('filtered'));

        Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term)) //includes todos that DOES contain the term entered.
        .forEach((todo) => todo.classList.remove('filtered'));
     
}

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});