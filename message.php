<?php 
  require 'mailgunInit.php';
  $errors = [];
  $ret = array();
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
      header('HTTP/1.1 400 ' . $allErrors);
      echo json_encode(array());
    } else {
      try {
        $toEmail = 'lhy920104@gmail.com';
        $bodyParagraphs = ["Personal Website Contact Form", "Name: {$name}", "Email: {$email}", "Message:", $message];
        $body = join("\n", $bodyParagraphs);
        
        
        $domain = "haoyangliu.com";
        # Make the call to the client.
        $result = $mgClient->messages()->send($domain,[
          'from'	=> 'lhyHome <mailgun@haoyangliu.com>',
          'to'	=> 'Haoyang <lhy920104@gmail.com>',
          'subject' => "Personal Page Heroku: " . $subject,
          'text'	=> $body
        ]); 
        $ret["message"] = "Succeed! I'll get back to you shortly.";
        echo json_encode($ret);
      } catch(Exception $e) {
        header('HTTP/1.1 500 Something went wrong on the server side, please try again later');
        echo json_encode(array());
      }
    }
  }
  // header("Location: index.php#contact");
?>