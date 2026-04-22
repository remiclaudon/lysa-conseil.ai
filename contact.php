<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name    = htmlspecialchars(trim($input['name']    ?? ''));
$company = htmlspecialchars(trim($input['company'] ?? ''));
$email   = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($input['subject'] ?? ''));
$message = htmlspecialchars(trim($input['message'] ?? ''));

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Champs obligatoires manquants']);
    exit;
}

$to      = 'remi.claudon@lysa-conseil.ai';
$subject_line = 'Nouveau message depuis Lysa Conseil' . ($subject ? ' — ' . $subject : '');

$body  = "Nom : $name\n";
$body .= "Entreprise : $company\n";
$body .= "Email : $email\n";
$body .= "Sujet : $subject\n\n";
$body .= "Message :\n$message\n";

$headers  = "From: contact@lysa-conseil.ai\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject_line, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erreur lors de l\'envoi']);
}
