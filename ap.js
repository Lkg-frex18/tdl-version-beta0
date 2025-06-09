// selecteurs
const Creation = document.getElementById('add-tlk-btn');
const Espace = document.getElementById('talk-list');
// ecouteurs
Creation.addEventListener('click',create);
// fonctions
function create(){
    const taskInput = document.getElementById('talk-input');
    const taskText = taskInput.value.trim();
if(taskText !== ""){
    const li = document.createElement('li');
    li.textContent = taskText;
    const supBtn = document.createElement('button');
    supBtn.textContent = 'supprimer';
    supBtn.addEventListener('click',function(){
        li.remove();
    })
    li.appendChild(supBtn);
    Espace.appendChild(li);
    taskInput.value="";
}else{
    alert("Veillez entrer une tâche ")
}
};