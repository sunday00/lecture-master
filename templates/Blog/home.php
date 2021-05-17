<div class="container">

    <div class="row">
        <div class="col-4">
            <h3 style="color: #fff;" class="bg-info text-capitalize p-1">Recent Post</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#">Cras justo odio</a></li>
                <li class="list-group-item"><a href="#">Dapibus ac facilisis in</a></li>
                <li class="list-group-item"><a href="#">Morbi leo risus</a></li>
                <li class="list-group-item"><a href="#">Porta ac consectetur ac</a></li>
                <li class="list-group-item"><a href="#">Vestibulum at eros</a></li>
            </ul>
        </div>

        <div class="col-8">
            <div class="row">
                <div class="list-group ">
                    <?php foreach($articles as $key => $article) : ?>
                    <a href="#" class="list-group-item list-group-item-action flex-column mb-2">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1"><?=$article->title?></h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1"><?=$article->detail?></p>
                        <small>Donec id elit non mi porta.</small>
                    </a>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>

</div>