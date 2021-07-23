<nav class="row px-2 navbar navbar-light bg-light">
  <h1 class="col ms-2 navbar-brand fs-1">
    <a href="/" class="text-decoration-none link-dark"><em class="fas fa-users me-2"></em>CRUD</a>
  </h1>
  <div class="col-md-8">
    <ul class="list-unstyled d-flex justify-content-end gap-3">
      <li>
        <a href="/insert.php" class="btn btn-outline-primary">
          <em class="fas fa-plus-circle"></em>
        </a>
      </li>
      <li>
        <div class="dropdown">
          <a class="btn btn-secondary" href="#" 
            role="button" id="gnb" data-bs-toggle="dropdown" aria-expanded="false">
            <em class="fas fa-user"></em>
          </a>

          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="gnb">
            <li><a class="dropdown-item" href="#">info</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">logout</a></li>
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