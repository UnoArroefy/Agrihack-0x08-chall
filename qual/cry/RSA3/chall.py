from Crypto.Util.number import bytes_to_long, getRandomNBitInteger

FLAG = 'agrihack{?????????????????????}'

m = bytes_to_long(FLAG.encode())
e = 65537
n = getRandomNBitInteger(286)
c = pow(m,e,n)

if __name__ == '__main__':
    print(f'c = ', c)
    print(f'e = ', e)
    print(f'n = ', n)

"""
OUTPUT
c =  5091227629810493001612248486465352210889582645470163310470677604156639675696562463089
e =  65537
n =  106105764467160072966077184935353163815878874121266735599952568918886862867875860146813
"""