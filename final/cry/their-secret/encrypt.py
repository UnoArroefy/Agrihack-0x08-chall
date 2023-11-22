# berikut ini adalah script yang digunakan Alice untuk meng-encrypt flagnya

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Util.number import long_to_bytes
import hashlib
import os

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