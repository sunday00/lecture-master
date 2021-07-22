<form action="" method="POST">
  <?php if ($employ): ?>
    <input type="hidden" name="id" value="<?=$employ['id']?>">
  <?php endif ?>
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="fname"
        type="text" name="fname" required 
        placeholder="John"
        value="<?=$employ['fname']?>" />
      <label class="form-label" for="fname">first name</label>
    </div>
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="lname"
        type="text" name="lname" required 
        placeholder="Doh"
        value="<?=$employ['lname']?>" />
      <label class="form-label" for="lname">last name</label>
    </div>
    <div class="form-field input-group mt-2">
      <label class="input-group-text" for="phone1">phone number</label>
      <input class="form-control" id="phone1" 
        minlength="2" maxlength="4"
        type="text" name="phone1" required value="<?=$employ['phone1']?>" />
      <span class="center input-group-text">-</span>
      <input class="form-control" id="phone2"
        minlength="3" maxlength="4"
        type="text" name="phone2" required value="<?=$employ['phone2']?>" />
      <span class="center input-group-text">-</span>
      <input class="form-control" id="phone3" 
        minlength="4" maxlength="4" 
        type="text" name="phone3" required value="<?=$employ['phone3']?>" />
    </div>
    <div class="d-grid gap-2 mt-3">
      <button type="submit" class=" btn btn-success" name="submit">SUBMIT</button>
    </div>
</form>

<?php if ($employ): ?>
<form action="/delete.php" method="POST" class="d-grid gap-2 mt-2"  onsubmit="return confirm('permanently delete?')">
  <input type="hidden" name="id" value="<?=$employ['id']?>">
  <button type="submit" class="btn btn-danger" name="delete">DELETE</button>
</form>
<?php endif ?>