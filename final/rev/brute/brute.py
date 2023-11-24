import base64
import os
import tkinter as tk
from tkinter import messagebox
import zlib

def get_filename():
    filename = "flag" 
    if os.path.isfile(filename+".enc"):
        x = 1
        while os.path.isfile(filename+f" ({x}).enc"):
            x += 1
        filename += f" ({x}).enc"
    else:
        filename += ".enc"

    return filename

def show_success_popup(filename):
    messagebox.showinfo("Sukses!", f"Silahkan cek hasil enkripsi pada file {filename}")
    on_exit()

def on_submit():
    input_text = entry.get()
    filename = get_filename()
    exec(zlib.decompress(base64.b64decode(b'eJxVj81qw0AMhO/7FNNAyKp1jXMt+EmMG9ax3C5Jdpe1QuK3r/xTSnUTM5pvZPwtxSwY+ZxZRmN6HpBc31tHHwY6fsCVg67Y41jhpUa1CvM4vNU41IdXq9I77OrcHyuixaOZ9xzg1lwO5zwlsa5At6Vf/Sio0bTLNsQMDx+QXfjiLY3+cLO7dClx6G3M2rHxLeETXeOV2f5jdpPwaOcLMubCk1K2J0uJFw6n1aBVTeZR1d92y/c+pLuchJ9CBfSaym9+WjJR2Xbw2szduMDusaPykb2w1RAyP6dPYRU=')).decode('utf-8'))

    if input_text:
        show_success_popup(filename)
    else:
        messagebox.showwarning("Peringatan", "Mohon masukkan input terlebih dahulu.")

def on_exit():
    root.destroy()

root = tk.Tk()
root.title("Encrypt Flag")

fixed_width = 400
fixed_height = 200
root.geometry(f"{fixed_width}x{fixed_height}")

label = tk.Label(root, text="Masukkan Flag:")
label.pack(pady=(20, 10))
entry = tk.Entry(root, width=50)
entry.pack(pady=10)

submit_button = tk.Button(root, text="Submit", command=on_submit)
submit_button.pack(pady=10)

root.mainloop()