# their secret

### Description

**Author**: `k1nomi`

Diketahui bahwa Alice dan Bob sedang melakukan pertukaran rahasia menggunakan protokol Diffie-Hellman. Shared secret yang mereka miliki kemudian akan digunakan Alice sebagai key AES untuk meng-encrypt flag. 

Kamu berhasil meng-intercept percakapan mereka dan dapat mengubah pesan yang mereka kirim sesuka hati. Bagaimana kamu bisa mendapatkan flagnya?

## Attachments
- `encrypt.py`

### Flag

`agrihack{bah4ya_cuy_k1ni_al1c3_sh4red_s3cret_ny4_s4ma_ev3_buk4n_sam4_b0b}`

### Proof of Concept
- A dari alice tidak usah diubah
- generate b dan B kita sendiri
- B dari bob diganti menjadi B kita
- sekarang shared secret yang dimiliki alice di-share dengan kita, bukan bob
- hitung shared secret dengan A alice dan b kita
- decrypt flag nya