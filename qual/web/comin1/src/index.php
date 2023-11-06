<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whois Service</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
        <div class="p-5 mb-4 rounded-3">
                <div class="container-fluid py-5">
                        <h1>Whois</h1>
                        <pre>
                                <p>WHOIS is a widely used protocol and system that allows you to retrieve information about domain names, 
IP addresses, and other internet resources. It provides information about the owner, registration date, 
and contact information for a domain name or IP address. WHOIS data is commonly used for domain name 
registration and management, as well as for investigating and resolving issues related to internet resources.</p>
                        </pre>
                        <form method="POST" action="index.php">
                        <div class="input-group mb-3">
                                <input type="text" name="domain" class="form-control col-4" placeholder="ipb.ac.id">
                                <div class="input-group-append">
                                <input type="submit" class="btn btn-primary" value="Submit">
                                </div>
                        </div>
                        </form>
                        <pre>
                        <?php
                        error_reporting(0);
                        $domain = (string)($_POST["domain"]);

                        // Hapus spasi dari awal dan akhir string
                        $domain = trim($domain);

                        if (strpos($domain, ' ') !== false) {
                        echo "domain tidak boleh mengandung spasi.";
                        } else {
                        $response = shell_exec("/usr/bin/whois " . $domain);
                        echo ("\n".$response);  
                        $receive = preg_match("/3 packets transmitted, (.*) received/s", $response, $out);
                        if ($out[1] == "3") {
                                echo "Whois error";
                        } elseif ($out[1] == "0") {
                                echo "Send another domain please";
                        }
                        }
                        ?>
                        </pre>
                </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>
</html>
