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
        </ul>
    </div>

</nav>