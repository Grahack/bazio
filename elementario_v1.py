import os
import tkinter
from tkinter import ttk

color_lit7 = '#0f0'
color_unlit7 = '#700'
color_on  = '#0f0'
color_off = 'red'

lang = 'fr'

contents_fr = {
        "Load": "Charger"}

segment_names = ['a','b','c','d','e','f','g']

toggle_state = [0, 0, 0, 0, 0, 0, 0, 0]
_display_state = [[0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0]]

def _(txt):
    if lang == 'fr':
        return contents_fr[txt]
    return txt

root = tkinter.Tk()
root.title('Elementario')

tabControl = ttk.Notebook(root)
tab_io     = ttk.Frame(tabControl)
tab_code   = ttk.Frame(tabControl)
tabs_doc = {}
tabs_doc['fr'] = ttk.Frame(tabControl)
tabs_doc['en'] = ttk.Frame(tabControl)
tabControl.add(tab_io,     text='I/O')
tabControl.add(tab_code,   text='Code')
tabControl.add(tabs_doc['fr'], text='Doc (fr)')
tabControl.add(tabs_doc['en'], text='Doc (en)')
tabControl.pack(expand=1, fill="both")

# Geometry

# these are real globals
screen_W = 0
screen_H = 0
W = 0  # size of the black background
H = 0
h_os  = None  # horiz offset
v_os  = None  # vert offset
h_len = None  # horiz length
v_len = None  # vert length
xywh  = None
thinner = 30  # constant

def compute_geometry(w, h):
    global screen_W, screen_H, W, H, h_os, v_os, h_len, v_len, xywh
    screen_W = w
    screen_H = h
    print("Screen size:", screen_W, screen_H)
    # set up the 4:3 shape (U for unified)
    U_W = screen_W / 3
    U_H = screen_H / 4
    small_side = 'w' if (U_W < U_H) else 'h'
    print("Small side is:", small_side)
    if small_side == 'h':
        W = screen_H / 4 * 3
        H = screen_H
    else:
        W = screen_W
        H = screen_W / 3 * 4
    h_os = W/25
    v_os = H/26
    h_len = W/11
    v_len = H/8
    xywh = [
        [h_os,          0,       h_len, H/thinner],  # a
        [ W/7,       v_os,   W/thinner,     v_len],  # b
        [ W/7, H/6 + v_os,   W/thinner,     v_len],  # c
        [h_os,        H/3,       h_len, H/thinner],  # d
        [   0, H/6 + v_os,   W/thinner,     v_len],  # e
        [   0,       v_os,   W/thinner,     v_len],  # f
        [h_os,        H/6,       h_len, H/thinner]   # g
    ]

compute_geometry(root.winfo_screenwidth(), root.winfo_screenheight())

# io tab

# some duplicate code here and in the 'resize' function :(

canvas = tkinter.Canvas(tab_io, width=screen_W, height=screen_H)
canvas.pack()
bg = canvas.create_rectangle(screen_W/2 - W/2, screen_H/2 - H/2,
                             screen_W/2 + W/2, screen_H/2 + H/2, fill="black")

SVGs = {}

for i in range(4):
    x0 = screen_W/2 - W/2 + (3-i)*W/4 + W/24
    y0 = screen_H/2 - H/2 + H/8
    for j in range(7):
        #   a
        # f   b
        #   g
        # e   c
        #   d
        name = 'display_' + str(i) + '_' + segment_names[j]
        SVGs[name] = canvas.create_rectangle(x0 + xywh[j][0],
                                             y0 + xywh[j][1],
                                             x0 + xywh[j][0] + xywh[j][2],
                                             y0 + xywh[j][1] + xywh[j][3],
            outline="white", fill=color_unlit7)

def call(fn_name):
    if fn_name in globals():
        globals()[fn_name]()
    else:
        print(fn_name + ' not defined!')

def pressed(name):
    def r(event):
        print(name + " pressed!")
        if name.startswith('toggle'):
            pass
        if name.startswith('momentary'):
            canvas.itemconfigure(SVGs[name], fill=color_on)
            call('press_' + name[-1])
    return r

def released(name):
    def r(event):
        print(name + " released!")
        num = int(name[-1])
        if name.startswith('toggle'):
            toggle_state[num] = 1 - toggle_state[num]
            canvas.itemconfigure(SVGs[name],
                             fill=color_on if toggle_state[num] else color_off)
            call('toggle_' + name[-1])
        if name.startswith('momentary'):
            canvas.itemconfigure(SVGs[name], fill=color_off)
            call('release_' + name[-1])
    return r

for i in range(8):
    x = screen_W/2 - W/2 + (7-i)*W/8 + W/125

    name = 'toggle_button_' + str(i)
    y = screen_H/2 - H/2 + 6*H/10
    SVGs[name] = canvas.create_rectangle(x, y, x + W/9, y + H/9,
            outline="white", fill=color_off)
    canvas.tag_bind(SVGs[name],'<ButtonPress-1>', pressed(name))
    canvas.tag_bind(SVGs[name],'<ButtonRelease-1>', released(name))

    name = 'momentary_button_' + str(i)
    y = screen_H/2 - H/2 + 8*H/10
    SVGs[name] = canvas.create_rectangle(x, y, x + W/9, y + H/9,
            outline="white", fill=color_off)
    canvas.tag_bind(SVGs[name],'<ButtonPress-1>', pressed(name))
    canvas.tag_bind(SVGs[name],'<ButtonRelease-1>', released(name))

# code tab

frame_code = tkinter.Frame(tab_code)

base_src = """# Tapez votre code ici
# Put your own code here

def press_7():
    print(toggle_state)
    segment_3_d(1)
"""

s_bar = tkinter.Scrollbar(frame_code)
s_bar.pack(side=tkinter.RIGHT, fill=tkinter.BOTH)
frame_code.pack(expand=True)
source = tkinter.Text(frame_code)
source.pack(fill=tkinter.BOTH, expand=tkinter.TRUE)
source.insert('1.0', base_src)
source.config(yscrollcommand=s_bar.set)
s_bar.config(command=source.yview)

def load():
    modules_dir = 'modules'
    print("Loading...")
    # code tab
    src = source.get("1.0", "end-1c")
    exec(src, globals())
    # modules
    for module in sorted(os.listdir(modules_dir)):
        if module[-3:] == '.py':
            print("Found module", module)
            exec(open(os.path.join(modules_dir, module)).read(), globals())

button = tkinter.Button(tab_code, text=_("Load"), command=load)
button.pack()

# docs tabs

frames = {}
s_bars = {}
texts = {}
contents = {'fr':"""ELEMENTARIO
Entrées/Sorties élémentaires
Boutons

Ils sont numérotés de 0 à 7 (de droite à gauche).

Quand on les relache, les boutons à bascule (première ligne) déclenchent les fonctions suivantes sans paramètre :

    toggle_0 to toggle_7

Les boutons momentanés (seconde ligne) déclenchent les fonctions suivantes sans paramètre :

    press_0 to press_7
    release_0 to release_7

Une variable stocke l’état des boutons à bascule :

toggle_state = [0, 0, 0, 0, 0, 0, 0, 0]

Attention : les positions dans cette variable sont contraires aux positions des boutons (numéros croissants de gauche à droite dans la variable et de droite à gauche pour les boutons).
Affichage

4×7 fonctions ont été définies pour gérer l’affichage. Elles attendent toutes un argument : 0 ou 1. Voici par exemple celles qui correspondent au caractère à droite, numéroté 0 :

    segment_0_a(on_off)
    segment_0_b(on_off)
    segment_0_c(on_off)
    segment_0_d(on_off)
    segment_0_e(on_off)
    segment_0_f(on_off)
    segment_0_g(on_off)

Idem pour les autres caractères, numérotés de 1 à 3 de droite à gauche. Voici la correspondance entre lettre et position :

 -- a --
|       |
f       b
|       |
 -- g --
|       |
e       c
|       |
 -- d --

La fonction suivante peut aussi être pratique :

    segment(place, seg, on_off)

où seg est une lettre de a à g ou le numéro correspondant (de 0 à 6 à la place des lettres de a à g).
Applications

L’appli préchargée va afficher quelque chose qui a un rapport avec les boutons à bascule lors de la pression du bouton momentané 0. Pouvez-vous deviner ce que c’est ?

Vous pouvez de plus charger votre propre code pour modifier le comportement d’Elementario grâce au bouton Charger.
""",
        'en': """ELEMENTARIO
Elementary Input/Output
Buttons

They are numbered from 0 to 7 (from right to left).

When released the toggle buttons (first line) will trigger the following functions with no parameter on release:

    toggle_0 to toggle_7

The momentary buttons (second line) will trigger the following functions with no parameter:

    press_0 to press_7
    release_0 to release_7

A variable holds the state of the toggle buttons:

toggle_state = [0, 0, 0, 0, 0, 0, 0, 0]

Please note: the positions in this variable go in the other way than the one for the buttons (increasing from left to right in the variable and from right to left for the buttons).
Display

4×7 functions have been defined for handling the display. All take one parameter: 0 or 1. Here are the ones correponding to the character on the right, numbered 0:

    segment_0_a(on_off)
    segment_0_b(on_off)
    segment_0_c(on_off)
    segment_0_d(on_off)
    segment_0_e(on_off)
    segment_0_f(on_off)
    segment_0_g(on_off)

And the same for the other displays, numbered from 1 to 3, from left to right. Here is the correspondence between letter and position:

 -- a --
|       |
f       b
|       |
 -- g --
|       |
e       c
|       |
 -- d --

The following function can be handy too.

    segment(place, seg, on_off)

where seg is the number of the corresponding segment (from 0 to 6 instead of the letters from a to g).
Applications

The preloaded app will display something related to the toggle buttons when pressing the momentary 0 button (on the right). Can you guess what it displays?

Moreover, you can load your own code to change the behaviour of Elementario with the Load button.
"""}

for lang in ['fr', 'en']:
    frames[lang] = tkinter.Frame(tabs_doc[lang])
    s_bars[lang] = tkinter.Scrollbar(frames[lang])
    s_bars[lang].pack(side=tkinter.RIGHT, fill=tkinter.BOTH)
    frames[lang].pack(expand=True)
    texts[lang] = tkinter.Text(frames[lang])
    texts[lang].pack(fill=tkinter.BOTH, expand=tkinter.TRUE)
    texts[lang].insert('1.0', contents[lang])
    texts[lang]['state'] = 'disabled'
    texts[lang].config(yscrollcommand=s_bars[lang].set)
    s_bars[lang].config(command=texts[lang].yview)

def resize(event):
    compute_geometry(event.width, event.height)
    canvas.coords(bg, screen_W/2 - W/2, screen_H/2 - H/2,
                      screen_W/2 + W/2, screen_H/2 + H/2)
    for i in range(4):
        x0 = screen_W/2 - W/2 + (3-i)*W/4 + W/24
        y0 = screen_H/2 - H/2 + H/8
        for j in range(7):
            name = 'display_' + str(i) + '_' + segment_names[j]
            canvas.coords(SVGs[name], x0 + xywh[j][0],
                                      y0 + xywh[j][1],
                                      x0 + xywh[j][0] + xywh[j][2],
                                      y0 + xywh[j][1] + xywh[j][3])
    for i in range(8):
        x = screen_W/2 - W/2 + (7-i)*W/8 + W/125
        name = 'toggle_button_' + str(i)
        y = screen_H/2 - H/2 + 6*H/10
        canvas.coords(SVGs[name], x, y, x + W/9, y + H/9)
        name = 'momentary_button_' + str(i)
        y = screen_H/2 - H/2 + 8*H/10
        canvas.coords(SVGs[name], x, y, x + W/9, y + H/9)

root.bind("<Configure>", resize)  # bg plus petit avec ça

# Display functions
for i in range(4):
    for j in range(7):
        letter = segment_names[j]
        fn = 'segment_' + str(i) + '_' + letter
        seg = 'display_' + str(i) + '_' + segment_names[j]
        src = 'def ' + fn + '(on_off):\n' + \
              '    global display_state\n' + \
              '    color = color_lit7 if on_off else color_unlit7\n' + \
              '    canvas.itemconfigure(SVGs["' + seg + '"], fill=color)\n' + \
              '    _display_state[i][j] = on_off'
        exec(src, globals())

def segment(place, seg, on_off):
    if isinstance(seg, str):
        globals()['segment_' + str(place) + '_' + seg](on_off)
    else:
        globals()['segment_' + str(place) + '_' + segment_names[seg]](on_off)

root.mainloop()
