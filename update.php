<?php
require __DIR__.'/vendor/autoload.php';
include('includes/functions.php');

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
  header("Location: http://localhost:9080/update.php?id={$_GET['id']}");
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

    <?php if ($employ) : ?>
    <form action="" method="POST">
      <input type="hidden" name="id" value="<?=$employ['id']?>">
        <div class="form-field">
          <label for="fname">first name</label>
          <input type="text" name="fname" id="fname" required value="<?=$employ['fname']?>" />
        </div>
        <div class="form-field">
          <label for="lname">last name</label>
          <input type="text" name="lname" id="lname" required value="<?=$employ['lname']?>" />
        </div>
        <div class="form-field">
          <label for="phone1">phone number</label>
          <div class="phone grid-row"> 
            <input type="text" name="phone1" id="phone1" minlength="2" maxlength="4" required value="<?=$employ['phone1']?>" />
            <span class="center">-</span>
            <input type="text" name="phone2" id="phone2" minlength="3" maxlength="4" required value="<?=$employ['phone2']?>" />
            <span class="center">-</span>
            <input type="text" name="phone3" id="phone3" minlength="4" maxlength="4" required value="<?=$employ['phone3']?>" />
          </div>
        </div>
        <div class="row">
          <button type="submit" class="full col" name="submit">SUBMIT</button>
        </div>
    </form>

    <form action="/delete.php" method="POST">
      <input type="hidden" name="id" value="<?=$employ['id']?>">
      <div class="row">
          <button type="submit" class="full col danger" name="delete">DELETE</button>
        </div>
    </form>

    <?php else : ?>
      <p>This is not Normal access.</p>
      <?php header('HTTP/1.0 400 Bad Request'); ?>
    <?php endif ?>
  </main>
</body>

</html>