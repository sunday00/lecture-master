<nav class="navbar navbar-expand-lg navbar-light ">

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item <?= $active == 'home' ? 'active' : '' ?>">
                <a class="nav-link" href="<?= $this->Url->buildFromPath(
                  'Blog::home'
                ) ?>">Home</a>
            </li>

            <li class="nav-item <?= $active == 'about' ? 'active' : '' ?>">
                <a class="nav-link" href="<?= $this->Url->buildFromPath(
                  'Blog::about'
                ) ?>">About</a>
            </li>

            <li class="nav-item <?= $active == 'contact' ? 'active' : '' ?>">
                <a class="nav-link" href="<?= $this->Url->buildFromPath(
                 'Blog::contact'
                ) ?>">Contact</a>
            </li>

            <li class="nav-item <?= $active == 'admin' ? 'active' : '' ?>">
                <a class="nav-link" href="<?= $this->Url->buildFromPath(
                  'Admin/Users::index'
                ) ?>">Admin</a>
            </li>
            
            <?php if($user): ?>
            <li class="nav-item">
                <a class="nav-link" href="<?= $this->Url->buildFromPath(
                  'Admin/Users::logout'
                ) ?>">logout</a>
            </li>
            <?php else : ?>
                <li class="nav-item">
                <a class="nav-link" href="<?= $this->Url->buildFromPath(
                  'Admin/Users::login'
                ) ?>">login</a>
            </li>
            <?php endif ?>
        </ul>
    </div>

</nav>