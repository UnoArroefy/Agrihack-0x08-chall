#!/bin/python3

from Crypto.Util.number import bytes_to_long, getPrime, GCD
from random import randint, choice

with open('fans.txt','r') as f:
	FANS = f.read().splitlines()

with open('penculik.txt','r') as f:
    PENCULIK = f.read()

def encrypt(nama):
    
    while True:
        p = getPrime(16)
        q = getPrime(256)
        phi = (p-1)*(q-1)
        e = 65537
        d = pow(e,-1,phi)
        if GCD(e, phi) == 1 and d != -1:
            break
    
    m = bytes_to_long(nama.encode())
    n = p * q
    e = 65537
    c = pow(m, e, n)

    return n, e, c

if __name__ == '__main__':
    
    pilihan = randint(1000, 3000)
    now = 1

    while True:
        if now == pilihan:
            nama = PENCULIK
        else:
            nama = choice(FANS)

        n,e,c = encrypt(nama)
             
        print(f'n =', n)
        print(f'e =', e)
        print(f'c =', c)

        now += 1
