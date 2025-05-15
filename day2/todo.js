function getTodoData() {
  return JSON.parse(localStorage.getItem("todoData"));
}

let listItems = getTodoData() || [];
const task = document.getElementById("task");
const divList = document.querySelector(".listContainer");

function showList(crtEle) {
  const divText = document.createElement("div");
  divText.classList.add("listItems");
  divText.innerHTML = `
                <p>${crtEle}</p>
                <button class="deletebtn" type="button">Delete</button>
            `;
  divList.append(divText);
}

function addHandler(e) {
  e.preventDefault();
  if (!listItems.includes(task.value) && task.value !== "") {
    listItems.push(task.value);
    setData = [...new Set(listItems)];
    localStorage.setItem("todoData", JSON.stringify(setData));
    showList(task.value);
  }
  task.value = "";
}

const showtodoList = () => {
  listItems.forEach((crtEle) => {
    showList(crtEle);
  });
};

showtodoList();

function deleteHandler(e) {
  const taskText = e.target.previousElementSibling.innerText;

  listItems = listItems.filter((crtTodo) => {
    return crtTodo !== taskText;
  });
  localStorage.setItem("todoData", JSON.stringify(listItems));
  e.target.parentElement.remove();

}

document.getElementById("addbtn").addEventListener("click", (event) => {
  addHandler(event);
});

document.querySelector(".listContainer").addEventListener("click", (event) => {
  if (event.target.classList.contains("deletebtn")) {
    deleteHandler(event);
  }
});
