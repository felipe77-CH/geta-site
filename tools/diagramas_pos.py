"""Diagramas simples (4:3) do Processo de Oxidação Seletiva (POS), no mesmo estilo dos de lodos e chorume.
Uso: python tools/diagramas_pos.py <raiz do site> [pt|en|es]   (en/es geram *-en.jpg / *-es.jpg)"""
import sys, pathlib
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Circle
from PIL import Image
import numpy as np

ROOT = pathlib.Path(sys.argv[1])
OUT = ROOT / "img" / "tecnologias" / "pos"
OUT.mkdir(parents=True, exist_ok=True)
LOGO = np.asarray(Image.open(ROOT / "img" / "logo-geta.png").convert("RGBA"))
LOGO = LOGO[: int(LOGO.shape[0] * 0.95)]

NAVY = "#0d1b5e"; MUTED = "#5a6280"; GREEN = "#1fae3a"; DKG = "#17762c"; BROWN = "#8a4a14"
ST = {
    "raw": dict(fc="#eaeefa", ec=NAVY, tc=NAVY, ls="-"),
    "proc": dict(fc="white", ec="#5a6280", tc=NAVY, ls="-"),
    "mid": dict(fc="#f2f5fd", ec="#9fb3dd", tc=NAVY, ls="-"),
    "out": dict(fc=GREEN, ec=GREEN, tc="white", ls="-"),
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
 "Vinhaça": ("Vinasse", "Vinaza"),
 "+ CO₂ ativado\nno plasma": ("+ CO₂ activated\nin plasma", "+ CO₂ activado\nen plasma"),
 "Oxidação seletiva": ("Selective oxidation", "Oxidación selectiva"),
 "Quebra os compostos\nque travam a digestão": ("Breaks down the compounds\nthat block digestion", "Rompe los compuestos\nque traban la digestión"),
 "Preserva o que\nvira metano": ("Keeps what\nbecomes methane", "Preserva lo que\nse vuelve metano"),
 "Vinhaça pronta para\no biodigestor": ("Vinasse ready for\nthe digester", "Vinaza lista para\nel biodigestor"),
 # 2
 "O processo em 4 etapas": ("The process in 4 steps", "El proceso en 4 etapas"),
 "+ agente oxidativo\ngasoso GETA": ("+ GETA gaseous\noxidizing agent", "+ agente oxidativo\ngaseoso GETA"),
 "Gerar": ("Generate", "Generar"),
 "Injetar": ("Inject", "Inyectar"),
 "o agente oxidativo\nno reator de plasma": ("the oxidizing agent\nin the plasma reactor", "el agente oxidativo\nen el reactor de plasma"),
 "o gás na vinhaça": ("the gas into the vinasse", "el gas en la vinaza"),
 "AGENTE": ("AGENT", "AGENTE"),
 "CONSUMO": ("CONSUMPTION", "CONSUMO"),
 "Reagentes\nlíquidos": ("Liquid\nreagents", "Reactivos\nlíquidos"),
 "Agente gasoso\nGETA": ("GETA gaseous\nagent", "Agente gaseoso\nGETA"),
 "agente gasoso próprio": ("in-house gaseous agent", "agente gaseoso propio"),
 "Ativar": ("Activate", "Activar"),
 "Oxidar": ("Oxidize", "Oxidar"),
 "Biodigerir": ("Digest", "Biodigerir"),
 "o CO₂ separado\nno biogás": ("the CO₂ separated\nfrom the biogas", "el CO₂ separado\nen el biogás"),
 "o CO₂ em um\nreator de plasma": ("the CO₂ in a\nplasma reactor", "el CO₂ en un\nreactor de plasma"),
 "só os compostos\nque inibem": ("only the compounds\nthat inhibit", "solo los compuestos\nque inhiben"),
 "a vinhaça rende\nmais biometano": ("the vinasse yields\nmore biomethane", "la vinaza rinde\nmás biometano"),
 # 3
 "Oxidação convencional × seletiva": ("Conventional × selective oxidation", "Oxidación convencional × selectiva"),
 "Convencional": ("Conventional", "Convencional"),
 "Seletiva GETA": ("GETA selective", "Selectiva GETA"),
 "ALVO": ("TARGET", "OBJETIVO"),
 "REAGENTE": ("REAGENT", "REACTIVO"),
 "SUBSTRATO": ("SUBSTRATE", "SUSTRATO"),
 "CO₂": ("CO₂", "CO₂"),
 "Ataca tudo": ("Attacks everything", "Ataca todo"),
 "Só os inibidores": ("Only the inhibitors", "Solo los inhibidores"),
 "Alto consumo": ("High consumption", "Alto consumo"),
 "Menos reagente": ("Less reagent", "Menos reactivo"),
 "Perde o que\nviraria metano": ("Loses what would\nbecome methane", "Pierde lo que\nse volvería metano"),
 "Preserva o que\nvira metano ": ("Keeps what\nbecomes methane", "Preserva lo que\nse vuelve metano"),
 "Descartado": ("Discarded", "Descartado"),
 "Reaproveitado": ("Reused", "Reaprovechado"),
 # 4
 "Integração à usina": ("Integration into the plant", "Integración a la planta"),
 "Reator\nPOS": ("POS\nreactor", "Reactor\nPOS"),
 "Biodigestor": ("Digester", "Biodigestor"),
 "Upgrading\ndo biogás": ("Biogas\nupgrading", "Upgrading\ndel biogás"),
 "Biometano": ("Biomethane", "Biometano"),
 "CO₂ volta ao processo": ("CO₂ returns to the process", "El CO₂ vuelve al proceso"),
 "Digestato": ("Digestate", "Digestato"),
 "antes do biodigestor": ("before the digester", "antes del biodigestor"),
 "usa o CO₂ da própria usina": ("uses the plant's own CO₂", "usa el CO₂ de la propia planta"),
 "mais biometano": ("more biomethane", "más biometano"),
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


def arrow(ax, x1, y1, x2, y2, lw=2.6, ms=24, color="#5a6280"):
    ax.annotate("", xy=(x2, y2), xytext=(x1, y1),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=ms))


def num(ax, x, y, n, color=GREEN, r=0.42):
    ax.add_patch(Circle((x, y), r, fc=color, ec="white", lw=3, zorder=3))
    ax.text(x, y, str(n), ha="center", va="center", color="white", fontsize=19, fontweight="bold", zorder=4)


def pill(ax, cx, y, text):
    ax.add_patch(FancyBboxPatch((cx - 1.65, y), 3.3, 0.75, boxstyle="round,pad=0,rounding_size=0.37", fc="#e6f6ea", ec=DKG, lw=2))
    ax.text(cx, y + 0.375, _(text), ha="center", va="center", fontsize=14.5, color=DKG, fontweight="bold")


def save(fig, name):
    if LANG != "pt": name = name.replace(".jpg", "-" + LANG + ".jpg")
    fig.savefig(OUT / name, dpi=100, facecolor="white", pil_kwargs={"quality": 90})
    plt.close(fig); print(name)


# ── 1 · Como funciona ────────────────────────────────────────────────────
fig, ax = canvas("Como funciona")
box(ax, 4.1, 6.55, 3.8, 1.1, "Vinhaça", "conc", fs=19)
box(ax, 4.1, 4.85, 3.8, 1.1, "Oxidação seletiva", "proc", fs=18)
arrow(ax, 6.0, 6.51, 6.0, 5.99)
box(ax, 0.45, 4.88, 2.95, 1.04, "+ agente oxidativo\ngasoso GETA", "add", fs=14)
arrow(ax, 3.44, 5.4, 4.06, 5.4)
arrow(ax, 6.0, 4.81, 3.2, 4.0); arrow(ax, 6.0, 4.81, 8.8, 4.0)
box(ax, 0.8, 2.75, 4.8, 1.2, "Quebra os compostos\nque travam a digestão", "prod", fs=16)
box(ax, 6.4, 2.75, 4.8, 1.2, "Preserva o que\nvira metano", "prod", fs=16)
arrow(ax, 3.2, 2.71, 6.0, 1.94); arrow(ax, 8.8, 2.71, 6.0, 1.94)
box(ax, 3.6, 0.6, 4.8, 1.3, "Vinhaça pronta para\no biodigestor", "out", fs=17)
save(fig, "pos-mecanismo.jpg")

# ── 2 · Processo em 4 etapas ─────────────────────────────────────────────
fig, ax = canvas("O processo em 4 etapas")
steps = [("Gerar", "o agente oxidativo\nno reator de plasma"), ("Injetar", "o gás na vinhaça"),
         ("Oxidar", "só os compostos\nque inibem"), ("Biodigerir", "a vinhaça rende\nmais biometano")]
rend = fig.canvas.get_renderer()
def largura(s, fs):
    tt = ax.text(0, 0, s, fontsize=fs, linespacing=1.35); wpx = tt.get_window_extent(renderer=rend).width; tt.remove()
    return wpx / 100.0
BW, GAP = 3.6, 0.6
tw = max(largura(_(d), 17) for _t, d in steps)
x0 = (12 - (BW + GAP + tw)) / 2 + 0.2
ys = [6.2, 4.6, 3.0, 1.4]
for i, ((t, d), y) in enumerate(zip(steps, ys)):
    last = i == len(steps) - 1
    box(ax, x0, y, BW, 1.15, t, "out" if last else "proc", fs=20)
    num(ax, x0, y + 0.575, i + 1, color=GREEN if not last else DKG)
    ax.text(x0 + BW + GAP, y + 0.575, _(d), ha="left", va="center", fontsize=17, color=NAVY, linespacing=1.35)
    if not last:
        arrow(ax, x0 + BW / 2, y - 0.04, x0 + BW / 2, ys[i + 1] + 1.19)
save(fig, "pos-processo.jpg")

# ── 3 · Convencional × seletiva ──────────────────────────────────────────
fig, ax = canvas("Oxidação convencional × seletiva")
LX, LW = 0.35, 2.55
C1, C2, CW = 3.25, 7.75, 3.9
box(ax, C1, 6.6, CW, 0.95, "Convencional", "bad", fs=17)
box(ax, C2, 6.6, CW, 0.95, "Seletiva GETA", "out", fs=17)
rows = [("ALVO", "Ataca tudo", "Só os inibidores"),
        ("CONSUMO", "Alto consumo", "Menos reagente"),
        ("SUBSTRATO", "Perde o que\nviraria metano", "Preserva o que\nvira metano "),
        ("AGENTE", "Reagentes\nlíquidos", "Agente gasoso\nGETA")]
y = 5.3
for lab, a, b in rows:
    ax.add_patch(FancyBboxPatch((LX, y), LW, 1.1, boxstyle="round,pad=0,rounding_size=0.16", fc="#f6f7fc", ec="#dde3f3", lw=2))
    ax.text(LX + LW / 2, y + 0.55, _(lab), ha="center", va="center", fontsize=14, color=NAVY, fontweight="bold")
    box(ax, C1, y, CW, 1.1, a, "conc", fs=16)
    box(ax, C2, y, CW, 1.1, b, "prod", fs=16)
    arrow(ax, C1 + CW + 0.08, y + 0.55, C2 - 0.08, y + 0.55)
    y -= 1.4
save(fig, "pos-comparacao.jpg")

# ── 4 · Integração à usina (diagrama de blocos com reciclo de CO₂) ───────
fig, ax = canvas("Integração à usina")
seq = [("Vinhaça", "conc"), ("Reator\nPOS", "proc"), ("Biodigestor", "proc"), ("Upgrading\ndo biogás", "proc"), ("Biometano", "out")]
w, gap, y, hh = 2.0, 0.35, 4.6, 1.3
xs = [0.3 + i * (w + gap) for i in range(len(seq))]
for i, ((t, k), x) in enumerate(zip(seq, xs)):
    box(ax, x, y, w, hh, t, k, fs=15.5)
    if i: arrow(ax, xs[i - 1] + w + 0.04, y + hh / 2, x - 0.04, y + hh / 2)
# entrada do agente oxidativo gasoso no reator POS
px = xs[1] + w / 2
box(ax, px - 1.55, 6.5, 3.1, 1.0, "+ agente oxidativo\ngasoso GETA", "add", fs=13)
arrow(ax, px, 6.46, px, y + hh + 0.04)
# digestato
dx = xs[2] + w / 2
box(ax, xs[2] + 0.2, 2.75, w - 0.4, 0.8, "Digestato", "mid", fs=13.5)
arrow(ax, dx, y - 0.04, dx, 3.59)
for i, t in enumerate(["antes do biodigestor", "agente gasoso próprio", "mais biometano"]):
    pill(ax, 2.2 + i * 3.8, 0.8, t)
save(fig, "pos-usina.jpg")

if FALTA: print("SEM TRADUÇÃO:", FALTA)
