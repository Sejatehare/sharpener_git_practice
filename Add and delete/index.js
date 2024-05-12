// Add the Edit Button:
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit",function(event){
    event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");

//   newLi.innerHTML = fruitToAdd.value + '<button class='delete-btn'>x</button>';

  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = "fruit";

  const deletebtn = document.createElement("button");
  const deletebtntext = document.createTextNode("x");
  deletebtn.appendChild(deletebtntext);
  deletebtn.className = "delete-btn";
  newLi.appendChild(deletebtn);

  const editbtn = document.createElement("button");
  const editbtntext = document.createTextNode("Edit");
  editbtn.appendChild(editbtntext);
  editbtn.className = "edit-btn";
  newLi.appendChild(editbtn);

  fruits.appendChild(newLi);
});

fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDel = event.target.parentElement;
        fruits.removeChild(fruitToDel);
    }
});


// Implement the code as in video but with one extra 'Edit' button in 'li'

