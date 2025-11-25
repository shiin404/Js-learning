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
});

inputbutton.addEventListener('click',()=>{
    if (!task.some(t => t.title === input.value.trim())){

        let text = document.createElement('h1')
        text.textContent = input.value

        let description = document.createElement('h3')
        description.textContent = inputDescription.value

        mainblock.appendChild(text)
        mainblock.appendChild(description)

        let newTasks = {
            title: input.value,
            description: inputDescription.value
        }
        task.push(newTasks)
        localStorage.setItem('task',JSON.stringify(task))
    }
})
