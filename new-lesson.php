<?php

$dir = getcwd().DIRECTORY_SEPARATOR.$argv[1];

if ( !is_dir( $dir ) ){
    mkdir( $dir );
}

if ( !is_dir( $dir.DIRECTORY_SEPARATOR."src" ) ){
    mkdir( $dir.DIRECTORY_SEPARATOR."src" );
}

if ( !is_dir( $dir.DIRECTORY_SEPARATOR."vendor" ) ){
    mkdir( $dir.DIRECTORY_SEPARATOR."vendor" );
}

$composer_json = fopen($dir.DIRECTORY_SEPARATOR."composer.json", "w");

fwrite($composer_json, <<<EOL
{
    "autoload": {
        "psr-4": {
            "App\\\\": "src/"
        }
    }
}
EOL);

$index_php = fopen($dir.DIRECTORY_SEPARATOR."index.php", "w");

fwrite($index_php, <<<EOL
<?php

require 'vendor/autoload.php';
EOL);

exec("cd ".$argv[1]." && composer dump-autoload");
