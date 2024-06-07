const getbtn = document.getElementById("btnget");
const postbtn = document.getElementById("btnpost");
const putbtn = document.getElementById("btnput");
const delbtn = document.getElementById("btndel");

getbtn.addEventListener("click", getTodo);
postbtn.addEventListener("click", postTodo);
putbtn.addEventListener("click", putTodo);
delbtn.addEventListener("click", delTodo);

function getTodo() {
    axios
    .get("https://crudcrud.com/api/6356e9c587ec4a509f4c25205977c1f6/Todo")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function  postTodo() {
    axios
    .post("https://crudcrud.com/api/6356e9c587ec4a509f4c25205977c1f6/Todo",{
        title: "study time",
        completed: false,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function putTodo() {
    axios
    .put("https://crudcrud.com/api/6356e9c587ec4a509f4c25205977c1f6/Todo/6662e0ad19f3e403e81e2657",{
        title: "wakeup",
        completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

function delTodo() {
    axios
    .delete("https://crudcrud.com/api/6356e9c587ec4a509f4c25205977c1f6/Todo/6662e0ec19f3e403e81e2658")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}