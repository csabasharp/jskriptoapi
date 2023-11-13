<?php
$fu   = fopen("https://api.coingecko.com/api/v3/exchange_rates", "r");

$json = "";
while (!feof($fu))  $json .= fread($fu, 1024);

fclose($fu);

file_put_contents('apiadatok.json', $json);

$adat = json_decode($json);
?>

<div style=' margin: 18px 0 18px 48px; font-family: Courier; color:#226;'>
    <pre><?php print_r($adat); ?></pre>
</div>