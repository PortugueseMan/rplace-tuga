from PIL import Image
import sys
in_file = sys.argv[1]
out_file = sys.argv[2]
shrunk = Image.open(in_file).convert('RGBA')
w, h = shrunk.size
def getShrunkPixel(x, y):
    return shrunk.getpixel((x, y))
expanded = Image.new("RGBA", (w*3,h*3))
for i in range(0,w):
    for j in range(0,h):
        expanded.putpixel((i*3+1,j*3+1), getShrunkPixel(i, j))
expanded.save(out_file)
print("    DONE!")