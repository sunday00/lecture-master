<?php

if( isset($_GET['id']) ):
  $employ = selectOne($_GET['id']);
endif;

if( isset($_POST['submit']) ):
  $rows = update(intval($_GET['id']), $_POST['fname'], $_POST['lname'], $_POST['phone']);
  header("Location: /update?id={$_GET['id']}");
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
    <h2 class="my-5">UPDATE</h2>

    <?php if ($employ) : ?>
      <?php include_once('includes/employ_form.php'); ?>
    <?php else : ?>
      <p>This is not Normal access.</p>
      <?php header('HTTP/1.0 400 Bad Request'); ?>
    <?php endif ?>
  </main>
</body>
<?php include(__DOCUMENT_ROOT__.'/themes/scripts.php'); ?>

</html>