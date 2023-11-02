from PIL import Image

image = Image.open('flag.png')

new = Image.new('RGBA', image.size)
for y in range(image.size[1]):
    for x in range(image.size[0]):
        new.putpixel((x, y), (image.getpixel(((x + y*8) % image.size[0], y))))

new.save('new.png')
