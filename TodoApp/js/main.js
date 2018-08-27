const btnModal = document.getElementById('btn-modal');
const addModal = document.getElementById('modal-add-wrapper');
const addTask = document.getElementById('add-task');
const body = document.getElementById('body');
const task = document.getElementById('task');
const list = document.getElementById('items');
const clearAll = document.getElementById('clear-tasks');
const filter = document.getElementById('filter');


btnModal.addEventListener('click', () => {
    addModal.style.display = 'flex';

});

addTask.addEventListener('click', (e) => {
    addModal.style.display = 'none';
    let li = document.createElement('li');
    li.className = "item";
    li.appendChild(document.createTextNode(task.value));
    let link = document.createElement('a');
    link.className = 'remove-item';
    link.innerHTML = '<i class="far fa-trash-alt"></i>';
    li.appendChild(link);
    list.appendChild(li);

    task.value = '';

    e.preventDefault();
});

list.addEventListener('click', (e) =>{
if (e.target.parentElement.classList.contains('remove-item')){
e.target.parentElement.parentElement.remove();
}
});


clearAll.addEventListener('click', () =>{

while(list.firstChild){
    list.removeChild(list.firstChild)
}

});

filter.addEventListener('keyup', (e) =>{
    let val = e.target.value.toLowerCase();

    document.querySelectorAll('.item').forEach((task) =>{
    let item = task.firstChild.textContent;
if (item.toLowerCase().indexOf(val) != -1) {
    task.style.display = 'flex';
} else {
    task.style.display = 'none';
}

    })
})