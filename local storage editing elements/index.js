function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {
      username,
      email,
      phone
    };

    localStorage.setItem(email, JSON.stringify(obj));
    addUserToList(obj);
    event.target.reset();
}
function addUserToList(user){
    const ultag = document.querySelector("ul");
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(user.username + " - " + user.email + " - " + user.phone);
    newLi.appendChild(newLiText);
    ultag.appendChild(newLi)

    const delButton = document.createElement("input");
    delButton.setAttribute("type","button");
    delButton.setAttribute("value","Delete");
    delButton.setAttribute("dataemail",user.email);
    const delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    delButton.addEventListener('click',handleDelete);
    newLi.appendChild(delButton);

    const editButton = document.createElement("input");
    editButton.setAttribute("type","button");
    editButton.setAttribute("value","Edit");
    editButton.dataset.email = user.email;
    const editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    editButton.addEventListener('click',handleEdit);
    newLi.appendChild(editButton);

}


function handleDelete(event){
    const listOfItems = document.querySelector("#listOfItems");
    
        if(event.target.value === "Delete"){
            const deleteEle = event.target.parentElement;
            const deleteKey = event.target.getAttribute("dataemail");
            console.log(deleteKey);
            listOfItems.removeChild(deleteEle);
            localStorage.removeItem(deleteKey);
            
        }
}

function handleEdit(event){
    
    if(event.target.value === "Edit"){
        const editEle = event.target.parentElement;
            // const delKey = event.target.getAttribute("dataemail");            const emailkey = event.target.dataset.email;
        console.log(event.target.dataset.email);
        const user = JSON.parse(localStorage.getItem(event.target.dataset.email));
        if (user){
            document.querySelector('#username').value = user.username;
            document.querySelector('#email').value = user.email;
            document.querySelector('#phone').value = user.phone;
            localStorage.removeItem(event.target.dataset.email);
            listOfItems.removeChild(editEle);
        }
    }
}
