from pwn import *

def heal():
    for i in range(35):
        p.sendlineafter(b'>> ',b'2')

p = process(['python3', 'server.py'], level='info')

for i in range(3):
    p.sendline()

p.sendlineafter(b'>> ',b'3')
heal()

boss = 2000

while boss > 100:
    p.sendlineafter(b'>> ',b'1')
    p.sendlineafter(b'>> ',b'3')
    p.recvuntil(b'Boss Life : ')
    boss = eval(p.recvline(0))
    p.recvuntil(b'Our Life: ')
    life = eval(p.recvline(0))
    log.info(boss)
    log.info(life)
    if life < 300:
        heal()

p.interactive()