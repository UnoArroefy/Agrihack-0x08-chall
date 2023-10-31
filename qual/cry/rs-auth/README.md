# RS Auth

### Description

**Author: k1nomi**

Secrecry through RSA is an easy task. I let my public key be known so that people can send message to me, but I keep my private key secret so that it's only me who can read the messages. What about authentication? Using RSA, how do people prove that a message is, undoubtedly, from me?

## Attachments
- `chall.py`
- `output.txt`

### Flag

`agrihack{it5_0nly_m3_wh0_kn0w_my_priv4te_k3y_ther3fore_1ts_m3}`

### Proof of Concept
- sama kayak rsa biasa tapi dibalik
- karena encrypt pake private key, decrypt pake public key
- `m = pow(s,e,n)`