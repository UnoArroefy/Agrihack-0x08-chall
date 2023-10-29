#!/bin/python3

from random import randint
import time

def binserEasy():
    print("\033c", flush=True)
    print(f"\n{'Tebak Angka Berhadiah!!': ^50}\n{'anda diberikan 7 kesempatan untuk menebaknya': ^50}\n{'lesgo': ^50}\n", flush=True)

    a = 1
    b = 128

    for _ in range(7):
        try:
            inp = int(input(f"masukkan angka (1 - 128): "))
        except:
            print("masukkan bilangan bulat yaa..")
            break

        if inp < a or inp < (a+b)//2:
            print("kekecilan")
        elif inp > b or inp > (a+b)//2:
            print("kebesaran")
        elif inp == (a+b)//2:
            if (b - a) / 2 == 1:
                print("congrats")
                print("agrihack{lupa_ngapus_printnya_nahINI_baru_benar}")
                break
            rand = randint(0, 1)
            if rand:
                print("kebesaran")
                b = inp
            else:
                print("kekecilan")
                a = inp

def binserHard():
    print("\033c", flush=True)
    print(f"\n{'Tebak Angka Berhadiah!!': ^55}\n{'anda diberikan 100 kesempatan dan waktu 150 detik': ^55}\n{'lesgo': ^55}\n", flush=True)

    timer = time.time()

    a = 1
    b = 1267650600228229401496703205376
    
    for _ in range(100):
        if time.time() - timer > 150:
            break

        try:
            inp = int(input(f"masukkan angka (1 - 1267650600228229401496703205376): "))
        except:
            print("masukkan bilangan bulat yaa..")
            break

        if inp < a or inp < (a+b)//2:
            print("kekecilan")
        elif inp > b or inp > (a+b)//2:
            print("kebesaran")
        elif inp == (a+b)//2:
            if (b - a) / 2 == 1:
                print("congrats")
                print("agrihack{pwntools_really_helps_me_ORZzz}")
                break
            rand = randint(0, 1)
            if rand:
                print("kebesaran")
                b = inp
            else:
                print("kekecilan")
                a = inp

def main():
    print("\033c", flush=True)
    print(f"{'Selamat Datang di Festival Binseria': ^50}\n{'Terdapat 2 opsi permainan': ^50}\n\n[1]{'easy': ^44}[1]\n[2]{'hard': ^44}[2]\n", flush=True)
    try:
        inp = int(input("(1 / 2) > "))

        if inp != 1 and inp != 2:
            raise Exception
        elif inp == 1:
            binserEasy()
        else:
            binserHard()
    except:
        print("Pilihan belum ada mase")

if __name__ == "__main__":
    main()