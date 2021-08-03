<?php

namespace Dev\v1;

use Models\FruitStock as model;

class FruitStock
{
  public function index()
  {
    ini_set('auto_detect_line_endings', true);
    // 구 리눅스, 맥, 윈도우즈 등의 리턴이 \r \n 등 각기 다른 점을 보완
    // 특히 csv, ssv, tsv등은 행 구분은 comma, space, tab 이지만,
    // 열구분은 리턴으로 구분하므로 이 파일이 어느 디바이스에서
    // 작성되었는지에따라 오차가 생긴다. 이 설정은 이를 찾아내는 것.

    // 이 설정을 하면 fread 등에서 그런 줄바꿈을 찾긴하지만 
    // 해당 줄바꿈을 탐색하기 위해 약간의 성능소모가 있다고 함

    $csv = fopen(__SERVER_ROOT__.'/l4-cordova/statics/data.csv', 'r');

    $arr = [];
    while( ($row = fgetcsv($csv)) != false ):
      $arr[] = $row;
    endwhile;
    fclose($csv);

    unset($arr[0]); //header 부분 제거

    // $convertedArr = [];
    // foreach($arr as $k => $v) : 
    //   $convertedArr[$k]['name'] = $v[0];
    //   $convertedArr[$k]['price'] = $v[1];
    //   $convertedArr[$k]['isStock'] = $v[2] == 'T' ? true : false;
    // endforeach;
    $model = new model();
    foreach($arr as $a) : 
      $model->insert($a);
    endforeach;


  }

}