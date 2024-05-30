function handlerfunction(event){
    event.preventDefault();

    const expensamt = event.target.expensamt.value;
    const expensdesc = event.target.expensdesc.value;
    const category = event.target.category.value;

    const obj = {expensamt, expensdesc, category};

    localStorage.setItem(expensdesc, JSON.stringify(obj));
    addToList(obj);
    event.target.reset();

}

function addToList(obj){
    const ultag = document.querySelector("ul");
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(obj.expensamt + " - " + obj.expensdesc + " - " + obj.category);
    newLi.appendChild(newLiText);
    ultag.appendChild(newLi);

    const delbtn = document.createElement("input");
    const delbtnText = document.createTextNode("Delete Expense");
    delbtn.setAttribute("value","delete"); 
    delbtn.setAttribute("type","button");
    delbtn.setAttribute("desc",obj.expensdesc);
    delbtn.appendChild(delbtnText);
    delbtn.addEventListener("click",handleDelete);
    newLi.appendChild(delbtn);

    const editbtn = document.createElement("input");
    const editbtnText = document.createTextNode("Edit Expense");
    editbtn.setAttribute("value","edit"); 
    editbtn.setAttribute("type","button");
    editbtn.setAttribute("desc",obj.expensdesc);
    editbtn.appendChild(editbtnText);
    editbtn.addEventListener("click",handleEdit);
    newLi.appendChild(editbtn);

}

function handleDelete(event){
    const listOfItems = document.querySelector("#listofitems");
    if(event.target.value === "delete"){
        const deleteEle =  event.target.parentElement;
        const deleteKey = event.target.getAttribute("desc");
        listOfItems.removeChild(deleteEle);
        localStorage.removeItem(deleteKey);
    }
}

function handleEdit(event){
    const listOfItems = document.querySelector("#listofitems");
    if (event.target.value === 'edit'){
        const deleteKey = event.target.getAttribute("desc");
        const editEle = event.target.parentElement;
        const user = JSON.parse(localStorage.getItem(deleteKey));
        if (user){
            document.querySelector("#expensamt").value = user.expensamt;
            document.querySelector("#expensdesc").value = user.expensdesc;
            document.querySelector("#categoryitems").value = user.category;
            listOfItems.removeChild(editEle);
            localStorage.removeItem(deleteKey);
        }
    }
}