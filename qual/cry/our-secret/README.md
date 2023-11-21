# our secret

### Description

**Author**: `k1nomi`

Bolehkah kita berbagi rahasia secara Diffie-Hellman 😳?

https://en.wikipedia.org/wiki/Diffie–Hellman_key_exchange

## Attachments
- `server.py`

### Flag

`agrihack{bay4ngk4n_b1sa_b3rtuk4r_k3y_t4np4_h4rus_k3t3muan_l4ng5ung_:o}`

### Proof of Concept
- pilih integer b bebas
- hitung B dari b
- hitung shared secret (s) dari A dan b
- kirim B ke server, dapat encrypted flag
- decrypt flag menggunakan AES