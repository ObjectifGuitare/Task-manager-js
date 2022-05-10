
// status, name, description, due date
let tasks = [
    {
        status: "upcoming",
        name: "me gratter le dos",
        description: "utiliser mon gratte dos pour me gratter le dos afin de me gratter le dos",
        date: "2022-12-25"
    },
    {
        status: "done",
        name: "me gratter le ventre",
        description: "utiliser mon gratte ventre pour me gratter le ventre afin de me gratter le ventre",
        date: "2022-05-10"
    },
    {
        status: "doing",
        name: "me gratter le menton",
        description: "utiliser mon gratte menton pour me gratter le menton afin de me gratter le menton",
        date: "2024-01-07"
    }
]


function formatDate(unpolishedDate)
{
    let currentDate = new Date();
    let currentEpoch = currentDate.getTime() 
    let futureDate = new Date(unpolishedDate);
    let futureEpoch = futureDate.getTime();
    let days = Math.ceil((futureEpoch - currentEpoch) / (1000 * 60 * 60 * 24));

    if(days < 2)
        return `${days} day left`;
    return `${days} days left`;
}

function displayTasks(arr)
{
    for (let fig of document.querySelectorAll("figure"))
    {
        fig.remove();
    }
    for (const task of arr) {
        let figure = document.createElement("figure");
        let caption = document.createElement("figcaption");
        let h = document.createElement("h3");
        let more = document.createElement("p");
        let dueDate = document.createElement("p");

        figure.appendChild(caption);
        caption.appendChild(h);
        caption.appendChild(more);
        caption.appendChild(dueDate);

        h.innerHTML = task.name;
        more.innerHTML = task.description;
        dueDate.innerHTML = task.date;
        dueDate.innerHTML = formatDate(task.date);
        
        dueDate.setAttribute("class", "taskDate")
        
        if (task.status === "upcoming"){
            document.body.querySelector(".UpcomingProject").appendChild(figure);
        }
        else if (task.status === "done"){
            document.body.querySelector(".DoneProject").appendChild(figure);
        }
        else if (task.status === "doing"){
            document.body.querySelector(".ProgressProject").appendChild(figure);
        }
    }
}

displayTasks(tasks);

function addTask()
{
    let statusInput = document.body.querySelectorAll(".checkbox")
    let nameInput = document.body.querySelector(".nameInput")
    let descriptionInput = document.body.querySelector(".descriptionInput")
    let dateInput = document.body.querySelector(".dateInput")
    let i = 0;
    
    for (const box of statusInput) {
        if (box.checked)
        {
            if (i == 0)
                statusInput = "upcoming";
            if (i == 1)
                statusInput = "doing";
            if (i == 2)
                statusInput = "done";
        }
        i++;
    }
    console.log(statusInput);

    let newTask = {
        status: statusInput,
        name: nameInput.value,
        description: descriptionInput.value,
        date: dateInput.value
    }
    tasks.push(newTask);
    // console.log(tasks)
    displayTasks(tasks);
}

document.body.querySelector(".submitBtn").addEventListener("click", () =>{addTask()});


// function sortTasks()
// {

// }

// document.body.querySelector(".sort").addEventListener("click", sortTasks)


// function filterTasks()
// {
    
// }

// document.body.querySelector(".filter").addEventListener("click", filterTasks)








/*modal*/
const  modalContainer = document.querySelector('.modal-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => trigger.addEventListener('click',toggleModal))


function toggleModal(){
    modalContainer.classList.toggle('active')
}


/*switch*/
// const upcoming = document.querySelector('.Upcoming');
// const progress = document.querySelector('.pregress')

// mouv.addEventListener('click',mouv)
// function change(){
//     let mouv = document.getElementsByClassName('click');
    

// }
