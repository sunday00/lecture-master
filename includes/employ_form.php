<form action="" method="POST">
  <?php if ($employ): ?>
    <input type="hidden" name="id" value="<?=$employ['id']?>">
  <?php endif ?>
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="fname"
        type="text" name="fname" 
        placeholder="John"
        value="<?=$employ['fname']?>" />
      <label class="form-label" for="fname">first name</label>
      <p class="err-msg"></p>
    </div>
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="lname"
        type="text" name="lname" 
        placeholder="Doh"
        value="<?=$employ['lname']?>" />
      <label class="form-label" for="lname">last name</label>
      <p class="err-msg"></p>
    </div>
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="phone"
        type="text" name="phone" 
        placeholder="010-0000-1111"
        value="<?=$employ['phone']?>" />
      <label class="form-label" for="phone">phone</label>
      <p class="err-msg"></p>
    </div>
    <div class="d-grid gap-2 mt-3">
      <button type="submit" class=" btn btn-success" name="submit">SUBMIT</button>
    </div>
</form>

<?php if ($employ): ?>
<form action="/delete" method="POST" class="d-grid gap-2 mt-2"  onsubmit="return confirm('permanently delete?')">
  <input type="hidden" name="id" value="<?=$employ['id']?>">
  <button type="submit" class="btn btn-danger" name="delete">DELETE</button>
</form>
<?php endif ?>