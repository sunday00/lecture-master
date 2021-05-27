<div class="container">

    <div class="row">
        <div class="col-4">
            <h3 style="color: #fff;" class="bg-info text-capitalize p-1">Recent Post</h3>
            <ul class="list-group list-group-flush">
                <?php foreach($recent as $id => $title) : ?>
                    <li class="list-group-item">
                        <a href="<?= $this->Url->build([
                            'controller' => 'Blog',
                            'action' => 'view',
                            $id
                        ]) ?>"><?=$title?></a>
                    </li>
                <?php endforeach ?>
            </ul>
        </div>

        <div class="col-8">
            <div class="row">
                <div class="list-group ">
                    <?php foreach($articles as $key => $article) : ?>
                    <a href="<?= $this->Url->build([
                            'controller' => 'Blog',
                            'action' => 'view',
                            $article->id
                        ]) ?>" class="list-group-item list-group-item-action flex-column mb-2">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1"><?=$article->title?></h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">
                            <?=$this->Text->truncate($article->detail, 200, [
                                'ellipsis' => '...',
                            ])?>
                        </p>
                        <small>Donec id elit non mi porta.</small>
                    </a>
                    <?php endforeach ?>
                </div>
            </div>
            <div>
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <?= $this->Paginator->first() ?>
                        <?= $this->Paginator->prev() ?>
                        <?= $this->Paginator->numbers() ?>
                        <?= $this->Paginator->next() ?>
                        <?= $this->Paginator->last() ?>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</div>