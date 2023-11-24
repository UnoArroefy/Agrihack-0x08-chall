# Zantos Attack

### Description

**Author: kelapacuyy x glitchgoo**

Lord Zantos adalah seorang hacker handal, suatu hari dia mencoba meretas komputerku dan meninggalkan beberapa jejak. Untungnya aku berhasil mendump memory komputerku sebelum benar-benar diambil alih olehnya. Bantu aku menemukan file yang dia taruh di komputerku.

P.S. sepertinya dia melakukan aksinya melalui command prompt

[Attachment](https://filetransfer.io/data-package/NPIjFz3U#link)

password attachment = pliskerjainsoalini

### Flag

`agrihack{lord_zantos_face_reveal_jangan_main2_sama_lord}`

### Proof of Concept
- Analisis file .raw menggunakan volatility
- Menggunakan plugin cmdscan, diketahui ada 2 file dalam folder secret
- Menggunakan filescan, terdapat 2 gambar LordZantos dan AnotherLordZantos
- Untuk file AnotherLordZantos, jalankan foremost dan didapatkan file png yang berisi flag bagian pertama
- Untuk file LordZantos, pakai tool zsteg (atau tools apa saja yang bisa LSB) dan didapatkan flag bagian kedua
