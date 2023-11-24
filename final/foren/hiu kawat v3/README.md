# hiu kawat v3

### Description

**Author: kelapacuyy**

An employee has reported that their laptop is not working properly. We’ve collected all possible evidence from the potentially affected laptop and noticed an abnormal amount of USB traffic. Can you figure out what information might have been exposed?

## Attachments
- `capt3.pcapng`

### Flag

`agrihack{th15_1s_s1mpl3_k3yl0g93r}`

### Proof of Concept
- buka file menggunakan wireshark
- terdapat banyak URB_INTERRUPT in dimana terdapat packet data yang ditransfer
- jika dilihat menggunakan filter `usb.transfer_type == 0x01 && usb.data_len == 8`, terlihat leftover capture data pada tiap frame
- cocokkan secara manual berdasarkan mapping keyboard (referensi : https://usb.org/sites/default/files/documents/hut1_12v2.pdf)
- atau gunakan solver
