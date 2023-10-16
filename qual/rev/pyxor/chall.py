#! /bin/python3

enc = [50, 18, 2, 12, 26, 50, 80, 8, 9, 1, 59, 44, 26, 50, 14, 6, 0, 32, 49, 44, 21, 33, 71, 83, 66, 11, 43, 39, 29, 17, 17, 45, 62, 82, 10, 28, 58, 23, 27, 14, 31, 58, 6, 14, 26, 11, 48, 69, 32, 108, 27, 29, 23, 27, 33, 26, 47, 44, 45, 52, 102, 80, 1, 22, 43, 7, 27, 5, 4, 28, 72, 4, 49, 1, 68, 100, 108, 49, 67, 2, 60, 7, 42, 63, 75, 61, 46]

def xor(a:bytes, b:bytes) -> bytes:
    return bytes([b[i % len(b)] ^ j for i, j in enumerate(a)])

while True:
    secret = input("input secret: ").encode()
    try:
        flag = xor(bytes(enc), secret)
        if b'agrihack' in flag[:8]:
            print('correct, sambit gan!')
            print(flag.decode())
            break
        else:
            print("better luck nextime")
            break
    except:
        print("something wrong")
        continue