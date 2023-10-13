<?php
error_reporting(0);
if (isset($_GET['file'])) {
    $file = $_GET['file'];
    $file_contents = file_get_contents($file);
} else {
    $file_contents = "Pilih file untuk dibaca.";
    $file = "Belum input nama file!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Inklusi0x0</title>
</head>
<body>
    <div class="container">
        <h1>File: <?php echo $file; ?></h1>
        <pre><?php echo htmlspecialchars($file_contents); ?></pre>
        <a href="index.php">Kembali ke Halaman Utama</a>
    </div>
</body>
</html>
