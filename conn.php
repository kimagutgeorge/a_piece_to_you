<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "a_piece_to_you";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>