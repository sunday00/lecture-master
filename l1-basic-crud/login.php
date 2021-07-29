<?php

if( isset($_POST['submit']) ):
  $id = login($_POST['nick'], $_POST['password']);
  if($id) header("Location: /");
  exit;
endif;

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
    <h2 class="my-5">LOGIN</h2>

    <?php include_once('includes/auth_form.php'); ?>

  </main>
</body>
<?php include(__DOCUMENT_ROOT__.'/themes/scripts.php'); ?>

</html>