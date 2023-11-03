#!/bin/python3

from Crypto.Util.number import bytes_to_long, getPrime

with open('flag.txt', 'r') as f:
    FLAG = f.read()
    FLAG = FLAG.encode()

m = bytes_to_long(FLAG)
e = 0x10001
p = getPrime(1024)
q = getPrime(1024)
n = p*q
pplusqplus = (p+77)*(q+69)
c = pow(m,e,n)

print(f"c = {c}")
print(f"e = {e}")
print(f"n = {n}")
print(f"what = {pplusqplus}")