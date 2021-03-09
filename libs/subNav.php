<?php

$files = scandir("./".$path);

?>

<style>
    #sub-nav ul{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
    }

    #sub-nav ul li{
        list-style: none;
        
    }
</style>

<nav id="sub-nav">
    <ul>
<?php 
    foreach ($files as $f) : 
        if(  str_ends_with($f, '.html')  ) :
?>
            <li>
                <a href="<?=str_replace(".html","",$f)?>"><?=str_replace(".html","",$f)?></a>
            </li>
        <?php endif ?>
    <?php endforeach ?>
</ul>
</nav>