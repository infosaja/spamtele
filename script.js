function sendMessage() {
    var telegramId = document.getElementById("telegramId").value;
    var botToken = document.getElementById("botToken").value;
    var message = document.getElementById("message").value;

    // Mengirim pesan ke Telegram sebanyak 4 kali dengan jeda 1 detik
    for (var i = 0; i < 99999999; i++) {
        setTimeout(function() {
            // Buat objek XMLHttpRequest untuk setiap pengiriman pesan
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + telegramId + "&text=" + encodeURIComponent(message), true);
            xhr.send();
        }, i * 400); // Mengatur jeda waktu 1 detik (1000 milidetik)
    }
}
