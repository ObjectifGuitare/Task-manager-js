
// status, name, description, due date
let tasks = [
    {
        status: "upcoming",
        name: "me gratter le dos",
        description: "utiliser mon gratte dos pour me gratter le dos afin de me gratter le dos",
        date: "bite"
    },
    {
        status: "done",
        name: "me gratter le ventre",
        description: "utiliser mon gratte ventre pour me gratter le ventre afin de me gratter le ventre",
        date: "bite"
    },
    {
        status: "doing",
        name: "me gratter le menton",
        description: "utiliser mon gratte menton pour me gratter le menton afin de me gratter le menton",
        date: "bite"
    }
]




function displayTasks(arr)
{
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
        // will have to transform this date in a function
        
        if (task.status === "upcoming"){
            document.body.querySelector(".Upcoming").appendChild(figure);
        }
        else if (task.status === "done"){
            document.body.querySelector(".Done").appendChild(figure);
        }
        else if (task.status === "doing"){
            document.body.querySelector(".Progress").appendChild(figure);
        }
    }
}

displayTasks(tasks);

// function addTask()
// {

// }

// document.body.querySelector(".submit").addEventListener("click", addTask);


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


/*drag and drop*/

