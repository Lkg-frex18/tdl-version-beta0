
<?php
    include 'bd.php';
    $result = $bdd->query('SELECT id, task, temps FROM tasks ORDER BY id DESC');
    $taches = $result->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($taches);
?>