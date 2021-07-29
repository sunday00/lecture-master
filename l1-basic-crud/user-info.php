<?php
  $user = selectOneUserById($_SESSION['user']['id']);
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
  <header class="fluid-container">
  <?php include(__DOCUMENT_ROOT__.'/themes/header.php'); ?>
  </header>
  <main class="container">
    <h2 class="my-5">My info</h2>

    <p><?=$user['nick']?></p>
    <p><?=$user['fname']?> <?=$user['lname']?></p>
    <p><?=$user['phone']?></p>

  </main>
</body>
<?php include(__DOCUMENT_ROOT__.'/themes/scripts.php'); ?>

</html>