# Merry-Go

### Description

**Author: glitchgoo**

I swear i saved an image file, but why did it become a text file?

## Attachments
- `Merry.txt`

### Flag

`Agrihack{y0u_c4N_R3nder_TH3_1m4ge_fR0m_t3xT__fdjasdgqguiyq}`

### Proof of Concept
- render image dari base64
- cek gambar menggunakan exiftool
- pada comment terdapat string yang merupakan passphrase
- ekstrak flag dengan steghide menggunakan passphrase yang telah ditemukan
