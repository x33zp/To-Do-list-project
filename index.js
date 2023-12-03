// let tasks = []
const inputEl = document.querySelector('input')
const addBtn = document.querySelector('.add')
const deleteBtn = document.querySelector('.clear')
const ul = document.querySelector('ul')

let tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || []

const updateListAndStorage = (task) => {
    ul.innerHTML = '';

    for (i = 0; i < task.length; i++) {
        const newTask = document.createElement('li')
        newTask.textContent = task[i]

        ul.append(newTask)
    }
    localStorage.setItem('tasks', JSON.stringify(newTask))
}

if (tasksFromLocalStorage) {
    updateListAndStorage(tasksFromLocalStorage)
}

addBtn.addEventListener('click', () => {
    const inputValue = inputEl.value.trim()

    if (inputValue !== '') {
        tasksFromLocalStorage.push(inputValue)

        updateListAndStorage(tasksFromLocalStorage)
    }
    clearInput()
})

deleteBtn.addEventListener('click', () => {
    localStorage.clear();
    tasksFromLocalStorage = [];
    updateListAndStorage(tasksFromLocalStorage)
})

const clearInput = () => {
    inputEl.value = ''
}