from Crypto.Util.number import *

flag = b"agrihack{xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}"
m = bytes_to_long(flag)

p = getPrime(512)
q = getPrime(512)
e = 65537
n = p*q
phi = (p-1)*(q-1)
d = pow(e,-1,phi)

s = pow(m,d,n)

print(f"s = {s}")
print(f"e = {e}")
print(f"n = {n}")