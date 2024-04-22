function number_from_toggle_buttons() {
    number = 0
    i = 0
    while (i<=7) {
        number = number + Math.pow(2, i) * toggle_state[i]
        i = i + 1
    }
    return number
}

function hex_str() {
    number = number_from_toggle_buttons()
    hexString = number.toString(16)
    return hexString
}

function press_0() {
    str = hex_str()
    console.log(str)
    char = str.charAt(str.length-1)
    display(0, char)
}

function display(place, char) {
    switch (char) {
        case '0':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 0)
            break;
        case '1':
            segment(place, 'a', 0)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 0)
            break;
        case '2':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
            break;
        case '3':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
            break;
        case '4':
            segment(place, 'a', 0)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case '5':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case '6':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case '7':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 0)
            break;
        case '8':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case '9':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'a':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'b':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'c':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 0)
            break;
        case 'd':
            segment(place, 'a', 0)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
            break;
        case 'e':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'f':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
    }
}
