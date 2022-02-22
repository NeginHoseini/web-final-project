<?php

include '../../config/DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$movie = json_decode(file_get_contents('php://input'));
        $sql = "insert into movies(id, name, year, description, poster) values (null, :name, :year, :description, :poster)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $movie->name);
        $stmt->bindParam(':year', $movie->year);
        $stmt->bindParam(':description', $movie->description);
        $stmt->bindParam(':poster', $movie->poster);

            try {
                $stmt->execute();
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
            }
            catch (Exception $e) {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }

            echo json_encode($response);
