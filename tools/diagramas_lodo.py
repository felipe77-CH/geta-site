"""Diagramas simples (4:3) da inertização de lodos, para público geral. Mesmo estilo das rotas de chorume.
Uso: python tools/diagramas_lodo.py <raiz do site> [pt|en|es]"""
import sys, pathlib
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Circle
from PIL import Image
import numpy as np

ROOT = pathlib.Path(sys.argv[1])
OUT = ROOT / "img" / "tecnologias" / "inertizacao"
OUT.mkdir(parents=True, exist_ok=True)
LOGO = np.asarray(Image.open(ROOT / "img" / "logo-geta.png").convert("RGBA"))
LOGO = LOGO[: int(LOGO.shape[0] * 0.95)]

NAVY = "#0d1b5e"; MUTED = "#5a6280"; GREEN = "#1fae3a"; DKG = "#17762c"; BROWN = "#8a4a14"
ST = {
    "raw": dict(fc="#eaeefa", ec=NAVY, tc=NAVY, ls="-"),
    "proc": dict(fc="white", ec="#5a6280", tc=NAVY, ls="-"),
    "mid": dict(fc="#f2f5fd", ec="#9fb3dd", tc=NAVY, ls="-"),
    "out": dict(fc=GREEN, ec=GREEN, tc="white", ls="-"),
    "lodo": dict(fc="#4b5165", ec="#4b5165", tc="white", ls="-"),
    "prod": dict(fc="#e6f6ea", ec=DKG, tc=DKG, ls="-"),
    "add": dict(fc="white", ec="#5a6280", tc=MUTED, ls="--"),
    "conc": dict(fc="#f5e6da", ec=BROWN, tc=BROWN, ls="-"),
    "bad": dict(fc=BROWN, ec=BROWN, tc="white", ls="-"),
}
plt.rcParams.update({"font.family": "DejaVu Sans"})

LANG = sys.argv[2] if len(sys.argv) > 2 else "pt"
TR = {
 # 1
 "Como funciona": ("How it works", "Cómo funciona"),
 "Lodo úmido\ncom metais": ("Wet sludge\nwith metals", "Lodo húmedo\ncon metales"),
 "+ polímeros GETA": ("+ GETA polymers", "+ polímeros GETA"),
 "Prendem os metais": ("Lock in the metals", "Atrapan los metales"),
 "Soltam a água": ("Release the water", "Sueltan el agua"),
 "Lodo mais seco\ne seguro": ("Drier, safer\nsludge", "Lodo más seco\ny seguro"),
 # 2
 "O processo em 4 etapas": ("The process in 4 steps", "El proceso en 4 etapas"),
 "Misturar": ("Mix", "Mezclar"),
 "Adensar": ("Thicken", "Espesar"),
 "Desaguar": ("Dewater", "Deshidratar"),
 "Destinar": ("Dispose", "Disponer"),
 "o lodo recebe\nos polímeros": ("the sludge receives\nthe polymers", "el lodo recibe\nlos polímeros"),
 "os flocos ficam\nmais firmes": ("the flocs become\nfirmer", "los flóculos quedan\nmás firmes"),
 "a água sai\nmais rápido": ("the water drains\nfaster", "el agua sale\nmás rápido"),
 "um sólido seguro\ne com menos volume": ("a safe solid\nwith less volume", "un sólido seguro\ny con menos volumen"),
 "Usa os equipamentos que a estação já tem": ("Uses the equipment the plant already has", "Usa los equipos que la planta ya tiene"),
 # 3
 "Antes e depois": ("Before and after", "Antes y después"),
 "Lodo comum": ("Regular sludge", "Lodo común"),
 "Lodo GETA": ("GETA sludge", "Lodo GETA"),
 "Muita água": ("A lot of water", "Mucha agua"),
 "Bem mais seco": ("Much drier", "Mucho más seco"),
 "Pode soltar metais": ("Can release metals", "Puede soltar metales"),
 "Não solta poluentes": ("Releases no pollutants", "No suelta contaminantes"),
 "Desaguamento lento": ("Slow dewatering", "Deshidratación lenta"),
 "Desaguamento rápido": ("Fast dewatering", "Deshidratación rápida"),
 "Só pode ir ao aterro": ("Can only go to landfill", "Solo puede ir al relleno"),
 "Abre novos usos": ("Opens up new uses", "Abre nuevos usos"),
 # 4
 "O piloto": ("The pilot", "El piloto"),
 "Lodo entra": ("Sludge in", "Entra el lodo"),
 "Mistura com\npolímero": ("Mixing with\npolymer", "Mezcla con\npolímero"),
 "Prensa": ("Press", "Prensa"),
 "Sai lodo seco": ("Dry sludge out", "Sale lodo seco"),
 "A água volta\npara a estação": ("Water returns\nto the plant", "El agua vuelve\na la planta"),
 "até 20 m³/h": ("up to 20 m³/h", "hasta 20 m³/h"),
 "automático": ("automatic", "automático"),
 "testado no local": ("tested on site", "probado en el lugar"),
}
FALTA = set()
def _(s):
    if LANG == "pt": return s
    if s not in TR: FALTA.add(s); return s
    return TR[s][0 if LANG == "en" else 1]


def canvas(title):
    fig = plt.figure(figsize=(12, 9), dpi=100, facecolor="white")
    ax = fig.add_axes([0, 0, 1, 1]); ax.set_xlim(0, 12); ax.set_ylim(0, 9); ax.axis("off")
    ax.text(0.4, 8.45, _(title), fontsize=21, fontweight="bold", color=NAVY, va="center")
    lax = fig.add_axes([0.885, 0.855, 0.095, 0.13]); lax.imshow(LOGO); lax.axis("off")
    return fig, ax


def box(ax, x, y, w, h, text, kind, fs=17):
    s = ST[kind]
    ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0,rounding_size=0.16",
                                fc=s["fc"], ec=s["ec"], lw=2.4, ls=s["ls"]))
    ax.text(x + w / 2, y + h / 2, _(text), ha="center", va="center", color=s["tc"], fontsize=fs,
            fontweight="bold", linespacing=1.35)


def arrow(ax, x1, y1, x2, y2, lw=2.6, ms=24):
    ax.annotate("", xy=(x2, y2), xytext=(x1, y1),
                arrowprops=dict(arrowstyle="-|>", color="#5a6280", lw=lw, mutation_scale=ms))


def num(ax, x, y, n, color=GREEN, r=0.42):
    ax.add_patch(Circle((x, y), r, fc=color, ec="white", lw=3, zorder=3))
    ax.text(x, y, str(n), ha="center", va="center", color="white", fontsize=19, fontweight="bold", zorder=4)


def note(ax, y, text):
    ax.text(6.0, y, _(text), ha="center", va="center", fontsize=15, color=MUTED, fontweight="bold")


def save(fig, name):
    if LANG != "pt": name = name.replace(".jpg", "-" + LANG + ".jpg")
    fig.savefig(OUT / name, dpi=100, facecolor="white", pil_kwargs={"quality": 90})
    plt.close(fig); print(name)


# ── 1 · Como funciona ────────────────────────────────────────────────────
fig, ax = canvas("Como funciona")
box(ax, 3.6, 6.2, 4.8, 1.4, "Lodo úmido\ncom metais", "conc", fs=19)
box(ax, 0.5, 6.45, 2.5, 0.9, "+ polímeros GETA", "add", fs=14)
arrow(ax, 3.04, 6.9, 3.56, 6.9)
arrow(ax, 6.0, 6.15, 3.2, 4.85); arrow(ax, 6.0, 6.15, 8.8, 4.85)
box(ax, 0.9, 3.6, 4.6, 1.2, "Prendem os metais", "prod", fs=18)
box(ax, 6.5, 3.6, 4.6, 1.2, "Soltam a água", "prod", fs=18)
arrow(ax, 3.2, 3.55, 6.0, 2.3); arrow(ax, 8.8, 3.55, 6.0, 2.3)
box(ax, 3.6, 0.85, 4.8, 1.4, "Lodo mais seco\ne seguro", "out", fs=19)
save(fig, "lodo-mecanismo.jpg")

# ── 2 · Processo em 4 etapas ─────────────────────────────────────────────
fig, ax = canvas("O processo em 4 etapas")
steps = [("Misturar", "o lodo recebe\nos polímeros"), ("Adensar", "os flocos ficam\nmais firmes"),
         ("Desaguar", "a água sai\nmais rápido"), ("Destinar", "um sólido seguro\ne com menos volume")]
ys = [6.55, 4.95, 3.35, 1.75]
for i, ((t, d), y) in enumerate(zip(steps, ys)):
    last = i == len(steps) - 1
    box(ax, 1.6, y, 3.6, 1.15, t, "out" if last else "proc", fs=20)
    num(ax, 1.6, y + 0.575, i + 1, color=GREEN if not last else DKG)
    ax.text(5.8, y + 0.575, _(d), ha="left", va="center", fontsize=17, color=NAVY, linespacing=1.35)
    if not last:
        arrow(ax, 3.4, y - 0.04, 3.4, ys[i + 1] + 1.19)
note(ax, 0.75, "Usa os equipamentos que a estação já tem")
save(fig, "lodo-processo.jpg")

# ── 3 · Antes e depois ───────────────────────────────────────────────────
fig, ax = canvas("Antes e depois")
C1, C2, CW = 0.6, 6.6, 4.8
box(ax, C1, 6.65, CW, 0.95, "Lodo comum", "bad", fs=19)
box(ax, C2, 6.65, CW, 0.95, "Lodo GETA", "out", fs=19)
rows = [("Muita água", "Bem mais seco"), ("Pode soltar metais", "Não solta poluentes"),
        ("Desaguamento lento", "Desaguamento rápido"), ("Só pode ir ao aterro", "Abre novos usos")]
y = 5.3
for a, b in rows:
    box(ax, C1, y, CW, 1.0, a, "conc", fs=17)
    box(ax, C2, y, CW, 1.0, b, "prod", fs=17)
    arrow(ax, C1 + CW + 0.08, y + 0.5, C2 - 0.08, y + 0.5)
    y -= 1.35
save(fig, "lodo-comparacao.jpg")

# ── 4 · Piloto ───────────────────────────────────────────────────────────
fig, ax = canvas("O piloto")
seq = [("Lodo entra", "conc"), ("Mistura com\npolímero", "proc"), ("Prensa", "proc"), ("Sai lodo seco", "out")]
xs = [0.4, 3.3, 6.2, 9.1]; w = 2.5; y = 4.7
for i, ((t, k), x) in enumerate(zip(seq, xs)):
    box(ax, x, y, w, 1.5, t, k, fs=17)
    if i: arrow(ax, xs[i - 1] + w + 0.04, y + 0.75, x - 0.04, y + 0.75)
box(ax, 6.2, 2.2, 2.5, 1.4, "A água volta\npara a estação", "mid", fs=15)
arrow(ax, 7.45, y - 0.04, 7.45, 3.64)
for i, t in enumerate(["até 20 m³/h", "automático", "testado no local"]):
    cx = 2.2 + i * 3.8
    ax.add_patch(FancyBboxPatch((cx - 1.55, 0.55), 3.1, 0.75, boxstyle="round,pad=0,rounding_size=0.37",
                                fc="#e6f6ea", ec=DKG, lw=2))
    ax.text(cx, 0.925, _(t), ha="center", va="center", fontsize=15, color=DKG, fontweight="bold")
save(fig, "lodo-piloto.jpg")

if FALTA: print("SEM TRADUÇÃO:", FALTA)
