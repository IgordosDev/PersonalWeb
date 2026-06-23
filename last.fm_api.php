<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");
$curlSession = curl_init();
$api_user = $_ENV["lfm.user"];
$api_key = $_ENV["lfm.key"];
$url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=$api_user&api_key=$api_key&format=json&limit=1";
curl_setopt($curlSession, CURLOPT_URL, $url);
curl_setopt($curlSession, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curlSession, CURLOPT_TIMEOUT, 10); 

$response = curl_exec($curlSession);
if ($response === false) {
    http_response_code(500);
    echo json_encode([
        "error" => true,
        "message" => curl_error($curlSession)
    ]);
    curl_close($curlSession);
    exit;
}

curl_close($curlSession);
echo $response;
?>