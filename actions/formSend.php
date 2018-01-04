<?php

error_reporting(0);
ini_set('display_errors', 0);

if (!(isset($_GET['name']) && isset($_GET['email']) && isset($_GET['message']))) {
	http_response_code(400);
	echo "Kaboomski!";
	die();
}

if (strpos($_SERVER['REMOTE_ADDR'], "localhost") !== false) {
	echo "Email sent.";
	die();
}

$name = $_GET['name'];
$email = $_GET['email'];
$message = $_GET['message'];

$body = "Nimi: " . $name . "\n";
$body = $body . "Sähköposti: " . $email . "\n";
$body = $body . "Viesti: " . $message . "\n";
 

$headers = 'From: pmac.fi' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

if(mail("makela.pra@gmail.com", "Rekryviesti", $body, $headers)) {
	echo "Email sent.";
} else {
	http_response_code(500);
	echo "System error";
}
