#!/bin/python3 

import string

blacklist = '_' + string.whitespace

while True:
    inp = input('>> ')

    if any([i for i in blacklist if i in inp]):
        print("apasi")
        exit(0)

    if not inp.isascii():
        print("ih")
        exit(0)

    eval(inp)