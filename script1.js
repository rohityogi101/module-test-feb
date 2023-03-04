const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
const history = document.querySelector("#history")

// Get search data from local storage in form of object
let objStr = localStorage.getItem("data" || []);
if (objStr != null) {
  array = JSON.parse(objStr);
}
console.log(array);

history.innerHTML = array.map((resp) => {
  console.log('value of E=', resp);
  `<p>search= ${resp} </p>`

})

history.innerHTML = searchHistory;