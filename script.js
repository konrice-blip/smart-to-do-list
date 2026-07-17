const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
const deadlineBox = document.getElementById("deadline-box")

function addTask() {
  const deadline = deadlineBox.value;
  if (inputBox.value === '') {
    alert('You have to write something!')
  } else {
      let li = document.createElement("li"); // create li element
      li.innerHTML = inputBox.value;  // the text inside li element is the value you input in inputBox
    listContainer.appendChild(li) //added at the last element in li
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);

      if (deadline) {
        let note = document.createElement("p");
        note.innerHTML = "Deadline: " + new Date(deadline).toLocaleString(); // Format the deadline
        note.style.color = "red"; // Optional: Style the deadline
        note.style.fontSize = "0.8em";
        li.appendChild(note); // Append the note to the li
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