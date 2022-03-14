<?php

if (isset($_POST["email"])) { 
    
	// Формируем массив для JSON ответа
    $result = $_POST['email']; 

    echo json_encode($result); 
}
?>
