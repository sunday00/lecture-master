<?php 

namespace Dev\v1;

use \Faker\Factory;
use \FakerRestaurant\Provider\en_US\Restaurant;

class FruitSeeder
{
  public function generate(array $param)
  {
    $faker = Factory::create();
    $faker->addProvider(new Restaurant($faker));

    $arr = [];
    $names = [];

    function getUniqueFruit($names, $faker){
      $name;
      if( count($names) < 20 ) :
        $name = $faker->fruitName();
      elseif (count($names) < 40): 
        $name = $faker->vegetableName();
      elseif (count($names) < 50): 
        $name = $faker->meatName();
      elseif (count($names) < 55): 
        $name = $faker->dairyName();
      elseif (count($names) < 60): 
        $name = $faker->beverageName();
      else: 
        dd('we don`t have more unique.');
        exit();
      endif;

      if( !in_array($name, $names) ){
        return $name;
      };

      return getUniqueFruit($names, $faker);
    }


    for( $i=0; $i<$param['cnt']; $i++ ){
      $name = getUniqueFruit($names, $faker);
      $names[$i] = $name;
      $arr[$i]['name'] = $name;
      $arr[$i]['price'] = $faker->numberBetween(100, 500);
      $arr[$i]['isStock'] = $faker->boolean();
    }

    foreach($arr as $r){
      echo $r['name'];
      echo ",";
      echo $r['price'];
      echo ",";
      echo $r['isStock'] ? 'T' : 'F';
      echo "<br />";
    }
  }
}