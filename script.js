let button = document.querySelector("#button")
let buttonDelete = document.querySelector("#buttonDelete")
let windows = document.querySelector(".window")
let input = document.querySelector("#inputText")
let inputDescription = document.querySelector("#inputDescription")
let inputbutton = document.querySelector("#inputButton")
let mainblock = document.querySelector("#mainblock")

let task = JSON.parse(localStorage.getItem("task"))|| []

button.addEventListener('click',()=>{
    windows.classList.toggle('active')
})

buttonDelete.addEventListener('click',()=>{
    localStorage.clear()
    location.reload()
})

task.forEach(element => {

    let text = document.createElement('h1')
    text.textContent = element.title

    let description = document.createElement('h3')
    description.textContent = element.description

    mainblock.appendChild(text)
    mainblock.appendChild(description)

    buttonDelTask = document.createElement('button')
    buttonDelTask.textContent = 'Удалить'
    mainblock.appendChild(buttonDelTask)

    buttonDelTask.addEventListener('click',()=>{
        task = task.filter(item => item.title !== element.title) 
        localStorage.setItem('task',JSON.stringify(task))
        location.reload()
    })
});

inputbutton.addEventListener('click',()=>{
    if (!task.some(t => t.title === input.value.trim())){
        let newTasks = {
            title: input.value,
            description: inputDescription.value
        }
        task.push(newTasks)
        localStorage.setItem('task',JSON.stringify(task))
        location.reload()
    }
})
