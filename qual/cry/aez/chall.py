from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad


flag = b'agrihack{xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}'
key = b'KunciRahasia1234'

def encrypt(msg, key):
	cipher = AES.new(key, AES.MODE_ECB)
	ciphertext = cipher.encrypt(pad(msg, 16))
	return ciphertext.hex()

print("Encrypted flag:", encrypt(flag, key))

# Encrypted flag: a2906cb500f7ff5906a1747930ae3e6a70bb8b064f22ebbd1a3f3b3ebf068fe2e7465810a3bb532d5f73cedf372948cbffdea8cf1a2aec2a924c2eed63f091e8