<?php
include("includes/commons.php");

if( isset($_GET['id']) ):
  $employ = selectOne($_GET['id']);
  $phone = explode('-', $employ['phone']);
  $employ['phone1'] = $phone[0];
  $employ['phone2'] = $phone[1];
  $employ['phone3'] = $phone[2];
endif;

if( isset($_POST['submit']) ):
  $phone = $_POST['phone1'].'-'. $_POST['phone2'].'-'. $_POST['phone3'];
  $rows = update(intval($_GET['id']), $_POST['fname'], $_POST['lname'], $phone);
  header("Location: /update.php?id={$_GET['id']}");
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