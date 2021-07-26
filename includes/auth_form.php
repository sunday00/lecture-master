<form action="" method="POST">
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="nick"
        type="text" name="nick" 
        placeholder="joker" />
      <label class="form-label" for="nick">nick</label>
      <p class="err-msg"></p>
    </div>
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="password"
        type="password" name="password" 
        placeholder="********" />
      <label class="form-label" for="password">password</label>
      <p class="err-msg"></p>
    </div>
    <?php if( $_SERVER['PHP_SELF'] === '/signup' ) : ?>
    <div class="form-field form-floating mt-2">
      <input class="form-control" id="password_confirm"
        type="password" name="password_confirm" 
        placeholder="********" />
      <label class="form-label" for="password_confirm">password confirm</label>
      <p class="err-msg"></p>
    </div>
    <div class="form-field form-floating mt-2">
    <input class="form-control" id="phone"
        type="text" name="phone" 
        placeholder="010-0000-1111" />
      <label class="form-label" for="phone">phone</label>
      <p class="err-msg"></p>
    </div>
    <?php endif ?>
    <div class="d-grid gap-2 mt-3">
      <button type="submit" class=" btn btn-success" name="submit">SUBMIT</button>
    </div>
</form>
