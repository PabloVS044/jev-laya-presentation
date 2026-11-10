import { icon, svgIcon } from '../fx.js'

// 2 · La idea: modelos que deciden

const docs = Array.from({ length: 10 }, (_, i) => `<i class="cdoc${i === 6 ? ' miss' : ''}">${svgIcon('doc', 64)}</i>`).join('')

export default [
  {
    id: 'sistema-1-2',
    section: 2,
    title: 'Sistema 1 y Sistema 2',
    notes: `«La idea viene de un libro de psicología, "Pensar rápido, pensar despacio" de Daniel Kahneman.»
«Sistema 1: lo rápido y automático. Ves un billete y sabes que es de cien sin pensarlo.»
[clic] «Sistema 2: lo lento y deliberado. Calcular 17 por 24 de cabeza.»
[clic] «Un LLM se parece al Sistema 2: razona escribiendo. JEV y Laya son un Sistema 1 para software: reconocen y deciden al instante.»`,
    html: `
      <div class="eyebrow" data-in="fade">La idea</div>
      <h2 class="title md" data-in="words">Pensar rápido, <em>pensar despacio.</em></h2>
      <div class="grid-2 sys">
        <div class="card sys-card s1" data-in="up">
          <div class="sys-n">1</div>
          <h3>Sistema 1</h3>
          <p>Rápido · automático · intuitivo</p>
          <div class="sys-ex">${svgIcon('eye', 40)}<span>Ver un billete y saber que es de <b>Q100</b></span></div>
        </div>
        <div class="card sys-card s2" data-step="1">
          <div class="sys-n">2</div>
          <h3>Sistema 2</h3>
          <p>Lento · deliberado · paso a paso</p>
          <div class="sys-ex">${svgIcon('brain', 40)}<span>Calcular <b>17 × 24</b> de cabeza</span></div>
        </div>
      </div>
      <div class="sys-map" data-step="2">
        <span class="tag2">LLM ≈ Sistema 2</span>
        <span class="arrow">→</span>
        <span class="tag1">JEV y Laya = <b>Sistema 1 para software</b></span>
      </div>`,
  },
  {
    id: 'anatomia',
    section: 2,
    title: 'No escribe, elige',
    notes: `«¿Cómo se usan? Les das dos cosas: un estado —el texto o JSON de la PO— y preguntas con sus opciones.»
[clic] «Pregunta tipo choice: elige una opción. Aquí: PO nueva con 91%.»
[clic] «Tipo score: una escala. Riesgo de la lectura: bajo.»
[clic] «Tipo sí/no (lo llaman "noul"): ¿viene en prepacks? 12% de que sí.»
[clic] «Todo en una sola pasada, unos 30 milisegundos. Y como las opciones las das tú, no puede inventar una respuesta ni romper el JSON.»`,
    html: `
      <div class="eyebrow" data-in="fade">Cómo se usan</div>
      <h2 class="title md" data-in="words">No escribe. <em>Elige.</em></h2>
      <div class="anat">
        <div class="anat-state card" data-in="left">
          <span class="k">Estado</span>
          <pre class="mono">{
  "buyer": "UO",
  "texto": "PURCHASE ORDER
   PO 4501882 …",
  "lineas": 42,
  "issues": []
}</pre>
          <span class="k k2">+ preguntas con opciones</span>
        </div>
        <div class="anat-model" data-in="scale">
          <div class="hexbig">${svgIcon('hex', 150)}</div>
          <b>JEV / Laya</b>
          <small class="mono">1 pasada · ~30 ms</small>
        </div>
        <div class="anat-out">
          <div class="ans card" data-step="1">
            <div class="ans-h"><span class="type">choice</span>¿Qué tipo de documento es?</div>
            <div class="bars">
              <div class="bar"><span>PO nueva</span><i style="--w:91%"></i><b>91%</b></div>
              <div class="bar"><span>Revisión</span><i style="--w:7%"></i><b>7%</b></div>
              <div class="bar"><span>Cancelación</span><i style="--w:2%"></i><b>2%</b></div>
            </div>
          </div>
          <div class="ans card" data-step="2">
            <div class="ans-h"><span class="type">score</span>¿Riesgo de que la lectura esté mal?</div>
            <div class="scale"><i class="on">bajo</i><i>medio</i><i>alto</i><i>crítico</i></div>
          </div>
          <div class="ans card" data-step="3">
            <div class="ans-h"><span class="type">sí / no</span>¿Viene en prepacks?</div>
            <div class="noul"><i style="--w:12%"></i><b>12% sí</b></div>
          </div>
        </div>
      </div>
      <div class="anat-foot" data-step="4">${svgIcon('check', 30)}<span>Las opciones las das tú → <b>no puede inventar</b> ni romper el JSON.</span></div>`,
  },
  {
    id: 'calibrado',
    section: 2,
    title: 'Calibrado: el superpoder',
    notes: `«El superpoder de estos modelos es que su confianza es honesta. A eso le llaman "calibrado".»
[clic] «Si de 10 POs dice "90% seguro", debería acertar más o menos 9. Uno falla, y está bien: lo dijo.»
[clic] «Eso nos deja poner una regla de negocio: si está 95% seguro, sigue solo; si no, lo ve una persona. Con un LLM no se puede, porque su "95%" no significa nada.»`,
    html: `
      <div class="eyebrow" data-in="fade">El superpoder</div>
      <h2 class="title md" data-in="words">Cuando dice 90%, <em>acierta 9 de 10.</em></h2>
      <div class="calib">
        <div class="cdocs">${docs}</div>
        <p class="calib-cap" data-step="1">Eso es estar <b>calibrado</b>: su confianza es <b>honesta</b>.</p>
        <div class="thresh" data-step="2">
          <div class="th-bar"><i class="th-low"></i><i class="th-hi"></i><em class="th-line"><span>95%</span></em></div>
          <div class="th-lbl">
            <span class="lo">${svgIcon('user', 30)}<span>Menos de 95% → <b>lo revisa una persona</b></span></span>
            <span class="hi">${svgIcon('bolt', 30)}<span>95% o más → <b>sigue solo</b></span></span>
          </div>
        </div>
      </div>`,
    onStep(n, el) {
      el.querySelector('.cdocs').classList.toggle('judged', n >= 1)
    },
  },
]
