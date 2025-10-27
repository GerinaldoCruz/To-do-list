const formAddTask = document.querySelector('.form-add-task')
const todosContainer = document.querySelector('.todos-container')

const creatTodo = taskName => {
   return `<li class="todo-item">
               <span class="task">${taskName}</span>
               <img src="./images/icons/delete.svg" alt="delete"class="trash">
           </li>`
}

formAddTask.addEventListener('submit', event => {
   event.preventDefault()

   const inputValue = event.target.newtask.value.trim()

   if (inputValue.length) {
      todosContainer.innerHTML += creatTodo(inputValue)
   }

   event.target.reset()
})