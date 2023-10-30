from pwn import *

# r = remote("34.101.135.101", 20003, level='debug')
r = process(['python3', 'server.py'])

r.recvline()
print("he")
count = 0
for _ in range(10000):
    r.recvline()
    temp = r.recvuntil(b"=").decode().split()
    # print(temp)
    if temp[1] == '+':
        r.sendlineafter(b" ", str(int(temp[0]) + int(temp[2])).encode())
    if temp[1] == '-':
        r.sendlineafter(b" ", str(int(temp[0]) - int(temp[2])).encode())
    if temp[1] == '*':
        r.sendlineafter(b" ", str(int(temp[0]) * int(temp[2])).encode())
    if temp[1] == '//':
        r.sendlineafter(b" ", str(int(temp[0]) // int(temp[2])).encode())
    if temp[1] == '%':
        r.sendlineafter(b" ", str(int(temp[0]) % int(temp[2])).encode())
    count +=1
    print(count)
    if count == 10000:
        r.interactive()