<?php

require __DIR__.'/vendor/autoload.php';
include('includes/functions.php');

if( isset($_POST['id']) ):
  $id = $_POST['id'];
  $rows = delete($id);
  header("Location: http://localhost:9080");
else :
  header('HTTP/1.0 400 Bad Request');
endif;

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP with swagger crash</title>
  <link rel="stylesheet" href="https://unpkg.com/wingcss"/>
  <link rel="stylesheet" href="./statics/app.css" />
</head>
<body>
  <main class="container">
    <h1>UPDATE</h1>
    <?php if( !$id ) : ?>
    <p>This is not Normal access.</p>
    <a href="#back" id="back">GO BACK</a>
    <script>
      document.querySelector('#back').addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
      })
    </script>
    <?php endif ?>
  </main>
</body>

</html>