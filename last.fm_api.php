<?php
    $curlSession = curl_init();
    $api_user = $_ENV["lfm.user"];
    $api_key = $_ENV["lfm.key"];
    curl_setopt($curlSession, CURLOPT_URL, "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=$api_user&api_key=$api_key&format=json&limit=1");
    curl_setopt($curlSession, CURLOPT_BINARYTRANSFER, true);
    curl_setopt($curlSession, CURLOPT_RETURNTRANSFER, true);
    
    $jsonData = json_decode(curl_exec($curlSession));
    curl_close($curlSession);
    
    header("Content-Type: application/json");
    echo json_encode($jsonData);
?>