def xor(teks, key):
    ans = ""
    for i in range(len(teks)):
        ans += chr(teks[i]^key[i%10])
    return ans

format = b"agrihack{"

enc = open("flag.enc", "r").read()
enc = bytes.fromhex(enc)

# generate 9 byte key pertama, karena diketahui format flag
key = []
for i in range(len(format)):
    key.append(format[i]^enc[i])

# brute force 1 byte key terakhir
for byte1 in range(256):
    key.append(byte1)
    flag = xor(enc, key)
    if '=' == flag[-1] or '}' == flag[-1]:
        print(flag)
    key.pop()