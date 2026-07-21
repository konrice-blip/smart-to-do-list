const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
const deadlineBox = document.getElementById("deadline-box")

function addTask() {
  const deadline = deadlineBox.value;
  if (inputBox.value === '') {
    alert('You have to write something!')
  } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;  
    listContainer.appendChild(li) 
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);

      if (deadline) {
        let note = document.createElement("p");
        note.innerHTML = "Deadline: " + new Date(deadline).toLocaleString(); 
        note.style.color = "red";
        note.style.fontSize = "0.8em";
        li.appendChild(note); 
    }
  }
  inputBox.value = '';
  deadlineBox.value = '';
  saveData();
}

listContainer.addEventListener("click", (event)=> {
  if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked")
      saveData()
  } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove()
      saveData()
  }
}, false)

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList()
