#!/usr/bin/python3

from Crypto.Util.number import *
import hashlib, os, random


class DSA:
    
    def __init__(self):
        self.p = 13517320509842582039844708650743296878732182021493666519676728360245752217336665512491731939984100054350599823381878161842911677750085924434889627166895103
        self.q = 6758660254921291019922354325371648439366091010746833259838364180122876108668332756245865969992050027175299911690939080921455838875042962217444813583447551

        # asserting secure parameter from discrete log attack
        assert self.p == 2 * self.q + 1 
        assert isPrime(self.p) and isPrime(self.q)

        self.g = 3
        self.d = random.randint(2, self.q) # private key
        self.y = pow(self.g, self.d, self.p) 

        self.command = [
            f"echo {i}" for i in range(1, 30)
        ]

        self.nonces = [
            bytes_to_long(os.urandom(self.q.bit_length() // 8 - 1)) for i in range(1, len(self.command))
        ] # the NONCES is secure right ?
        
        self.order = 0
    
    def hash(self, msg):
        return bytes_to_long(hashlib.sha512(msg.encode()).digest()) % self.q

    def sign(self, msg):
        k = self.nonces[self.order % len(self.nonces)]
        self.order += 1
        
        r = pow(self.g, k, self.p) % self.q
        s = pow(k, -1, self.q) * (self.hash(msg) + self.d * r) % self.q
        
        return (r, s)
    
    def verify(self, msg, r, s):

        assert 0 < r < self.q
        assert 0 < s < self.q

        w = pow(s, -1, self.q)
        u1 = self.hash(msg) * w % self.q
        u2 = r * w % self.q

        v = (pow(self.g, u1, self.p) * pow(self.y, u2, self.p) % self.p) % self.q

        return v == r


dsa = DSA()


def menu():
    print("""Welcome to ZafiN CryptoJail!\nWhat do you want to do?\n1. sign command\n2. execute command\n3. Exit""")
    inp = int(input(">> "))
    return inp

for i in range(30):
    try:
        choice = menu()
        if choice == 1:
            num = int(input("What number do you want to echo (1 - 29) ? "))
            print(dsa.sign(dsa.command[num - 1]))
        elif choice == 2:
            
            command = input("What is the command ? ")
            r = int(input("r ? "))
            s = int(input("s ? "))

            if dsa.verify(command, r, s):
                print("Executing command...")
                os.system(command)
            else:
                print("Bad signature!!!")
                print("Hacker detected!!!")
                print("Exiting...")
                exit(-1)

        elif choice == 3:
            exit()
        else:
            print("Gaada opsi itu")        
    except Exception as e:
        print("Gausah aneh-aneh plis")
        exit(-1)
