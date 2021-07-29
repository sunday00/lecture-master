<nav class="row px-2 navbar navbar-light bg-light">
  <h1 class="col ms-2 navbar-brand fs-1">
    <a href="/" class="text-decoration-none link-dark"><em class="fas fa-users me-2"></em>CRUD</a>
  </h1>
  <div class="col-md-8">
    <ul class="list-unstyled d-flex justify-content-end gap-3">
      <li>
        <a href="/insert" class="btn btn-outline-primary">
          <em class="fas fa-plus-circle"></em>
        </a>
      </li>
      <li>
        <div class="dropdown">
          <?php if( isset($_SESSION['user'])) : ?>
          <a class="btn btn-info text-white" href="#" 
            role="button" id="gnb" data-bs-toggle="dropdown" aria-expanded="false">
            <em><?=$_SESSION['user']['nick']?></em>
          </a>
          <?php else : ?>
          <a class="btn btn-secondary" href="#" 
            role="button" id="gnb" data-bs-toggle="dropdown" aria-expanded="false">
            <em class="fas fa-user"></em>
          </a>
          <?php endif ?>

          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="gnb">
            <?php if( isset($_SESSION['user'])) : ?>
            <li><a class="dropdown-item" href="/user-info">info</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <!-- <a class="dropdown-item" href="/log-out">logout</a> -->
              <form action="/logout" method="POST">
                <input type="hidden" name="id" value="<?=$_SESSION['user']['id']?>">
                <input type="submit" value="logout" class="dropdown-item" />
              </form>
            </li>
            <?php else : ?>
            <li><a class="dropdown-item" href="/login">login</a></li>
            <li><a class="dropdown-item" href="/signup">signup</a></li>
            <?php endif ?>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>

<?php if( isset($_SESSION['flash']) ): ?>
  <div class="alert alert-<?=$_SESSION['flash']['type']?> alert-dismissible fade show" role="alert">
    <?php if ( isset($_SESSION['flash']['title']) ) : ?>
      <strong><?=$_SESSION['flash']['title']?></strong>
    <?php endif ?>
    <?=$_SESSION['flash']['msg']?>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
<?php endif ?>

<?php unset($_SESSION['flash']); ?>