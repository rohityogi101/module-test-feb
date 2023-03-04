const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}


// Get search data from local storage in form of object
let objStr = localStorage.getItem("data");
if (objStr != null) {
  array = JSON.parse(objStr);
  // console.log(array);
}