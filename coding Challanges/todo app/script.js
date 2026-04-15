const input = document.querySelector(".input-text");
const submit = document.querySelector(".todo-submit");
const tasklist = document.querySelector(".task-list");
const form = document.querySelector(".todo-form");

let editItem = null;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // agar amugjhe same index oar deit chaiye to

  let newList = document.createElement("li");
  let extraBtn = document.createElement("button");

  if (input.value === "") {
    alert("please enter the task");
  } else {
    input.focus();
  }

  if (editItem) {
    editItem.firstChild.textContent = input.value; // ye ussi lien par change karega
    editItem = null;
  } else {
    newList.textContent = input.value;
    extraBtn.innerHTML = "delete";

    newList.appendChild(extraBtn); // button added inside li
    tasklist.appendChild(newList); // li added inside ul/ol

    extraBtn.addEventListener("click", () => {
      newList.remove();
    });

    newList.addEventListener("click", () => {
      input.value = newList.firstChild.textContent; // ye first text content hota hai
      editItem = newList; // ye line edit item me store karega or ipar bhejega
    });
  }
  input.value = "";
});
