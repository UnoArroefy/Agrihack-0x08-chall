# Hash: Intro I

### Description

Hashing adalah sebuah metode untuk mengubah data menjadi sebuah string yang panjangnya tetap. Algoritma hash merupakan fungsi satu arah, artinya apabila diberikan hasil hash dari suatu data, akan sangat sulit untuk menerka data aslinya. Oleh karena itu, biasanya password disimpan di database dalam bentuk hash. 

Meskipun begitu, untuk beberapa value hash, kita bisa mengetahui data aslinya menggunakan tool yang tersedia online. Untuk soal ini, cobalah "crack" value hash MD5 berikut, lalu hasilnya wrap dengan "agrihack{}": "46ee178f8cff0e71d96f6276ca297e45".

Contoh: agrihack{jawaban}

## Attachments
None

### Flag

`agrihack{ezright}`

### Proof of Concept
- crack nilai hash tersebut menggunakan online tool