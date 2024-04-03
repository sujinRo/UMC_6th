const inputText = document.getElementById('text');
const todoList = document.querySelector('.todoList');

function enterkey() {
  if (window.event.keyCode == 13) {
    if (inputText.value.trim() != '') {
      let todo = document.createElement('li');
      let text = document.createTextNode('☐ ' + inputText.value);
      todo.appendChild(text);
      todoList.appendChild(todo);
      inputText.value = '';
    }
  }
}
