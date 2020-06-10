<?php

require ('vendor/autoload.php');

use Symfony\Component\Finder\Finder;

// $files = Finder::create()->in('sample');
$files = Finder::create()->in('sample')
    ->name("*.txt")
    ->contains("/^a/");

foreach( $files as $file ){
    var_dump($file->getRealPath());
    $content = $file->getContents();

    var_dump($content);

    $update = str_replace("a","b",$content);
    var_dump($update);

    $result = file_put_contents( $file->getRealPath(), $update );
    var_dump($result);

    echo "<br />";
}

