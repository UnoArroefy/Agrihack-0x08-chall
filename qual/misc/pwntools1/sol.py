from pwn import *

def heal():
    for _ in range(35):
        p.sendlineafter(b'>> ',b'2')
        # sleep(0.1)

while True:
    try:
        # p = process(['python3', 'server.py'], level='info')
        p = connect('34.101.135.101', 20006, level='info')

        for i in range(3):
            p.sendline()

        p.sendlineafter(b'>> ',b'3')
        heal()

        boss = 2000

        while boss > 10:
            p.sendlineafter(b'>> ',b'1')
            p.sendlineafter(b'>> ',b'3')
            p.recvuntil(b'Boss Life : ')
            boss = eval(p.recvline(0))
            p.recvuntil(b'Our Life: ')
            life = eval(p.recvline(0))
            log.info(f"boss : {boss}")
            log.info(f"life : {life}")
            if life < 300:
                log.info("healing dulu bang")
                heal()

        p.sendline(b'3')
        p.sendline(b'1')

        if b'agrihack{' in (data:=p.recvall()):
            print(data[data.index(b'agrihack{'):])
            break
        else:
            raise exception
    except:
        p.close()