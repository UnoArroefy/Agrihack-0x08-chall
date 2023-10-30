#!/bin/python3 

import sys, random

def main():
    print("Jawab 10000 pertanyaan matematika dibawah untuk mendapat flag", flush=True)

    for i in range(10000):
        a = random.randint(1,255)
        b = random.randint(1,255)
        format = f"{a} {random.choice(['-', '+', '%', '*', '//'])} {b}"
        c = eval(format)
        inp = int(input(f"Pertanyaan ke-{i+1}\n" + format + " = "))

        if inp != c:
            print("Maaf kamu perlu belajar matematika lagi ya", flush=True)
            sys.exit()

    print("Selamat Kamu Berhasil menjawab semua pertanyaan, ini hadiahnya")
    print("agrihack{menggunakan_pwntools_demi_kehidupan_yang_lebih_sejahtera_ygy}")
    sys.exit()

if __name__ == "__main__":
    main()