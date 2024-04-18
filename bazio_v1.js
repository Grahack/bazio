const lit7 = '#0f0';
const unlit7 = '#700';

function action(name, type) {
    const lastIndex = name.lastIndexOf('_');
    const button = name.slice(0, lastIndex);
    const number = name.slice(lastIndex + 1);
    switch (button) {
        case 'toggle_button':
            return function () {
                console.log(type, "toggle number", number);
            };
        case 'momentary_button':
            return function () {
                console.log(type, "momentary number", number);
            };
    }
}

// SVG elements
const NS = 'http://www.w3.org/2000/svg';
var main_frame = document.createElementNS(NS, 'svg');
var SVGs = {
    main_rect : document.createElementNS(NS, 'rect')
};

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 6; j++) {
        const name = 'display_' + i + '_' + ["a","b","c","d","e","f","g"][j];
        SVGs[name] = document.createElementNS(NS, 'rect');
    }
}

for (let i = 0; i <= 7; i++) {
    const name = 'toggle_button_' + i;
    SVGs[name] = document.createElementNS(NS, 'rect');
    SVGs[name].addEventListener("mousedown", action(name, 'press'));
    SVGs[name].addEventListener("mouseup", action(name, 'release'));
}

for (let i = 0; i <= 7; i++) {
    const name = 'momentary_button_' + i;
    SVGs[name] = document.createElementNS(NS, 'rect');
    SVGs[name].addEventListener("mousedown", action(name, 'press'));
    SVGs[name].addEventListener("mouseup", action(name, 'release'));
}

function adjust_size() {
    var screen_W  = window.innerWidth ||
        document.documentElement.clientWidth || 
        document.body.clientWidth;
    var screen_H = window.innerHeight ||
        document.documentElement.clientHeight || 
        document.body.clientHeight;
    console.log("Screen size:", screen_W, screen_H);
    const margin = 5;
    // set up the 16:9 shape (U for unified)
    const U_W = screen_W / 9;
    const U_H = screen_H / 16;
    const small_side = (U_W < U_H)? 'w' : 'h';
    console.log("Small side is:", small_side);
    var W = 0;
    var H = 0;
    if (small_side == 'h') {
        W = Math.floor(screen_H / 16 * 9);
        H = screen_H;
    } else {
        W = screen_W;
        H = Math.floor(screen_W / 9 * 16);
    }
    console.log("Main frame size:", W, H);
    main_frame.setAttribute('viewBox', '0 0 ' + screen_W + ' ' + screen_H);
    
    // configure the elements
    SVGs['main_rect'].setAttribute('fill', 'black');
    SVGs['main_rect'].setAttribute('stroke', 'black');
    SVGs['main_rect'].setAttribute('x', screen_W / 2 - W / 2 + margin);
    SVGs['main_rect'].setAttribute('y', screen_H / 2 - H / 2 + margin);
    SVGs['main_rect'].setAttribute('width', W-2*margin);
    SVGs['main_rect'].setAttribute('height', H-2*margin);

    const h_os = W/25; // horiz offset
    const v_os = H/20; // vert offset
    const h_len = W/11; // horiz length
    const v_len = H/9; // vert length
    const thinner = 30;
    const xywh = [
        [h_os,          0,       h_len, H/thinner],  // a
        [ W/7,       v_os,   W/thinner,     v_len],  // b
        [ W/7, H/6 + v_os,   W/thinner,     v_len],  // c
        [h_os,        H/3,       h_len, H/thinner],  // d
        [   0, H/6 + v_os,   W/thinner,     v_len],  // e
        [   0,       v_os,   W/thinner,     v_len],  // f
        [h_os,        H/6,       h_len, H/thinner]   // g
    ];
    for (let i = 0; i <= 3; i++) {
        const x0 = screen_W/2 - W/2 + (3-i)*(W-2*margin)/4 + W/24;
        const y0 = screen_H/2 - H/2 + H/6;
        for (let j = 0; j <= 6; j++) {
            var name = 'display_' + i + '_' + ["a","b","c","d","e","f","g"][j];
            //   a
            // f   b
            //   g
            // e   c
            //   d
            SVGs[name].setAttribute('fill', unlit7);
            SVGs[name].setAttribute('stroke', 'white');
            SVGs[name].setAttribute('stroke-width', 1);
            SVGs[name].setAttribute('x', x0 + xywh[j][0]);
            SVGs[name].setAttribute('y', y0 + xywh[j][1]);
            SVGs[name].setAttribute('width',  xywh[j][2]);
            SVGs[name].setAttribute('height', xywh[j][3]);
        }
    }

    for (let i = 0; i <= 7; i++) {
        var x = screen_W/2 - W/2 + (7-i)*(W-2*margin)/8 + margin;
        var name = 'toggle_button_' + i;
        SVGs[name].setAttribute('fill', 'red');
        SVGs[name].setAttribute('stroke', 'white');
        SVGs[name].setAttribute('stroke-width', 1);
        SVGs[name].setAttribute('x', x);
        SVGs[name].setAttribute('y', screen_H/2 - H/2 + 4*H/6);
        SVGs[name].setAttribute('width', W/9);
        SVGs[name].setAttribute('height', H/9);
        var name = 'momentary_button_' + i;
        SVGs[name].setAttribute('fill', 'red');
        SVGs[name].setAttribute('stroke', 'white');
        SVGs[name].setAttribute('stroke-width', 1);
        SVGs[name].setAttribute('x', x);
        SVGs[name].setAttribute('y', screen_H/2 - H/2 + 5*H/6);
        SVGs[name].setAttribute('width', W/9);
        SVGs[name].setAttribute('height', H/9);
    }
}

// add all the elements to the main frame
for (const [key, value] of Object.entries(SVGs)) {
    main_frame.appendChild(value);
}

document.body.appendChild(main_frame);
window.addEventListener('resize', adjust_size);
adjust_size();
console.log(SVGs);
