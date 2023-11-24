key_codes = {
    4:"aA", 5:"bB", 6:"cC", 7:"dD", 8:"eE", 9:"fF",
    10:"gG", 11:"hH", 12:"iI", 13:"jJ", 14:"kK", 15:"lL",
    16:"mM", 17:"nN", 18:"oO", 19:"pP", 20:"qQ", 21:"rR",
    22:"sS", 23:"tT", 24:"uU", 25:"vV", 26:"wW", 27:"xX",
    28:"yY", 29:"zZ", 30:"1!", 31:"2@", 32:"3#", 33:"4$",
    34:"5%", 35:"6^", 36:"7&", 37:"8*", 38:"9(", 39:"0)",
    44:"  ", 45:"-_", 46:"=+", 47:"[{", 48:"]}", 49:"\\|",
    50:"#~", 51:";:", 52:"'\"",
}

# tshark -r capt3.pcapng -Y 'usb.capdata && usb.data_len == 8' -T fields -e usb.capdata > out.txt

datas = open('out.txt').read().split('\n')
res = ''

for data in datas:
    try:
        key = int(data[4:6], 16)
    except ValueError:
        continue
    
    if data[0:2] == '00' and data[4:5] != '00':
        value = key_codes.get(key)
        res += value[0] if value and len(value) > 0 else ''
    elif data[0:2] == '02' and data[4:5] != '00':
        value = key_codes.get(key)
        res += value[1] if value and len(value) > 1 else ''
    else:
        continue

print(res)

