<?php 
 require_once __DIR__ . '/vendor/autoload.php';
    
 $client = new Google\Client();
 $client->setAuthConfig('credentials.json');
 $client->addScope(Google\Service\Drive::DRIVE_READONLY);
 $redirect_uri = 'http://' . $_SERVER['HTTP_HOST'] . '/googleDrive.php';
 $client->setRedirectUri($redirect_uri);
 $auth_url = $client->createAuthUrl();
 echo $auth_url;
 header('Location: ' .  filter_var($auth_url, FILTER_SANITIZE_URL));
 
 ?>