<?php

// Mengambil data dari form
$telegram_id = $_POST['telegram_id'];
$bot_token = $_POST['bot_token'];

// Pesan yang akan dikirim
$message = "HALLO KAMI ADALAH KORBAN APK SADAP ANDA DAN DI KASI TAU RXLSTORE CARA SPAM TELEGRAM ANDA";

// Loop untuk mengirim pesan sebanyak 4x
for ($i = 0; $i < 1002; $i++) {
    $response = sendTelegramMessage($telegram_id, $bot_token, $message, $i);
    if ($response['ok']) {
        echo "Pesan $i berhasil dikirim<br>";
    } else {
        echo "Pesan $i gagal dikirim. Error: " . $response['description'] . "<br>";
    }
}

// Fungsi untuk mengirim pesan ke Telegram
function sendTelegramMessage($chat_id, $token, $message, $index) {
    $url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message);
    $response = file_get_contents($url);
    return json_decode($response, true);
}

echo "Semua pesan telah berhasil dikirim!";
?>
