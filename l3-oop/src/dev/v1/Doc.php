<?php

namespace Dev\v1;

use \OpenApi\Generator;

class Doc
{

  private $list;

  public function __construct() {
    $this->list = Generator::scan([
      __DOCUMENT_ROOT__.'/../src/api/v1',
    ]);
  }  

  public function json()
  {
    echo $this->list->toJSON();
  }

  public function ui()
  {
    $swaggerPath = "/vendor/swagger-api/swagger-ui/dist";
    $protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://';
    $hostname=$_SERVER["HTTP_HOST"];
    $fullSiteName = $protocol.$hostname;

    include(__DOCUMENT_ROOT__.'/swagger-ui.php');
  }
}