<?php
     include 'bd.php';
    // Pour AJAX, on récupère les données JSON
    $data = json_decode(file_get_contents('php://input'), true);
    $tache = $data['tache'] ?? '';
    $temps = $data['temps'] ?? '';

    $entree = $bdd->prepare('INSERT INTO tasks(task, temps) VALUES(:task, :temps)');
    $entree->execute([
        'task' => $tache,
        'temps' => $temps
    ]);
    echo json_encode(['success' => true]);
?>