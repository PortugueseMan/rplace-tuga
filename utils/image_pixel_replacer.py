from PIL import Image, ImageColor
import numpy as np
import sys

# Configs
# Low value equals more white/black and less color
gray_scale = 90 
#white offset - Higher value equals more white, lower means more black
white_offset = 0

input_img = "input.png"
output_img = "output.png"
black = (0,0,0)
white = (255, 255, 255)

try:
  input_img = sys.argv[1]
  output_img = sys.argv[2]
except:
  img = Image.open(input_img)

# More will be added, will need update then
color_pallet1 = ["#FF4500", "#FFA800", "#FFD635", "#00A368", "#3690EA", "#B44AC0", "#000000", "#FFFFFF"]

def convert_hex_to_rgb():
    rgb_colors = []
    for color in color_pallet1:
        rgb_colors.append(ImageColor.getrgb(color))
    return rgb_colors

def find_closest_color(pixel):
    min_distance = 250
    closest_color = None
    for color in color_pallet1:
        distance = np.linalg.norm(np.array(pixel) - np.array(color))
        if distance < min_distance:
            min_distance = distance
            closest_color = color

    black_distance = np.linalg.norm(np.array(pixel) - np.array(black))
    white_distance = np.linalg.norm(np.array(pixel) - np.array(white)) + white_offset

    if min_distance > gray_scale:
      if black_distance <= white_distance:
          closest_color = black
      else:
          closest_color = white

    return closest_color

def replace_pixel_closest_color():
    width, height = img.size
    img_pixels = img.load()

    for x in range(width):
        for y in range(height):
            pixel = img_pixels[x, y]
            closest_color = find_closest_color(pixel)
            img_pixels[x, y] = closest_color
    img.save(output_img)

color_pallet1 = convert_hex_to_rgb()
replace_pixel_closest_color()
