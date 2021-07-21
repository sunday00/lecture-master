<?php
require __DIR__.'/vendor/autoload.php';
include('includes/functions.php');

define('__DOCUMENT_ROOT__', $_SERVER['DOCUMENT_ROOT']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP with swagger crash</title>
  <?php include(__DOCUMENT_ROOT__.'/themes/styles.php'); ?>
</head>
<body>
  <main class="container">
    <h1><em class="fas fa-check-circle"></em> CRUD</h1>

    <?php
      formatcode(selectAll());
      formatcode(selectOne(10));
    ?>
  </main>
</body>

</html>