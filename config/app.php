<?php
return array (
  'debug' => true,
  'plugins' => 
  array (
    'Bake' => '/mnt/d/sunday00/private/2020/cakephp-crash/vendor/cakephp/bake/',
    'Cake/TwigView' => '/mnt/d/sunday00/private/2020/cakephp-crash/vendor/cakephp/twig-view/',
    'DebugKit' => '/mnt/d/sunday00/private/2020/cakephp-crash/vendor/cakephp/debug_kit/',
    'Migrations' => '/mnt/d/sunday00/private/2020/cakephp-crash/vendor/cakephp/migrations/',
    'SentenceFakerFor8' => '/mnt/d/sunday00/private/2020/cakephp-crash/plugins/SentenceFakerFor8/',
  ),
  'App' => 
  array (
    'namespace' => 'App',
    'encoding' => 'UTF-8',
    'defaultLocale' => 'en_US',
    'defaultTimezone' => 'UTC',
    'base' => false,
    'dir' => 'src',
    'webroot' => 'webroot',
    'wwwRoot' => '/mnt/d/sunday00/private/2020/cakephp-crash/webroot/',
    'fullBaseUrl' => false,
    'imageBaseUrl' => 'img/',
    'cssBaseUrl' => 'css/',
    'jsBaseUrl' => 'js/',
    'paths' => 
    array (
      'plugins' => 
      array (
        0 => '/mnt/d/sunday00/private/2020/cakephp-crash/plugins/',
        1 => '/mnt/d/sunday00/private/2020/cakephp-crash/plugins/',
        2 => '/mnt/d/sunday00/private/2020/cakephp-crash/plugins/',
      ),
      'templates' => 
      array (
        0 => '/mnt/d/sunday00/private/2020/cakephp-crash/templates/',
        1 => '/mnt/d/sunday00/private/2020/cakephp-crash/templates/',
        2 => '/mnt/d/sunday00/private/2020/cakephp-crash/templates/',
      ),
      'locales' => 
      array (
        0 => '/mnt/d/sunday00/private/2020/cakephp-crash/resources/locales/',
        1 => '/mnt/d/sunday00/private/2020/cakephp-crash/resources/locales/',
        2 => '/mnt/d/sunday00/private/2020/cakephp-crash/resources/locales/',
      ),
    ),
  ),
  'Security' => 
  array (
    'salt' => '19c8845b78a27d1d08d3ffd142a708a3a390f07df2f520198944262a72d627d0',
  ),
  'Asset' => 
  array (
  ),
  'Error' => 
  array (
    'errorLevel' => 32767,
    'exceptionRenderer' => 'Cake\\Error\\ExceptionRenderer',
    'skipLog' => 
    array (
    ),
    'log' => true,
    'trace' => true,
    'ignoredDeprecationPaths' => 
    array (
    ),
  ),
  'Debugger' => 
  array (
    'editor' => 'phpstorm',
  ),
  'Session' => 
  array (
    'defaults' => 'php',
  ),
  'Cache' => 
  array (
    'default' => 
    array (
      'className' => 'Cake\\Cache\\Engine\\FileEngine',
      'path' => '/mnt/d/sunday00/private/2020/cakephp-crash/tmp/cache/',
      'url' => NULL,
    ),
    '_cake_core_' => 
    array (
      'className' => 'Cake\\Cache\\Engine\\FileEngine',
      'prefix' => 'myapp_cake_core_',
      'path' => '/mnt/d/sunday00/private/2020/cakephp-crash/tmp/cache/persistent/',
      'serialize' => true,
      'duration' => '+1 years',
      'url' => NULL,
    ),
    '_cake_model_' => 
    array (
      'className' => 'Cake\\Cache\\Engine\\FileEngine',
      'prefix' => 'myapp_cake_model_',
      'path' => '/mnt/d/sunday00/private/2020/cakephp-crash/tmp/cache/models/',
      'serialize' => true,
      'duration' => '+1 years',
      'url' => NULL,
    ),
    '_cake_routes_' => 
    array (
      'className' => 'Cake\\Cache\\Engine\\FileEngine',
      'prefix' => 'myapp_cake_routes_',
      'path' => '/mnt/d/sunday00/private/2020/cakephp-crash/tmp/cache/',
      'serialize' => true,
      'duration' => '+1 years',
      'url' => NULL,
    ),
  ),
  'EmailTransport' => 
  array (
    'default' => 
    array (
      'className' => 'Cake\\Mailer\\Transport\\MailTransport',
      'host' => 'localhost',
      'port' => 25,
      'timeout' => 30,
      'client' => NULL,
      'tls' => false,
      'url' => NULL,
      'username' => NULL,
      'password' => NULL,
    ),
  ),
  'Email' => 
  array (
    'default' => 
    array (
      'transport' => 'default',
      'from' => 'you@localhost',
    ),
  ),
  'Datasources' => 
  array (
    'default' => 
    array (
      'className' => 'Cake\\Database\\Connection',
      'driver' => 'Cake\\Database\\Driver\\Mysql',
      'persistent' => false,
      'timezone' => 'UTC',
      'flags' => 
      array (
      ),
      'cacheMetadata' => true,
      'log' => false,
      'quoteIdentifiers' => false,
      'host' => '192.168.123.56',
      'port' => '3306',
      'username' => 'sunday00',
      'password' => 'zktm500cc',
      'database' => 'cake_crash',
      'url' => NULL,
    ),
    'test' => 
    array (
      'className' => 'Cake\\Database\\Connection',
      'driver' => 'Cake\\Database\\Driver\\Mysql',
      'persistent' => false,
      'timezone' => 'UTC',
      'flags' => 
      array (
      ),
      'cacheMetadata' => true,
      'quoteIdentifiers' => false,
      'log' => false,
      'host' => '192.168.123.56',
      'port' => '3306',
      'username' => 'sunday00',
      'password' => 'zktm500cc',
      'database' => 'cake_crash',
      'url' => NULL,
    ),
    'debug_kit' => 
    array (
      'className' => 'Cake\\Database\\Connection',
      'driver' => 'Cake\\Database\\Driver\\Mysql',
      'persistent' => false,
      'timezone' => 'UTC',
      'flags' => 
      array (
      ),
      'cacheMetadata' => true,
      'quoteIdentifiers' => false,
      'log' => false,
      'host' => '192.168.123.56',
      'port' => '3306',
      'username' => 'sunday00',
      'password' => 'zktm500cc',
      'database' => 'cake_crash',
      'url' => NULL,
    ),
  ),
  'Log' => 
  array (
    'debug' => 
    array (
      'className' => 'Cake\\Log\\Engine\\FileLog',
      'path' => '/mnt/d/sunday00/private/2020/cakephp-crash/logs/',
      'file' => 'debug',
      'url' => NULL,
      'scopes' => false,
      'levels' => 
      array (
        0 => 'notice',
        1 => 'info',
        2 => 'debug',
      ),
    ),
    'error' => 
    array (
      'className' => 'Cake\\Log\\Engine\\FileLog',
      'path' => '/mnt/d/sunday00/private/2020/cakephp-crash/logs/',
      'file' => 'error',
      'url' => NULL,
      'scopes' => false,
      'levels' => 
      array (
        0 => 'warning',
        1 => 'error',
        2 => 'critical',
        3 => 'alert',
        4 => 'emergency',
      ),
    ),
    'queries' => 
    array (
      'className' => 'Cake\\Log\\Engine\\FileLog',
      'path' => '/mnt/d/sunday00/private/2020/cakephp-crash/logs/',
      'file' => 'queries',
      'url' => NULL,
      'scopes' => 
      array (
        0 => 'queriesLog',
      ),
    ),
  ),
);