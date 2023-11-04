let todoList = [
    {
        item:'Buy Milk',
        dueDate: '4/11/2023'
    },
    {
        item:'Go to College',
        dueDate: '4/11/2023'
    }
];
displayItems();

function addToDo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value;
  let tododate = dateElement.value;

  todoList.push({item:todoItem, dueDate: tododate});

  inputElement.value = "";
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let conatinerElement = document.querySelector("#todo-conatiner");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let Item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    newHtml += `
       
       <span>${Item}</span>
       <span>${dueDate}</span>
       <button class = 'btn-delete' onclick = "todoList.splice(${i},1);
       displayItems();" >Delete</button> 
       
        `;
  }
  conatinerElement.innerHTML = newHtml;
}
