<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telegram Bot Sender</title>
    <style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    color: #333;
}

form {
    text-align: center;
}

label {
    display: block;
    margin-bottom: 10px;
    color: #555;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

input[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}

input[type="submit"]:focus {
    outline: none;
}

/* Responsive */
@media screen and (max-width: 768px) {
    .container {
        max-width: 90%;
    }
}

</style>
</head>
<body>
    <h2>Kirim Pesan Telegram 1000++++</h2>
    <form action="send_message.php" method="POST">
        <label for="telegram_id">ID Telegram:</label><br>
        <input type="text" id="telegram_id" name="telegram_id"><br>
        <label for="bot_token">Token Bot:</label><br>
        <input type="text" id="bot_token" name="bot_token"><br><br>
        <input type="submit" value="Mulai">
    </form>
</body>
</html>