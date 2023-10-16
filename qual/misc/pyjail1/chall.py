#!/bin/python3 

import string

blacklist = '_' + string.whitespace

inp = input('>> ')

if any([i for i in blacklist if i in inp]):
    print("apasi")
    exit(0)

eval(inp)