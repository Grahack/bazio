def number_from_toggle_buttons():
    number = 0
    i = 0
    while i<=7:
        number = number + 2**i * toggle_state[i]
        i = i + 1
    return number

def hex_str():
    number = number_from_toggle_buttons()
    hexString = hex(number)
    return hexString

def press_0():
    str = hex_str()
    print(str)
    char = str[-1]
    display(0, char)

def display(place, char):
    if char == '0':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 0)
    elif char == '1':
            segment(place, 'a', 0)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 0)
    elif char == '2':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
    elif char == '3':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
    elif char == '4':
            segment(place, 'a', 0)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == '5':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == '6':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == '7':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 0)
    elif char == '8':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == '9':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == 'a':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == 'b':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == 'c':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 0)
    elif char == 'd':
            segment(place, 'a', 0)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
    elif char == 'e':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
    elif char == 'f':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
