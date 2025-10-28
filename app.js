const formAddTask = document.querySelector('.form-add-task')
const todosContainer = document.querySelector('.todos-container')

const creatTodo = taskName => {
   return `<li class="todo-item">
               <span class="task">${taskName}</span>
               <img src="./images/icons/delete.svg" alt="delete" class="delete">
           </li>`
}

const addTodo = event => {
   event.preventDefault()

   const inputValue = event.target.newtask.value.trim()

   if (inputValue.length) {
      todosContainer.innerHTML += creatTodo(inputValue)
   }

   event.target.reset()
}

const removeTodo = event => {
   event.stopPropagation()

   const clickedElement = event.target
   const isDelete = [...clickedElement.classList].includes('delete')

   if (isDelete) {
      clickedElement.parentElement.remove()
   }   
}

formAddTask.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)