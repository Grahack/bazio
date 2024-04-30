import tkinter
from tkinter import ttk

lang = 'fr'
contents_fr = {
        "Load": "Charger"}

def _(txt):
    if lang == 'fr':
        return contents_fr[txt]
    return txt

root = tkinter.Tk()
root.title('Elementario')
root.attributes("-fullscreen", True)


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

# io tab

screen_W = root.winfo_screenwidth()
screen_H = root.winfo_screenheight()

print("Screen size:", screen_W, screen_H)
# set up the 4:3 shape (U for unified)
U_W = screen_W / 3
U_H = screen_H / 4
small_side = 'w' if (U_W < U_H) else 'h'
print("Small side is:", small_side)
W = 0
H = 0
if small_side == 'h':
    W = screen_H / 4 * 3
    H = screen_H
else:
    W = screen_W
    H = screen_W / 3 * 4

canvas = tkinter.Canvas(tab_io, width=screen_W, height=screen_H)
canvas.pack()
canvas.create_rectangle(screen_W/2 - W/2, screen_H/2 - H/2,
                        screen_W/2 + W/2, screen_H/2 + H/2, fill="black")

# code tab

base_src = """// Tapez votre code ici
// Put your own code here

def press_7():
    print(toggle_state)
    segment_3_d(1)
"""

frame_code = tkinter.Frame(tab_code)
s_bar = tkinter.Scrollbar(frame_code)
s_bar.pack(side=tkinter.RIGHT, fill=tkinter.BOTH)
frame_code.pack(expand=True)
source = tkinter.Text(frame_code)
source.pack(fill=tkinter.BOTH, expand=tkinter.TRUE)
source.insert('1.0', base_src)
source.config(yscrollcommand=s_bar.set)
s_bar.config(command=source.yview)

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
    
def load():
    print("Loading...")

bouton = tkinter.Button(tab_code, text=_("Load"), command=load)
bouton.pack()

root.mainloop()
