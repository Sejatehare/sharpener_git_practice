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

    const ultag = document.querySelector("ul");
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(username + " - " + email + " - " + phone);
    newLi.appendChild(newLiText);
    ultag.appendChild(newLi)
    const delButton = document.createElement("input");
    delButton.setAttribute("type","button");
    delButton.setAttribute("value","Delete");
    const delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    newLi.appendChild(delButton);

    const listOfItems = document.querySelector("#listOfItems");
    listOfItems.addEventListener('click',function(event){
        if(event.target.value === "Delete"){
            const deleteEle = event.target.parentElement;
            listOfItems.removeChild(deleteEle);
        }
    });
};
