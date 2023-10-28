encrypted_flag = "the flag here"
key = 0x08


def decrypt_flag(encrypted_flag, key):
    decrypted_flag = ""
    for char in encrypted_flag:
        decrypted_char = chr(ord(char) ^ key)
        decrypted_flag += decrypted_char
    return decrypted_flag


decrypted_flag = decrypt_flag(encrypted_flag, key)

print("Decrypted Flag:", decrypted_flag)
