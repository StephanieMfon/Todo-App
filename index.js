// Play script

// what exactly am i trying to do?
/*
First when we click on button if add-input is not empty or null then push the item as an array into an array and store item in local storage

FUNCTIONALITIES
Add items 
remove items  
edit items
swap items
*/

const addItemsBtn = document.querySelector(".add-item-btn");
const addItemsInput = document.querySelector(".todo-add-item-input");

addItemsBtn.addEventListener("click", () => {
  let todoListItems = JSON.parse(localStorage.getItem("todoList")) || [];
  if (addItemsInput.value.length > 0) {
    todoListItems.unshift(addItemsInput.value);
    localStorage.setItem("todoList", JSON.stringify(todoListItems));
    document.getElementById("Form").reset();
  }
  showItems();
});

let allButtons;
// localStorage.removeItem("todoList");
const showItems = () => {
  const todoList = JSON.parse(localStorage.getItem("todoList"));

  let mapped = todoList.map((item) => {
    return `<div><div><input type="checkbox"><textarea id="main-text">${item}</textarea><button class="remove-button" onclick="removeItem()">-</button></div></div`;
  });

  document.querySelector(".todo-list").innerHTML = mapped;
  allButtons = document.querySelectorAll(".remove-button");

  // try to make a function inside then take it out and pass it here to collect the all buttons input
  removeItem(allButtons);
};

const removeItem = (allButtons) => {
  let buttonArray = Array.from(allButtons);
  let todoListItems = JSON.parse(localStorage.getItem("todoList")) || [];
  buttonArray.map((button, i) => {
    button.onclick = () => {
      console.log(i);
      todoListItems.splice(i, 1);
      buttonArray.splice(i, 1);

      console.log(buttonArray);
      console.log(todoListItems);
      localStorage.setItem("todoList", JSON.stringify(todoListItems));
    };
    button.addEventListener("click", () => {
      showItems();
    });
  });

  // let mapped = todoListItems.map((item) => {
  //   return `<div><div><input type="checkbox"><textarea id="main-text">${item}</textarea><button class="remove-button" onclick="removeItem()">-</button></div></div`;
  // });

  // document.querySelector(".todo-list").innerHTML = mapped;

  // let todoListItems2 = JSON.parse(localStorage.getItem("todoList")) || [];
  // console.log(todoListItems2);
};

// TRIAL 1

// // let list = document.createElement("ul");
// // let listItem = document.createElement("li");
// let inputItem = document.createElement("INPUT");
// // let inputText = document.createElement("p");
// inputItem.setAttribute("type", "text");
// inputItem.textContent = "bpop";

// for (let item of todoList) {
//   return todo.append(`${inputItem}`);
// }
// return (todo.innerHTML = `<div><textarea>${el.newTodoNote}</textarea></div>`);

// .join("\n");

// list.append(listItem);
// listItem.appendChild(inputText);
// todo.append(list);
// return singleItem;

// TRIAL 2

// console.log(todoList);
// const todo = document.querySelector(".todo-list");
// console.log(todoList);
// let div;
// let divs = todoList.map((el) => {
//   div = document.createElement("div");

//   div.textContent = `${el.newTodoNote}`;
//   console.log(el.newTodoNote);
//   return div;
// todo.appendChild(div);
// });

// todo.append(...divs);
// showItems()
