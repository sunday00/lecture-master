<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcc48d496f4a2a7653fec15780dff674b
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitcc48d496f4a2a7653fec15780dff674b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitcc48d496f4a2a7653fec15780dff674b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
