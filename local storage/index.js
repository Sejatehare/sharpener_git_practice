
// function getUserList(){
//     const userLIst = document.querySelector("ul"); 
//     for(let i = 0; i < localStorage.length; i++){
//         const key = localStorage.key(i);
//         const userDetails = JSON.parse(localStorage.getItem(key));

//         const newLi = document.createElement("li");
//         newLi.textContent = `${obj.username} - ${obj.email} - ${obj.phone}`;
//         userLIst.appendChild(newLi);
//     }   
// }


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
    const newLiText = document.createTextNode(username + " - " + email + " - " + phone + " - ");
    newLi.appendChild(newLiText);
    ultag.appendChild(newLi)

    // getUserList();
};

// getUserList();
