<?php

include '../../config/DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$movie = json_decode( file_get_contents('php://input') );
        $sql = " update movies set name= :name, year =:year, description =:description, poster =:poster where id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $movie->id);
        $stmt->bindParam(':name', $movie->name);
        $stmt->bindParam(':year', $movie->year);
        $stmt->bindParam(':description', $movie->description);
        $stmt->bindParam(':poster', $movie->poster);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
