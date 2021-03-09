<?php
    require("./vendor/autoload.php");

    $uri = $_SERVER['REQUEST_URI'];
    preg_match('/l[0-9]{1,2}.+?\//', str_replace( "_","-",$uri), $match);
    $path = $match[0];

    preg_match('/\/l[0-9]{1,2}.+\/(\d)/', str_replace( "_","-",$uri), $match);
    $file = $match[1];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/libs/modernizr.js"></script>
    <style>
        section{ margin-top: 1rem; }
    </style>
</head>
<body>
    <header>
        <?php include("./libs/nav.php"); ?>
        <?php include("./libs/subNav.php"); ?>
    </header>

    <section>
        <?php include("./".$path."$file.html"); ?>
    </section>

    <script>
        if( Modernizr.canvas ){
            console.log("It works!");
        }
    </script>
</body>
</html>