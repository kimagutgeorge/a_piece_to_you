<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Piece To You</title>
    <!-- bootstrap -->
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <?php
        if($_GET['p']== "home" || $_GET['p']== "" || $_GET['p']== "about-us" || $_GET['p']== "product-details" || $_GET['p']== "event-details" || $_GET['p']== "cart" || $_GET['p']== "read-blog" || $_GET['p']== "register" || $_GET['p']== "events" || $_GET['p']== "shop" || $_GET['p']== "blogs" || $_GET['p']== "contact-us"){?>
            <link rel="stylesheet" href="assets/style/front_global.css?v=<?php echo time()?>">
        <?php }else{?>
            <link rel="stylesheet" href="assets/style/global.css?v=<?php echo time()?>">
        <?php } ?>
    <!-- font awesome -->
    <link rel="stylesheet" href="assets/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="assets/fontawesome/css/all.css">
    <!-- tinyMCE -->
    <script src="https://cdn.tiny.cloud/1/5q4mvewercb0ylufr84rsdycfzo44grc127l4tcn42ho7zm5/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

</head>