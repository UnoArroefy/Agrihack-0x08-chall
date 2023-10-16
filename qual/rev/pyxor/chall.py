#! /bin/python3

enc = [18, 21, 6, 39, 88, 21, 17, 7, 2, 23, 61, 43, 59, 111, 31, 28, 3, 46, 44, 49, 21, 60, 68, 68, 66, 2, 38, 7, 26, 21, 58, 111, 25, 19, 5, 23, 44, 17, 28, 47, 66, 43, 28, 13, 20, 22, 45, 69, 61, 111, 12, 29, 30, 22, 1, 29, 43, 7, 111, 19, 39, 95, 10, 0, 45, 0, 58, 88, 21, 6, 75, 10, 44, 28, 68, 121, 111, 38, 67, 11, 49, 39, 45, 59, 96, 127, 9]

def xor(a:bytes, b:bytes) -> bytes:
    return bytes([b[i % len(b)] ^ j for i, j in enumerate(a)])

while True:
    secret = input("input secret: ").encode()
    try:
        flag = xor(bytes(enc), secret)
        if b'agrihack{' in flag[:9] and flag[-1] == 125:
            print('correct, sambit gan!')
            print(flag.decode())
            break
        else:
            print("better luck nextime")
            break
    except:
        print("something wrong")
        continue