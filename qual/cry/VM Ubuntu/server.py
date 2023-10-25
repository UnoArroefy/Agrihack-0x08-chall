#!/usr/bin/env python3

from Crypto.Util.number import getPrime
from sympy import primefactors

with open('flag.txt','r') as flag:
	FLAG = flag.read().strip()

p = getPrime(32)
q = getPrime(32)
n = p*q

print(f'n = p*q\np > q \nn = {n}')

kecil, besar = primefactors(n)

ans = int(input(f'Berapakah Nilai p?\nYour Answer = '))

if kecil > besar: 
	kecil, besar = besar, kecil

if ans == besar: 
	print(f'Nice Jawabanmu Benar\nHere Is Your Flag: {FLAG}')
else:
	print(f'Oops Jawabanmu Salah')
	exit()