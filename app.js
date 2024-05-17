function press_0() {
    window.location = "http://grahack.github.io/elementario/index.html#doc-fr";
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
        case ' ':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 0)
            break;
        case 'a':
        case 'à':
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
        case 'C':
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
        case 'g':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'h':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'i':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 0)
            segment(place, 'f', 0)
            segment(place, 'g', 0)
            break;
        case 'l':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 0)
            break;
        case 'm':
        case 'n':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
            break;
        case 'o':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
            break;
        case 'p':
            segment(place, 'a', 1)
            segment(place, 'b', 1)
            segment(place, 'c', 0)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'r':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 1)
            break;
        case 's':
            segment(place, 'a', 1)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 0)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 't':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 0)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
        case 'u':
            segment(place, 'a', 0)
            segment(place, 'b', 0)
            segment(place, 'c', 1)
            segment(place, 'd', 1)
            segment(place, 'e', 1)
            segment(place, 'f', 0)
            segment(place, 'g', 0)
            break;
        case 'H':
            segment(place, 'a', 0)
            segment(place, 'b', 1)
            segment(place, 'c', 1)
            segment(place, 'd', 0)
            segment(place, 'e', 1)
            segment(place, 'f', 1)
            segment(place, 'g', 1)
            break;
    }
}

var position = 0;
const message = "     Hello appuie sur le bouton en bas à droite " +
                "     Hello press bottom right button ";

(function(){
    const txt = message.slice(position, position + 4);
    console.log(position, txt);
    for (i=0; i<4; i++) display(3-i, txt.charAt(i));
    position = position + 1;
    if (position == message.length) position = 0;
    setTimeout(arguments.callee, 500);
})();
