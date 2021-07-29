<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include("includes/commons.php");

?>

<?php if($_SERVER['PHP_SELF'] === '/') : ?>
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
    <h2 class="my-5">DASH BOARD</h2>
    <table class="table datatable table-sm table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Manage</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    
  </main>
</body>
<?php include(__DOCUMENT_ROOT__.'/themes/scripts.php'); ?>
</html>
<?php else : ?>

<?php
  if( is_file( '.'.$_SERVER['PHP_SELF'].'.php' ) ){
    include_once('.'.$_SERVER['PHP_SELF'].'.php');
  } else {
    header('HTTP/1.0 404 Not Found');
?>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404</title>
    <?php include(__DOCUMENT_ROOT__.'/themes/styles.php'); ?>
  </head>
  <body>
    <header class="fluid-container">
      <?php include(__DOCUMENT_ROOT__.'/themes/header.php'); ?>
    </header>
    <main class="container">
      <h2 class="my-5">404</h2>
      <p>NOT FOUND</p>
      <a href="#back" id="back" class="btn btn-outline-primary">GO BACK</a>
      <script>
        document.querySelector('#back').addEventListener('click', (e) => {
          e.preventDefault();
          history.back();
        })
      </script>
    </main>
  </body>
  <?php include(__DOCUMENT_ROOT__.'/themes/scripts.php'); ?>
  </html>
<?php    
    exit;
  }
?>
<?php endif ?>
