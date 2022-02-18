<?php


include '../../config/DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


    $sql = "select * from movies";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $movies = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($movies);