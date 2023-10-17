<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ping Service</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
        <div class="p-5 mb-4 rounded-3">
                <div class="container-fluid py-5">
                        <h1>Send your IP</h1>
                        <form method="POST" action="index.php">
                        <div class="input-group mb-3">
                                <input type="text" name="ip" class="form-control col-4" placeholder="8.8.8.8">
                                <div class="input-group-append">
                                <input type="submit" class="btn btn-primary" value="Submit">
                                </div>
                        </div>
                        </form>
                        <pre>
                        <?php
                        error_reporting(0);
                        $ip = (string)($_POST["ip"]);
                        $response = shell_exec("ping -c 3 " . $ip);
                        echo ("\n".$response);
                        $receive = preg_match("/3 packets transmitted, (.*) received/s", $response, $out);
                        if ($out[1] == "3") {
                                echo "Ping Komedi";
                        } elseif ($out[1] == "0") {
                                echo "Send another IP please";
                        }
                        ?>
                        <!-- Temukan flag di / -->
                        </pre>
                </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>
</html>
