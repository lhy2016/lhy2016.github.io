<?php 
  session_start();
  require 'mailgunInit.php';
  
  $errors = [];
  if (isset($_POST['contact'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Name is empty';
    }
    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }
    if (empty($subject)) {
      $errors[] = 'Subject is empty';
    } 
    if (empty($message)) {
        $errors[] = 'Message is empty';
    }
    if (!empty($errors)) {
      $allErrors = join('\n', $errors);
      $_SESSION["message"] = $allErrors;
    } else {
      $cookieName = "lastMailTS";
      $cur = time();
      if (!isset($_COOKIE[$cookieName]) || $cur - $_COOKIE[$cookieName] > 180) {
        $toEmail = 'lhy920104@gmail.com';
        $bodyParagraphs = ["Personal Website Contact Form", "Name: {$name}", "Email: {$email}", "Message:", $message];
        $body = join("\n", $bodyParagraphs);
        
        
        $domain = "sandbox4a288be1af0f4538bf9981d806061724.mailgun.org";
        # Make the call to the client.
        $result = $mgClient->messages()->send($domain,[
          'from'	=> 'Heroku <postmaster@sandbox4a288be1af0f4538bf9981d806061724.mailgun.org>',
          'to'	=> 'Haoyang <lhy920104@gmail.com>',
          'subject' => "Personal Page Heroku: " . $subject,
          'text'	=> $body
        ]); 
        if (true) {
            setcookie($cookieName, time(), time() + (86400));
            $_SESSION["message"] = "Succeed. I will get back to you shortly.";
        } else {
            $_SESSION["message"] = 'Oops, something went wrong. Please try again later';
        }
      } else {
        $_SESSION["message"] = "Please wait ". (180 - ($cur - $_COOKIE[$cookieName])) ." s to send another email.";
      }
    }
  }
  header("Location: index.php#contact");
?>