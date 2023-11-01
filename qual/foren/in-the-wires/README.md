# in the wires

### Description

**Author: k1nomi**

Saat aku sedang praktikum di labkom, aku iseng2 mencoba menghubungi komputer teman, karena semua komputer di labkom ada dalam satu network yang sama. Rupanya, cara berkomunikasi seperti ini tidak aman dan isi pesannya dapat dilihat oleh siapapun yang menggunakan network labkom (file di bawah adalah hasil tangkapan packet2 yang dikirim di dalam network labkom pada saat itu).

Hint: file `*.pcapng` dapat dianalisis menggunakan tool `Wireshark`. Selamat belajar! ;)

## Attachments
- `capture.pcapng`

### Flag

`agrihack{0nly_us3_3ncrypt3d_c0mmun1cati0n}`

### Proof of Concept
- buka file menggunakan Wireshark
- klik kanan salah satu packet, klik "follow TCP stream"
- di stream nomor 3, ditemukan sebuah percakapan yang mengandung sebuah link
- di link tersebut terdapat flag