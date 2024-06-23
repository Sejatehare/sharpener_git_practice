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