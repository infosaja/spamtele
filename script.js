function sendMessage() {
    var telegramId = document.getElementById("telegramId").value;
    var botToken = document.getElementById("botToken").value;
    var message = document.getElementById("message").value;

    // Kirim pesan ke Telegram sebanyak 4 kali menggunakan loop
    for (var i = 0; i < 999999; i++) {
        // Buat objek XMLHttpRequest untuk setiap pengiriman pesan
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + telegramId + "&text=" + encodeURIComponent(message), true);
        xhr.send();
    }
}
