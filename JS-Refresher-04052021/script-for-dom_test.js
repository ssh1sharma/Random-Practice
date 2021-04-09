const taskFormEl = document.querySelector('#task-form');
const inputFieldEl = document.querySelector('.input-field');
const taskEl = document.querySelector('#task');
const filterEl = document.querySelector('#filter');
const collectionEl = document.querySelector('.collection');

taskFormEl.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  // create li
  let li = document.createElement('li');
// get the user input value in li
  let input = document.createTextNode(taskEl.value);
  li.appendChild(input);
  // add anchor element
  let link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove secondary-content"></i>';
  li.appendChild(link);

  console.log(li, taskEl.value, link)

  // add li to ul
  collectionEl.appendChild(li);

}