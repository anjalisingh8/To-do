const form = document.getElementById("form");
const ul = document.getElementById("list");
const task = document.getElementById("task");
const show = document.getElementById("show");
//ADD the list item to DOM
function addDOM(task) {
  const li = document.createElement("li");
  if (task.trim()) {
    li.innerHTML = `<p>${task}</p> <button class="cancel" onclick="cancel(event)">X</button>`;
  }
  ul.appendChild(li);
}

//Remove the list item
function cancel(e) {
  const nodeEl = e.target.parentElement;
  ul.removeChild(nodeEl);
  //console.log(ul.getElementsByTagName("li").length);
  if (ul.getElementsByTagName("li").length === 0) {
    show.style.display = "flex";
    setTimeout(() => {
      show.style.display = "none";
    }, 2000);
  }
}

//Submit the list item
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(task.value);
  addDOM(task.value);
  task.value = "";
});
