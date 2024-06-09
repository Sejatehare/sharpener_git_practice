document.addEventListener("DOMContentLoaded",() =>{
    axios
    .get("https://crudcrud.com/api/ec229e4edeca4e1594e0ce73e75ac527/AppointmentData")
    .then((response) =>{
        response.data.forEach((obj) => {
            addUserToList(obj);
        });
    })
    .catch((err) => console.log(err))
});

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

    axios
    .post("https://crudcrud.com/api/ec229e4edeca4e1594e0ce73e75ac527/AppointmentData",obj)
    .then((response) => {
        addUserToList(response.data);
    })
    .catch((error) => console.log(error))

    localStorage.setItem(email, JSON.stringify(obj));
    event.target.reset();
}

function addUserToList(user){

    const newLi = document.createElement("li");
    newLi.appendChild(
        document.createTextNode(
            `${user.username} - ${user.email} - ${user.phone}`
        )
    );

    const delbtn = document.createElement("button");
    delbtn.appendChild(document.createTextNode("Delete"));
    newLi.appendChild(delbtn);

    const editbtn = document.createElement("button");
    editbtn.appendChild(document.createTextNode("Edit"));
    newLi.appendChild(editbtn);
    
    const ultag = document.querySelector("ul");
    ultag.appendChild(newLi);

    delbtn.addEventListener("click", function(){
        axios
        .delete(`https://crudcrud.com/api/ec229e4edeca4e1594e0ce73e75ac527/AppointmentData/${user._id}`)
        .then(() =>{
            ultag.removeChild(newLi);
        })
        .catch((error) => console.log(error))
    });

    editbtn.addEventListener("click", function(){
        document.getElementById("username").value = user.username;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone;

        ultag.removeChild(newLi);
        axios
        .delete(`https://crudcrud.com/api/ec229e4edeca4e1594e0ce73e75ac527/AppointmentData/${user._id}`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    });
}