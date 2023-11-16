<?php
fscanf(STDIN,'%d',$n);
$nums = [];
for($i=0; $i<$n; $i++) $nums[] = intval(fgets(STDIN));
sort( $nums );
ob_start();
foreach($nums as $num) echo $num . "\n";
ob_flush();
