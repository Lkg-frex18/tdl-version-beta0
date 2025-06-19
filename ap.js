// // selecteurs
// const Creation = document.getElementById('add-tlk-btn');
// const Espace = document.getElementById('talk-list');
// const Temps = document.getElementById('temps');
// // ecouteurs
// Creation.addEventListener('click',create);
// // fonctions
// function create(){
//     const taskInput = document.getElementById('talk-input');
//     const taskText = taskInput.value.trim();
//     const taskTime = Temps.value;
// if(taskText !== ""){
//     const li = document.createElement('li');
//     li.className="point";
//     li.innerHTML = `
//     <span class="tache-titre">${taskText}</span>
//     <span class="tache-temps">${taskTime}</span>
//     `
//     const supBtn = document.createElement('button');
//     supBtn.textContent = 'supprimer';
//     supBtn.addEventListener('click',function(){
//         li.remove();
//         conteur--;
//         conter();
//     })
//     li.appendChild(supBtn);   
//     Espace.appendChild(li);
//     conteur++;
//     conter();
//     taskInput.value="";
//     Temps.value="";
// }else{
//     alert("Veillez entrer une tâche ")
// }
// };
