<?php


include '../../config/DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$sql = "select * from movies where name = :name or year = :year";
$searchVal = $_GET['search'];
$stmt = $conn->prepare($sql);
$stmt->bindParam(':name', $searchVal);
$stmt->bindParam(':year', $searchVal);
$stmt->execute();

$movies = $stmt->fetchAll(PDO::FETCH_ASSOC);
//print_r($movies);
echo json_encode($movies);
