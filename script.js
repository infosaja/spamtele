function sendMessage() {
    var telegramId = document.getElementById("telegramId").value;
    var botToken = document.getElementById("botToken").value;
    var message = document.getElementById("message").value;
    var statusElement = document.getElementById("status");

    // Mengirim pesan ke Telegram sebanyak 4 kali dengan jeda 1 detik
    for (var i = 0; i < 4; i++) {
        setTimeout(function() {
            // Buat objek XMLHttpRequest untuk setiap pengiriman pesan
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + telegramId + "&text=" + encodeURIComponent(message), true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        statusElement.innerHTML += "Pesan berhasil terkirim.<br>";
                    } else {
                        statusElement.innerHTML += "Gagal mengirim pesan. Status: " + xhr.status + "<br>";
                    }
                }
            };
            xhr.send();
        }, i * 100); // Mengatur jeda waktu 1 detik (1000 milidetik)
    }
}
