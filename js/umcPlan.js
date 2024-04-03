const inputText = document.getElementById('text');
const todoList = document.querySelector('.todoList');
const doneList = document.querySelector('.doneList');
const li = document.querySelectorAll('.todolist li');

function enterkey() {
  if (window.event.keyCode == 13) {
    if (inputText.value.trim() != '') {
      let todo = document.createElement('li');
      let text = document.createTextNode('☐ ' + inputText.value);
      todo.appendChild(text);

      todo.addEventListener('click', () => {
        let done = document.createElement('li');
        let partOne = document.createElement('div');
        let value = todo.innerText;
        let text = document.createTextNode('☑ ' + value.replace('☐ ', ''));
        partOne.appendChild(text);
        let partTwo = document.createElement('div');
        let deleteBtn = document.createTextNode('✕');
        partTwo.appendChild(deleteBtn);
        partTwo.setAttribute('class', 'delete');
        partTwo.addEventListener('click', () => {
          done.remove(text);
        });
        done.append(partOne, partTwo);
        doneList.appendChild(done);
        todo.remove(text);
      });

      todoList.appendChild(todo);
      inputText.value = '';
    }
  }
}
