#!/bin/python3 

import string

blacklist = '_' + string.whitespace
blocklist = ['eval', 'input', 'breakpoint', 'help', 'print', 'exec']

while True:
    inp = input('>> ')

    if any([i for i in blacklist if i in inp]):
        print("apasi")
        exit(0)

    if any([i for i in blocklist if i in inp]):
        print("apasi")
        exit(0)

    if not inp.isascii():
        print("ih")
        exit(0)

    eval(inp)