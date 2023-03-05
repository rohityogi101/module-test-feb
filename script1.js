const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
const history = document.querySelector("#history")
const clear = document.querySelector("#clear")

// Get search data from local storage in form of object
let objStr = localStorage.getItem("data");
if (objStr != null) {
  array = JSON.parse(objStr);
}
console.log(array);

toDoBox.innerHTML = array.map((resp) => `<li>${resp} </li>`).join("");

clear.addEventListener('click',()=>{
  window.localStorage.removeItem("data");
  location.reload();
})

