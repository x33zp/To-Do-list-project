let tasks = []
const inputEl = document.querySelector("input")
const addBtn = document.querySelector(".add")
const deleteBtn = document.querySelector(".clear")
const ul = document.querySelector("ul")

const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))

const updateListAndStorage = (task) => {
    ul.innerHTML = '';

    for (i = 0; i < task.length; i++) {
        const newTask = document.createElement('li')
        newTask.textContent = task[i]

        ul.append(newTask)
    }
}

if (tasksFromLocalStorage) {
    tasks = tasksFromLocalStorage
    updateListAndStorage(tasks)
}

addBtn.addEventListener('click', () => {
    let inputValue = inputEl.value

    if (inputValue != '') {
        tasks.push(inputValue)
        localStorage.setItem("tasks", JSON.stringify(tasks))

        updateListAndStorage(tasks)
    }
    clearInput()
})

const clearInput = () => {
    inputEl.value = ""
}