// selecteurs
const Creation = document.getElementById('add-tlk-btn');
const Espace = document.getElementById('talk-list');
const Temps = document.getElementById('temps');

// Charger les tâches au démarrage
window.addEventListener('DOMContentLoaded', chargerTaches);

// Ajout d'une tâche
Creation.addEventListener('click', function() {
    const taskInput = document.getElementById('talk-input');
    const taskText = taskInput.value.trim();
    const taskTime = Temps.value;
    if (taskText !== "") {
        fetch('tache.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ tache: taskText, temps: taskTime })
        })
        .then(res => res.json())
        .then(() => {
            taskInput.value = "";
            Temps.value = "";
            chargerTaches();
        });
    } else {
        alert("Veillez entrer une tâche ");
    }
});

// Fonction pour charger et afficher les tâches
function chargerTaches() {
    fetch('charge.php')
        .then(res => res.json())
        .then(taches => {
            Espace.innerHTML = "";
            taches.forEach(tache => {
                const li = document.createElement('li');
                li.className = "point";
                li.innerHTML = `
                    <span class="tache-titre">${tache.task}</span>
                    <span class="tache-temps">${tache.temps}</span>
                `;
                // Optionnel: bouton suppression (à faire côté PHP si tu veux)
                Espace.appendChild(li);
            });
        });
}