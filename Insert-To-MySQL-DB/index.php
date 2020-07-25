<?php 

$dbHost = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "contactme";

try {
  $dsn = "mysql:host=" . $dbHost . ";dbname=" . $dbName;
  $pdo = new PDO($dsn, $dbUser, $dbPassword);
} catch(PDOException $e) {
  echo "DB Connection Failed: " . $e->getMessage();
}

$status = "";
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  if(empty($name) || empty($email) || empty($message)) {
    $status = "All fields are compulsory.";
  } else {
    if(strlen($name) >= 255 || !preg_match("/^[a-zA-Z-'\s]+$/", $name)) {
      $status = "Please enter a valid name";
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $status = "Please enter a valid email";
    } else {

      $sql = "INSERT INTO contactinfo (name, email, message) VALUES (:name, :email, :message)";

      $stmt = $pdo->prepare($sql);
      
      $stmt->execute(['name' => $name, 'email' => $email, 'message' => $message]);

      $status = "Your message was sent";
      $name = "";
      $email = "";
      $message = "";
    }
  }

}

?>




<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <title>Contact Us</title>
</head>