const color_lit7 = '#0f0';
const color_unlit7 = '#700';
const color_on  = '#0f0';
const color_off = 'red';

const segment_names = ['a','b','c','d','e','f','g'];

var toggle_state = [0, 0, 0, 0, 0, 0, 0, 0];
var _display_state = [[0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0]];

var io_div = document.getElementById('elementario-io');
var modules_div = document.getElementById('elementario-modules');

function action(name, type) {
    const lastIndex = name.lastIndexOf('_');
    const button = name.slice(0, lastIndex);
    const number = name.slice(lastIndex + 1);
    switch (button) {
        case 'toggle_button':
            return function () {
                console.log(type, "toggle number", number);
                if (type == 'release') {
                    toggle_state[number] = 1 - toggle_state[number]
                    const fn_name = 'toggle_' + number;
                    if (window[fn_name]) window[fn_name]();
                    else console.log("No function", fn_name);
                }
                SVGs[name].setAttribute('fill',
                    toggle_state[number]? color_on : color_off);
            };
        case 'momentary_button':
            return function () {
                console.log(type, "momentary number", number);
                if (type == 'press') {
                    SVGs[name].setAttribute('fill', color_on);
                    const fn_name = 'press_' + number;
                    if (window[fn_name]) window[fn_name]();
                    else console.log("No function", fn_name);
                } else {
                    SVGs[name].setAttribute('fill', color_off);
                    const fn_name = 'release_' + number;
                    if (window[fn_name]) window[fn_name]();
                    else console.log("No function", fn_name);
                }
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
        const name = 'display_' + i + '_' + segment_names[j];
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
    const margin = 0;
    // set up the 4:3 shape (U for unified)
    const U_W = screen_W / 3;
    const U_H = screen_H / 4;
    const small_side = (U_W < U_H)? 'w' : 'h';
    console.log("Small side is:", small_side);
    var W = 0;
    var H = 0;
    if (small_side == 'h') {
        const size_factor = 0.85;
        W = Math.floor(screen_H / 4 * 3 * size_factor);
        H = Math.floor(screen_H * size_factor);
    } else {
        W = screen_W;
        H = Math.floor(screen_W / 3 * 4);
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
    const v_os = H/26; // vert offset
    const h_len = W/11; // horiz length
    const v_len = H/8; // vert length
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
            var name = 'display_' + i + '_' + segment_names[j];
            //   a
            // f   b
            //   g
            // e   c
            //   d
            const lit = _display_state[i][j];
            SVGs[name].setAttribute('fill', lit? color_lit7 : color_unlit7);
            SVGs[name].setAttribute('stroke', 'white');
            SVGs[name].setAttribute('stroke-width', 1);
            SVGs[name].setAttribute('x', x0 + xywh[j][0]);
            SVGs[name].setAttribute('y', y0 + xywh[j][1]);
            SVGs[name].setAttribute('width',  xywh[j][2]);
            SVGs[name].setAttribute('height', xywh[j][3]);
        }
    }

    for (let i = 0; i <= 7; i++) {
        const x = screen_W/2 - W/2 + (7-i)*(W-2*margin)/8 + margin;
        var name = 'toggle_button_' + i;
        const lit = toggle_state[i];
        SVGs[name].setAttribute('fill', lit? color_on : color_off);
        SVGs[name].setAttribute('stroke', 'white');
        SVGs[name].setAttribute('stroke-width', 1);
        SVGs[name].setAttribute('x', x);
        SVGs[name].setAttribute('y', screen_H/2 - H/2 + 4*H/6);
        SVGs[name].setAttribute('width', W/9);
        SVGs[name].setAttribute('height', H/9);
        var name = 'momentary_button_' + i;
        SVGs[name].setAttribute('fill', color_off);
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

io_div.appendChild(main_frame);
window.addEventListener('resize', adjust_size);
adjust_size();
console.log(SVGs);

function util_num_to_bin_str(n) {
     return n.toString(2).padStart(8, '0');
}

function util_list_to_num(l) {
    let decimal = 0;
    for (let i = 0; i < l.length; i++) {
         decimal += l[i] * Math.pow(2, i);
    }
    return decimal;
}

function util_str_to_list(s) {
    return s.split('').map(function (c) {return Number(c)});
}

function util_list_to_str(l) {
     return l.join('').padStart(8, '0');
}

const numbers_0_to_127 = Array.from(Array(128).keys());
const all_bytes = numbers_0_to_127.map(function (n) {
    return util_str_to_list(util_num_to_bin_str(n));
});

const modules = [
    {name:'number_to_bin_str',
     fn: util_num_to_bin_str,
     tests: numbers_0_to_127},
    {name:'number_to_dec_str',
     fn: function (n) {return n.toString();},
     tests: numbers_0_to_127},
    {name:'number_to_hex_str',
     fn: function (n) {return n.toString(16);},
     tests: numbers_0_to_127},
    {name:'list_to_number',
     fn: util_list_to_num,
     tests: all_bytes},
    {name:'list_to_bin_str',
     fn: util_list_to_str,
     tests: all_bytes},
    {name:'list_to_dec_str',
     fn: function (l) {return util_list_to_num(l).toString();},
     tests: all_bytes}
];

function build_radio_group(name) {
    var elt = document.createElement('div');
    elt.className = 'module';
    elt.id = 'module_' + name;
    elt.innerHTML = name;
    var radio_group = document.createElement('span');
    const actions = ['0', 'U', 'T'];
    actions.forEach(function (action) {
        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.value = name + '_' + action;
        radio.name = name;
        radio.id = name + '_' + action;
        if (action == '0') radio.checked = true;
        radio_group.appendChild(radio);
        var label = document.createElement('label');
        label.htmlFor = name + '_' + action;
        label.textContent = action;
        label.className = 'module-label';
        radio_group.appendChild(label);
    });
    elt.appendChild(radio_group);
    return elt;
}

var modules_container = document.createElement('div');
modules_container.className = 'modules';
modules_div.appendChild(modules_container);

// control for 'all' modules
modules_container.appendChild(build_radio_group('all'));
const radio_buttons = document.querySelectorAll('input[name="all"]');
for(const radio_button of radio_buttons) {
    radio_button.addEventListener('change', function() {
        const action_id = this.value[this.value.length-1];
        modules.forEach(function (module) {
            const rb = document.getElementById(module.name + '_' + action_id);
            rb.checked = true;
        });
    });
}

// add each module
modules.forEach(function (module) {
    modules_container.appendChild(build_radio_group(module.name));
    module.innerHTML = module.innerHTML + ' ';
});

var fns = {};
for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 6; j++) {
        const letter = segment_names[j];
        const name = '' + i + '_' + letter;
        fns[name] = function (on_off) {
            SVGs['display_' + i + '_' + letter].setAttribute('fill',
                on_off? color_lit7 : color_unlit7);
            _display_state[i][j] = on_off;
        };
    }
}

function segment_0_a(on_off) {fns['0_a'](on_off);}
function segment_0_b(on_off) {fns['0_b'](on_off);}
function segment_0_c(on_off) {fns['0_c'](on_off);}
function segment_0_d(on_off) {fns['0_d'](on_off);}
function segment_0_e(on_off) {fns['0_e'](on_off);}
function segment_0_f(on_off) {fns['0_f'](on_off);}
function segment_0_g(on_off) {fns['0_g'](on_off);}
function segment_1_a(on_off) {fns['1_a'](on_off);}
function segment_1_b(on_off) {fns['1_b'](on_off);}
function segment_1_c(on_off) {fns['1_c'](on_off);}
function segment_1_d(on_off) {fns['1_d'](on_off);}
function segment_1_e(on_off) {fns['1_e'](on_off);}
function segment_1_f(on_off) {fns['1_f'](on_off);}
function segment_1_g(on_off) {fns['1_g'](on_off);}
function segment_2_a(on_off) {fns['2_a'](on_off);}
function segment_2_b(on_off) {fns['2_b'](on_off);}
function segment_2_c(on_off) {fns['2_c'](on_off);}
function segment_2_d(on_off) {fns['2_d'](on_off);}
function segment_2_e(on_off) {fns['2_e'](on_off);}
function segment_2_f(on_off) {fns['2_f'](on_off);}
function segment_2_g(on_off) {fns['2_g'](on_off);}
function segment_3_a(on_off) {fns['3_a'](on_off);}
function segment_3_b(on_off) {fns['3_b'](on_off);}
function segment_3_c(on_off) {fns['3_c'](on_off);}
function segment_3_d(on_off) {fns['3_d'](on_off);}
function segment_3_e(on_off) {fns['3_e'](on_off);}
function segment_3_f(on_off) {fns['3_f'](on_off);}
function segment_3_g(on_off) {fns['3_g'](on_off);}

function segment(place, seg, on_off) {
    if (typeof seg === 'string') fns[place + '_' + seg](on_off);
    else fns[place + '_' + segment_names[seg]](on_off);
}

function load() {
    console.log("Loading user src:");
    const src = document.getElementById('src').value;
    console.log(src);
    window.eval(src);  // indirect call to be effective globally
    modules.forEach(function (module) {
        // grab the value of the relevant radio button
        const rb_u = document.getElementById(module.name + '_U').checked;
        const rb_t = document.getElementById(module.name + '_T').checked;
        // and grab the element
        const module_div = document.getElementById('module_' + module.name);
        if (rb_u) {
            // use module
            console.log("Using " + module.name);
            window[module.name] = module.fn;
            module_div.style.backgroundColor = '#aaf';
        } else if (rb_t) {
            // test module
            const fn = window[module.name];
            if (typeof fn !== "function") {
                console.log(module.name + " is not defined!");
                module_div.style.backgroundColor = '#f66';
            } else {
                console.log("Testing " + module.name + "...");
                for (let i = 0; i < module.tests.length; i++) {
                    const arg = module.tests[i];
                    const test_result = fn(arg);
                    const test_expect =  module.fn(arg);
                    if (test_expect !==  test_result) {
                        console.log(test_expect +
                                    ' was expected but got ' +
                                    test_result);
                        module_div.style.backgroundColor = '#fa6';
                    } else {
                        module_div.style.backgroundColor = '#9f9';
                    }
                }
            }
        } else {
            // do nothing with the module
            module_div.style.backgroundColor = '#fff';
        }
    });
}
