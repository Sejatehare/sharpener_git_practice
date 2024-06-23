<<<<<<< HEAD
const crud_url = "https://crudcrud.com/api/91e8ee5e2f6542a0997d4498faa718b4/todos";

document.addEventListener("DOMContentLoaded",() => {
    axios
    .get(`${crud_url}`)
    .then((response) => {
        response.data.forEach((obj) =>{
            addTolist(obj);
        });
    })
    .catch((error) => console.log(error))
});


function fomsubmitted(event){
    event.preventDefault();

    const name = event.target.todoName.value;
    const desc = event.target.desc.value;
    let status = false;

    const obj = { name, desc, status};
    axios
    .post(`${crud_url}`,obj)
    .then((response) => {
        addTolist(response.data);
    })
    .catch((error) => console.log(error))
    event.target.reset();
}



function addTolist(obj) {
    const newLi = document.createElement('li');
    newLi.appendChild(
        document.createTextNode(`${obj.name} - ${obj.desc} - `)
    );

    const donebox = document.createElement("input");
    donebox.setAttribute("type","checkbox");
    const labelDone = document.createElement("label");
    labelDone.appendChild(document.createTextNode("DONE -"));
    newLi.appendChild(donebox);
    newLi.appendChild(labelDone);

    const notdonebox = document.createElement("input");
    notdonebox.setAttribute("type","checkbox");
    const labelPend = document.createElement("label");
    labelPend.appendChild(document.createTextNode("PENDING"));
    newLi.appendChild(notdonebox);
    newLi.appendChild(labelPend);

    const pendingList = document.getElementById("pendinglist");
    const donelist = document.getElementById("donelist");

    if (obj.status) {
        donelist.appendChild(newLi);
    }
    else{
        pendingList.appendChild(newLi);
    }

    donebox.addEventListener("change", function(){
        updateTodo(obj);
    });
    notdonebox.addEventListener("change", function(){
        updateTodo(obj);
    });

    checkPendingList(pendingList);

}

function updateTodo (obj){
    axios
        .put(`${crud_url}/${obj._id}`,{
            name: obj.name,
            desc: obj.desc,
            status: !obj.status
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    
}


function checkPendingList(pendingList) {
    const msg = document.createElement('p');
    msg.textContent = "YUPP! No work to complete...";
    msg.id = "msg";

    const msgexist = document.getElementById("msg");

    if (pendingList.getElementsByTagName('li').length === 0) {
        if (!msgexist) {
            pendingList.appendChild(msg);
        }
    } else {
        if (msgexist) {
            msgexist.remove();
        }
    }
}
=======
const cors_proxy = "http://localhost:8080/";
const api_url = "https://crudcrud.com/api/0ca0968f98374ebe979351144a7e0957/todos";

document.addEventListener("DOMContentLoaded", () => {
    axios
    .get(`${cors_proxy}${api_url}`)
    .then((response) => {
        response.data.forEach((obj) => {
            addTodoToList(obj);
        });
    })
    .catch((error) => console.log(error))
});

function formsubmit(event){
    event.preventDefault();

    const todoName = event.target.name.value;
    const desc = event.target.desc.value;
    const status = false;

    const obj = { todoName, desc, status};

    axios
    .post(`${cors_proxy}${api_url}`,obj)
    .then((response) => {
        addTodoToList(response.data)
    })
    .catch((error) => console.log(error))
    event.target.reset();
}

function addTodoToList(obj) {
    const newLi = document.createElement("li");
    newLi.appendChild(
        document.createTextNode(
            `${obj.todoName} - ${obj.desc} - `
        )
    );

    const donebox = document.createElement("input");
    donebox.setAttribute("type","checkbox");
    const labelDone = document.createElement("label");
    labelDone.appendChild(document.createTextNode("DONE  / ."));
    newLi.appendChild(donebox);
    newLi.appendChild(labelDone);

    const notdonebox = document.createElement("input");
    notdonebox.setAttribute("type","checkbox");
    const labelPend = document.createElement("label");
    labelPend.appendChild(document.createTextNode("PENDING"));
    newLi.appendChild(notdonebox);
    newLi.appendChild(labelPend);

    const pendinglist = document.getElementById("pendinglist");
    const donelist = document.getElementById("donelist");

    if (obj.status){
        donelist.appendChild(newLi)
    }
    else{
        pendinglist.appendChild(newLi);
    }

    donebox.addEventListener("click", function() {
        obj.status = true;
        updatetodo(obj,newLi);
    });

    notdonebox.addEventListener("click", function() {
        obj.status = false;
        updatetodo(obj,newLi);
    })
}

function updatetodo (obj, listItem){
    axios
        .put(`${cors_proxy}${api_url}/${obj._id}`,obj)
        .then(() => {
            const donelist = document.getElementById("donelist");
            const pendinglist = document.getElementById("pendinglist");
            if (obj.status) {
                donelist.appendChild(listItem);
                if (pendinglist.contains(listItem)) {
                    pendinglist.removeChild(listItem);
                }
            } else {
                pendinglist.appendChild(listItem);
                if (donelist.contains(listItem)) {
                    donelist.removeChild(listItem);
                }
            }
        })
        .catch((error) => console.log(error));

}
>>>>>>> 441a0e8d3f1271bde81fbd1ff23100d931f7868c
