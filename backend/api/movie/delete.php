<?php

include '../../config/DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$sql = "delete from movies where id = :id";
$id = $_GET['id'];
$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $id);
$stmt->execute();
$movie = $stmt->fetch(PDO::FETCH_ASSOC);

if($stmt->execute()) {
           $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
       } else {
           $response = ['status' => 0, 'message' => 'Failed to delete record.'];
       }
       echo json_encode($response);
