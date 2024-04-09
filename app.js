function addTodo() {
    const inputField = document.getElementById('todoInput');
    const inputValue = inputField.value.trim();
  
    if (inputValue !== '') {
      const todoList = document.getElementById('todoList');
  
      const listItem = document.createElement('li');
      listItem.textContent = inputValue;
      listItem.className = 'list-group-item';
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'TA BORT';
      deleteButton.className = 'btn btn-danger btn-sm float-end';
      deleteButton.onclick = function() {
        todoList.removeChild(listItem);
      };
  
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
  
      inputField.value = '';
    }
  }
  