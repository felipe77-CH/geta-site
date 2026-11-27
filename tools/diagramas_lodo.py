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
 "Mistura": ("Mixing", "Mezcla"),
 "+ polímeros": ("+ polymers", "+ polímeros"),
 "Antes: floco solto,\ncheio de água": ("Before: loose floc,\nfull of water", "Antes: flóculo suelto,\nlleno de agua"),
 "Depois: floco firme,\nmetais presos e água fora": ("After: firm floc,\nmetals locked in, water out", "Después: flóculo firme,\nmetales atrapados y agua fuera"),
 "Lodo de ETE": ("WWTP sludge", "Lodo de PTAR"),
 "Bomba": ("Pump", "Bomba"),
 "Prensa": ("Press", "Prensa"),
 "Lodo seco\ne seguro": ("Dry, safe\nsludge", "Lodo seco\ny seguro"),
 "+ polímero\n(dosagem automática)": ("+ polymer\n(automatic dosing)", "+ polímero\n(dosificación automática)"),
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
# Fluxo: lodo → mistura (+ polímeros) → lodo seco
RY, RH, RW = 5.1, 1.4, 3.2
box(ax, 0.4, RY, RW, RH, "Lodo úmido\ncom metais", "conc", fs=18)
box(ax, 4.4, RY, RW, RH, "Mistura", "proc", fs=19)
box(ax, 8.4, RY, RW, RH, "Lodo mais seco\ne seguro", "out", fs=18)
arrow(ax, 3.64, RY + RH / 2, 4.36, RY + RH / 2)
arrow(ax, 7.64, RY + RH / 2, 8.36, RY + RH / 2)
box(ax, 4.65, 7.0, 2.7, 0.75, "+ polímeros GETA", "add", fs=14)
arrow(ax, 6.0, 6.96, 6.0, RY + RH + 0.04)
# Ilustração: o floco antes e depois
rng = np.random.default_rng(7)
def floco(cx, cy, solto):
    R = 1.25 if solto else 0.8
    n = 16 if solto else 22
    for _i in range(n):
        ang, rr = rng.uniform(0, 2 * np.pi), R * np.sqrt(rng.uniform(0, 1))
        r = rng.uniform(0.2, 0.32) if solto else rng.uniform(0.2, 0.3)
        ax.add_patch(Circle((cx + rr * np.cos(ang), cy + rr * np.sin(ang)), r, fc="#8a5a2b", ec="#6d4520", lw=1, alpha=0.92, zorder=2))
    # metais (cinza)
    for _i in range(9):
        if solto:
            ang, rr = rng.uniform(0, 2 * np.pi), (R + 0.25) * np.sqrt(rng.uniform(0.2, 1))
        else:  # presos e bem distribuídos dentro do floco
            ang, rr = _i * 2 * np.pi / 9 + 0.35, (0.28 if _i % 2 else 0.58)
        ax.add_patch(Circle((cx + rr * np.cos(ang), cy + rr * np.sin(ang)), 0.1, fc="#9aa3b5", ec="#4b5165", lw=1.2, zorder=4))
    if solto:  # água presa no meio do floco
        for _i in range(16):
            ang, rr = rng.uniform(0, 2 * np.pi), R * 1.05 * np.sqrt(rng.uniform(0, 1))
            ax.add_patch(Circle((cx + rr * np.cos(ang), cy + rr * np.sin(ang)), rng.uniform(0.08, 0.13), fc="#5bb8f0", ec="white", lw=1, zorder=3))
    else:      # polímeros envolvendo e água saindo
        th = np.linspace(0, 2 * np.pi, 200)
        for k, (col, a, b, rot) in enumerate([(GREEN, 1.15, 0.95, 0.3), ("#2f7fd6", 1.05, 1.15, 1.2), (GREEN, 1.2, 1.0, 2.2), ("#2f7fd6", 0.95, 1.2, 2.9)]):
            x = a * np.cos(th); y = b * np.sin(th)
            ax.plot(cx + x * np.cos(rot) - y * np.sin(rot), cy + x * np.sin(rot) + y * np.cos(rot), color=col, lw=3, alpha=0.85, zorder=5)
        for k in range(10):
            ang = k * 2 * np.pi / 10 + 0.2; r1 = 1.5
            px, py = cx + r1 * np.cos(ang), cy + r1 * np.sin(ang)
            ax.add_patch(Circle((px, py), 0.11, fc="#5bb8f0", ec="white", lw=1, zorder=3))
            ax.annotate("", xy=(cx + 1.85 * np.cos(ang), cy + 1.85 * np.sin(ang)), xytext=(cx + 1.66 * np.cos(ang), cy + 1.66 * np.sin(ang)),
                        arrowprops=dict(arrowstyle="-|>", color="#5bb8f0", lw=1.6, mutation_scale=11))
floco(3.0, 2.55, True)
floco(9.0, 2.55, False)
arrow(ax, 4.75, 2.55, 6.85, 2.55, lw=3, ms=28)
ax.text(5.8, 2.95, _("+ polímeros"), ha="center", va="bottom", fontsize=14, color=MUTED, fontweight="bold")
ax.text(3.0, 0.45, _("Antes: floco solto,\ncheio de água"), ha="center", va="center", fontsize=15, color=BROWN, fontweight="bold", linespacing=1.3)
ax.text(9.0, 0.45, _("Depois: floco firme,\nmetais presos e água fora"), ha="center", va="center", fontsize=15, color=DKG, fontweight="bold", linespacing=1.3)
save(fig, "lodo-mecanismo.jpg")

# ── 2 · Processo em 4 etapas ─────────────────────────────────────────────
fig, ax = canvas("O processo em 4 etapas")
steps = [("Misturar", "o lodo recebe\nos polímeros"), ("Adensar", "os flocos ficam\nmais firmes"),
         ("Desaguar", "a água sai\nmais rápido"), ("Destinar", "um sólido seguro\ne com menos volume")]
# Mede o texto mais largo para centralizar o conjunto (caixa + descrição) na imagem
rend = fig.canvas.get_renderer()
def largura(s, fs):
    tt = ax.text(0, 0, s, fontsize=fs, linespacing=1.35); wpx = tt.get_window_extent(renderer=rend).width; tt.remove()
    return wpx / 100.0
BW, GAP = 3.6, 0.6
tw = max(largura(_(d), 17) for _t, d in steps)
x0 = (12 - (BW + GAP + tw)) / 2 + 0.2   # +0.2 compensa o círculo do número à esquerda
ys = [6.45, 4.9, 3.35, 1.8]
for i, ((t, d), y) in enumerate(zip(steps, ys)):
    last = i == len(steps) - 1
    box(ax, x0, y, BW, 1.15, t, "out" if last else "proc", fs=20)
    num(ax, x0, y + 0.575, i + 1, color=GREEN if not last else DKG)
    ax.text(x0 + BW + GAP, y + 0.575, _(d), ha="left", va="center", fontsize=17, color=NAVY, linespacing=1.35)
    if not last:
        arrow(ax, x0 + BW / 2, y - 0.04, x0 + BW / 2, ys[i + 1] + 1.19)
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
# Diagrama de blocos: entrada → processos → saída, com o polímero entrando na mistura
seq = [("Lodo de ETE", "conc"), ("Bomba", "proc"), ("Mistura", "proc"), ("Prensa", "proc"), ("Lodo seco\ne seguro", "out")]
w, gap, y, hh = 2.0, 0.35, 4.3, 1.3
xs = [0.3 + i * (w + gap) for i in range(len(seq))]
for i, ((t, k), x) in enumerate(zip(seq, xs)):
    box(ax, x, y, w, hh, t, k, fs=16)
    if i: arrow(ax, xs[i - 1] + w + 0.04, y + hh / 2, x - 0.04, y + hh / 2)
# entrada do polímero (tracejado) na mistura
mx = xs[2] + w / 2
box(ax, mx - 1.6, 6.35, 3.2, 1.0, "+ polímero\n(dosagem automática)", "add", fs=13)
arrow(ax, mx, 6.31, mx, y + hh + 0.04)
# saída de água da prensa
px = xs[3] + w / 2
box(ax, xs[3] - 0.25, 1.95, w + 0.5, 1.15, "A água volta\npara a estação", "mid", fs=14)
arrow(ax, px, y - 0.04, px, 3.14)
for i, t in enumerate(["até 20 m³/h", "automático", "testado no local"]):
    cx = 2.2 + i * 3.8
    ax.add_patch(FancyBboxPatch((cx - 1.55, 0.45), 3.1, 0.75, boxstyle="round,pad=0,rounding_size=0.37",
                                fc="#e6f6ea", ec=DKG, lw=2))
    ax.text(cx, 0.825, _(t), ha="center", va="center", fontsize=15, color=DKG, fontweight="bold")
save(fig, "lodo-piloto.jpg")

if FALTA: print("SEM TRADUÇÃO:", FALTA)
