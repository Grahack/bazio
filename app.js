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
    display_0(char)
}

function display_0(char) {
    switch (char) {
        case '0':
            segment_0_a(1)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(0)
            break;
        case '1':
            segment_0_a(0)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(0)
            segment_0_e(0)
            segment_0_f(0)
            segment_0_g(0)
            break;
        case '2':
            segment_0_a(1)
            segment_0_b(1)
            segment_0_c(0)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(0)
            segment_0_g(1)
            break;
        case '3':
            segment_0_a(1)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(0)
            segment_0_f(0)
            segment_0_g(1)
            break;
        case '4':
            segment_0_a(0)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(0)
            segment_0_e(0)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case '5':
            segment_0_a(1)
            segment_0_b(0)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(0)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case '6':
            segment_0_a(1)
            segment_0_b(0)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case '7':
            segment_0_a(1)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(0)
            segment_0_e(0)
            segment_0_f(0)
            segment_0_g(0)
            break;
        case '8':
            segment_0_a(1)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case '9':
            segment_0_a(1)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(0)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case 'a':
            segment_0_a(1)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(0)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case 'b':
            segment_0_a(0)
            segment_0_b(0)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case 'c':
            segment_0_a(1)
            segment_0_b(0)
            segment_0_c(0)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(0)
            break;
        case 'd':
            segment_0_a(0)
            segment_0_b(1)
            segment_0_c(1)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(0)
            segment_0_g(1)
            break;
        case 'e':
            segment_0_a(1)
            segment_0_b(0)
            segment_0_c(0)
            segment_0_d(1)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(1)
            break;
        case 'f':
            segment_0_a(1)
            segment_0_b(0)
            segment_0_c(0)
            segment_0_d(0)
            segment_0_e(1)
            segment_0_f(1)
            segment_0_g(1)
            break;
    }
}
