<?php


include '../../config/DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


    $sql = "select * from movies where id=:id";
    $id = $_GET['id'];
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $movie = $stmt->fetch(PDO::FETCH_ASSOC);

    //print_r($movie);
    echo json_encode($movie);
