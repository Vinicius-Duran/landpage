import re
from pathlib import Path

t = Path(r"c:/Users/metae/OneDrive/Documents/dev/landpage/novo layout/sobre.html").read_text(encoding="utf-8")
certs = re.findall(
    r'<div class="cert"><span class="yr">(\d+)</span><b>([^<]+)</b><span>([^<]+)</span></div>',
    t,
)
for c in certs:
    print(c)
