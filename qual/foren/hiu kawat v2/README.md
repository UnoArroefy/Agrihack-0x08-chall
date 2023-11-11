# hiu kawat v2

### Description

**Author: kelapacuyy**

You're the person in charge of managing the computer systems in the company. The boss starts to suspect that two employees are up to something fishy. The boss can't catch them messaging, but the suspicion is, they're swapping more than just words. The mystery grows when there’s a slight increase in network activity during break times. This suggests that the employees might be using a hidden method to communicate over the company’s network.

## Attachments
- `capt2.pcapng`

### Flag

`agrihack{exporting_files_transferred_through_the_wire}`

### Proof of Concept
- buka file menggunakan Wireshark
- di menu bagian atas, klik file --> export objects --> HTTP
- terdapat 19 gambar, urutkan berdasarkan nomornya
- flag terdapat di gambar tersebut
