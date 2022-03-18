<?php 
 require_once __DIR__ . '/vendor/autoload.php';
 session_start();
 
 $client = new Google\Client();
 $client->setAuthConfig('credentials.json');
 $client->addScope(Google\Service\Drive::DRIVE_READONLY);
 $redirect_uri = 'https://' . $_SERVER['HTTP_HOST'] . '/googleDrive.php';
 $client->setRedirectUri($redirect_uri);


 if (! isset($_GET['code'])) {
    $auth_url = $client->createAuthUrl();
    header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));
  } else {
    $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $_SESSION['access_token'] = $client->getAccessToken();
    $redirect_uri = 'http://' . $_SERVER['HTTP_HOST'] . '/';
    header('Location: ' . filter_var($redirect_uri, FILTER_SANITIZE_URL));
  }


 
 ?>