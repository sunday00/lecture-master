<nav class="navbar navbar-expand-lg navbar-light ">

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item <?= $active == 'home' ? 'active' : '' ?>">
                <a class="nav-link" href="<?= $this->Url->build([
                  'controller' => 'blog',
                  'action' => 'home'
                ]) ?>">Home</a>
            </li>

            <li class="nav-item <?= $active == 'about' ? 'active' : '' ?>">
                <a class="nav-link" href="<?= $this->Url->build([
                  'controller' => 'blog',
                  'action' => 'about'
                ]) ?>">About</a>
            </li>

            <li class="nav-item <?= $active == 'contact' ? 'active' : '' ?>">
                <a class="nav-link" href="<?= $this->Url->build([
                  'controller' => 'blog',
                  'action' => 'contact'
                ]) ?>">Contact</a>
            </li>
        </ul>
    </div>

</nav>