<?php

if (isset($_POST["email"])){
    $result = array(
    	'email' => $_POST["email"],
    ); 
    echo json_encode($result); 
}

?>
