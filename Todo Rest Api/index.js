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
