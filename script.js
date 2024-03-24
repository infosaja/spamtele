// Fungsi untuk mengirim pesan ke Telegram
function sendTelegramMessage(telegram_id, bot_token, message, index) {
    // URL untuk mengirim pesan
    let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${telegram_id}&text=${encodeURIComponent(message)}`;

    // Mengirim permintaan HTTP GET menggunakan Fetch API
    fetch(url)
        .then(response => response.json()) // Mengubah respon menjadi objek JSON
        .then(data => {
            // Memeriksa apakah pesan berhasil dikirim berdasarkan respon dari API Telegram
            if (data.ok) {
                console.log(`Pesan ${index} berhasil dikirim`);
            } else {
                console.error(`Pesan ${index} gagal dikirim. Error: ${data.description}`);
            }
        })
        .catch(error => {
            console.error(`Pesan ${index} gagal dikirim. Error: ${error}`);
        });
}

// Mendapatkan data dari form
let telegram_id = document.getElementById('telegram_id').value;
let bot_token = document.getElementById('bot_token').value;
let message = "HALLO SAYA ADALAH SALAH SATU TARGET ANDA , SAYA SENGAJA MENGIRIM SPAMING KEPADA ANDA, SEMOGA CEPAT TAUBAT, TUTOR SPAM ADA DI YT RID TURTLE";

// Loop untuk mengirim pesan sebanyak 4x
for (let i = 0; i < 499999; i++) {
    sendTelegramMessage(telegram_id, bot_token, message, i);
}
