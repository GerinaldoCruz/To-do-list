const formAddTask = document.querySelector('.form-add-task')
const inputSearchTodo = document.querySelector('.form-search')
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

const isMach = value => /[a-z A-Z 0-9]/.test(value)


formAddTask.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)

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

