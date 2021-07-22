<?php

include("includes/commons.php");

if( isset($_POST['id']) ):
  $id = $_POST['id'];
  $rows = delete($id);
  header("Location: /");
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
  <?php include(__DOCUMENT_ROOT__.'/themes/styles.php'); ?>
</head>
<body>
  <header class="fluid-container">
  <?php include(__DOCUMENT_ROOT__.'/themes/header.php'); ?>
  </header>
  <main class="container">
    <h2 class="my-5">DELETE</h2>
    <?php if( !$id ) : ?>
    <p>This is not Normal access.</p>
    <a href="#back" id="back" class="btn btn-outline-primary">GO BACK</a>
    <script>
      document.querySelector('#back').addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
      })
    </script>
    <?php endif ?>
  </main>
</body>
<?php include(__DOCUMENT_ROOT__.'/themes/scripts.php'); ?>

</html>