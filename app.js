const formAddTask = document.querySelector('.form-add-task')
const inputSearchTodo = document.querySelector('.form-search')
const todosContainer = document.querySelector('.todos-container')

const creatTodo = taskName => {
   return `<li class="todo-item">
               <span class="task">${taskName}</span>
               <img src="./images/icons/delete.svg" alt="delete" class="delete">
           </li>`
}

const addTodo = inputValue => {
   if (inputValue.length) {
      todosContainer.innerHTML += creatTodo(inputValue)
   }
}

const removeTodo = clickedElement => {
   const isDelete = [...clickedElement.classList].includes('delete')
   
   if (isDelete) {
      clickedElement.parentElement.remove()
   }   
}

formAddTask.addEventListener('submit', event => {
   event.preventDefault()
   
   const inputValue = event.target.newtask.value.trim()
   addTodo(inputValue)

   event.target.reset()
})

todosContainer.addEventListener('click', event => {
   event.stopPropagation()

   const clickedElement = event.target

   removeTodo(clickedElement)
})

inputSearchTodo.addEventListener('input', event => {
   const inputValue = event.target.value.toLowerCase().trim()
   const todos = [...todosContainer.children]

   todos.forEach(todo => {
      const lowerCaseTodo = todo.textContent.toLowerCase()
      const includesSearchValue = lowerCaseTodo.trim().includes(inputValue)
      const classListTodo = todo.classList
      
      !includesSearchValue 
         ? classListTodo.add('hidden')
         : classListTodo.remove('hidden')
   })
})

