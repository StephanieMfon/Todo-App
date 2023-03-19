// Show Current Date
const dateformat = new Date();
document.getElementById("date").innerText = dateformat;

// Add New Todo Item
const addItemsBtn = document.querySelector(".add-item-btn");
const addItemsInput = document.querySelector(".todo-add-item-input");

// Update todo list
window.addEventListener("load", () => {
  showItems();
});

// Add New Todo Item
addItemsBtn.addEventListener("click", () => {
  let todoListItems = JSON.parse(localStorage.getItem("todoList")) || [];
  if (addItemsInput.value.length > 0) {
    todoListItems.unshift(addItemsInput.value);
    localStorage.setItem("todoList", JSON.stringify(todoListItems));
    document.getElementById("Form").reset();
  }
  showItems();
});
addItemsInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addItemsBtn.click();
  }
});

// Show items/Update App
const showItems = () => {
  const todoList = JSON.parse(localStorage.getItem("todoList"));

  let mapped = todoList.map((item) => {
    return `<div class="todo-items-wrapper"><div class="todo-item dark"><div class="circle"></div><textarea id="main-text">${item}</textarea><button class="edit-button">Save</button><button class="remove-button" onclick="removeItem()">-</button></div></div`;
  });
  document.querySelector(".todo-list").innerHTML = mapped;
  allButtons = document.querySelectorAll(".remove-button");
  editButtons = document.querySelectorAll(".edit-button");
  editItem(editButtons);
  removeItem(allButtons);
};

const removeItem = (allButtons) => {
  let buttonArray = Array.from(allButtons);
  let todoListItems = JSON.parse(localStorage.getItem("todoList")) || [];
  buttonArray.map((button, i) => {
    button.onclick = () => {
      todoListItems.splice(i, 1);
      buttonArray.splice(i, 1);
      localStorage.setItem("todoList", JSON.stringify(todoListItems));
    };
    button.addEventListener("click", () => {
      showItems();
    });
  });
};

// Edit Items
const editItem = (editButtons) => {
  let buttonsArray = Array.from(editButtons);
  let todoListItems = JSON.parse(localStorage.getItem("todoList")) || [];
  console.log(todoListItems);
  buttonsArray.map((button, i) => {
    button.onclick = () => {
      const editedValue = button.previousElementSibling.value;
      todoListItems.splice(i, 1);
      todoListItems.splice(0, 0, editedValue);
      localStorage.setItem("todoList", JSON.stringify(todoListItems));
    };
    button.addEventListener("click", () => {
      showItems();
    });
  });
};

//Activate light mode

const darkMode = document.querySelector(".off");
const lightMode = document.querySelector(".on");
const switchOff = document.querySelector(".off-switch");
const switchOn = document.querySelector(".on-switch");
const body = document.body;

const activateLightMode = () => {
  if (lightMode.classList.contains("on")) {
    lightMode.classList.add("active");
    darkMode.classList.remove("active");

    switchOn.classList.add("current");
    switchOff.classList.remove("current");
    body.classList.toggle("light");
  }
};

darkMode.addEventListener("click", activateLightMode);
switchOff.addEventListener("click", activateLightMode);

const activateDarkMode = () => {
  if (darkMode.classList.contains("off")) {
    darkMode.classList.add("active");
    lightMode.classList.remove("active");

    switchOff.classList.add("current");
    switchOn.classList.remove("current");
    body.classList.toggle("light");
  }
};
lightMode.addEventListener("click", activateDarkMode);
switchOn.addEventListener("click", activateDarkMode);
