# hiu kawat v1

### Description

**Author: kelapacuyy**

Let's do network analysis! I’ve been capturing network packet data to see if anyone is careless enough to send their passwords over non-secure protocols.

## Attachments
- `capt1.pcapng`

### Flag

`agrihack{http_is_vulnerable_to_network_sniffing}`

### Proof of Concept
- buka file menggunakan Wireshark
- klik kanan salah satu packet, klik "follow TCP stream"
- di stream nomor 19, ditemukan input username dan password dari sebuah akun beserta link webnya
- login ke web menggunakan tersebut
- terdapat file flag
