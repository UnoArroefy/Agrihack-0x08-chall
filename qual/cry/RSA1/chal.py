from Crypto.Util.number import getPrime, bytes_to_long
from random import randint

with open('flag.txt', 'r') as f:
    FLAG = f.read()
    FLAG = FLAG.encode()

m = bytes_to_long(FLAG)     # flag
p = getPrime(128)           # prima 1
q = getPrime(128)           # prima 2
n = p*q                     # modulus
e = 65537                   # public key
c = pow(m,e,n)              # ciphertext

if __name__ == '__main__':
    print(f'p =', p)
    print(f'n =', n)
    print(f'e =', e)
    print(f'c =', c)