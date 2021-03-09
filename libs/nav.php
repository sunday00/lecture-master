<?php

$dirs = scandir("./");

?>

<style>
    #main-nav li {
        display: inline;
    }
</style>

<nav id="main-nav">
    <ul>
<?php foreach( $dirs as $dir ) : ?>
    <?php if( preg_match('/l[0-9]{1,2}/', $dir) ) : ?>
        <li>
            <a href="/<?=str_replace('-','_',$dir)."/1"?>"><?=$dir?></a>
        </li>
    <?php endif ?>
<?php endforeach ?>
    </ul>
</nav>