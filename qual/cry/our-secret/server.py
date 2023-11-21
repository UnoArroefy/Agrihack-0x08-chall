#!/usr/bin/env python3

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Util.number import long_to_bytes
import random
import hashlib
import os
from secret import flag

def encrypt(msg, shared_secret):
	# derive key
	key = hashlib.md5(long_to_bytes(shared_secret)).digest()
	# encrypt
	iv = os.urandom(16)
	cipher = AES.new(key, AES.MODE_CBC, iv)
	ciphertext = cipher.encrypt(pad(msg, 16))
	# format data
	data = {}
	data['iv'] = iv.hex()
	data['encrypted_flag'] = ciphertext.hex()
	return data

# DH parameters
g = 2
p = 2410312426921032588552076022197566074856950548502459942654116941958108831682612228890093858261341614673227141477904012196503648957050582631942730706805009223062734745341073406696246014589361659774041027169249453200378729434170325843778659198143763193776859869524088940195577346119843545301547043747207749969763750084308926339295559968882457872412993810129130294592999947926365264059284647209730384947211681434464714438488520940127459844288859336526896320919633919

# generate private and public key
a = random.getrandbits(1530)
A = pow(g,a,p)

# show public parameters
print("Berikan public keymu niscaya akan kuberikan flag!1!!")
print(f"g = {g}")
print(f"p = {p}")
print(f"A = {A}")

# receive other end's public key
B = int(input(">>> B: "))

# calculate shared secret
secret = pow(B,a,p)

# encrypt flag
encdata = encrypt(flag, secret)
print(f"Ini flagnya: {encdata}")