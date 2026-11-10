import { icon, svgIcon } from '../fx.js'

// 3 · JEV y Laya

const yes = svgIcon('check', 30)
const no = svgIcon('x', 30)

export default [
  {
    id: 'dos-modelos',
    section: 3,
    title: 'JEV y Laya',
    notes: `«Ahora sí, los dos protagonistas. Son el mismo concepto, por dos caminos distintos.»
«JEV es de TypeSafe, salió en septiembre de 2026. Es un servicio en la nube: le mandas tu texto y pagas por uso. No sabemos cómo está hecho por dentro, y nuestros datos viajan a un tercero.»
[clic] «Laya es de ConvAI Innovations. Es un modelo abierto, con licencia Apache: lo descargas, lo instalas en nuestro servidor —basta con CPU— y lo puedes entrenar con nuestros propios datos. Y algo clave: habla exactamente la misma API que JEV.»`,
    html: `
      <div class="eyebrow" data-in="fade">Los protagonistas</div>
      <h2 class="title md" data-in="words">Mismo concepto, <em>dos caminos.</em></h2>
      <div class="grid-2 duo">
        <div class="card duo-card jev" data-in="up">
          <div class="duo-head">
            <div class="duo-logo">${svgIcon('cloud', 54)}</div>
            <div><h3>JEV</h3><span class="k">TypeSafe · sept 2026</span></div>
            <span class="pill dark">API cerrada</span>
          </div>
          <ul class="duo-list">
            <li>${svgIcon('cloud', 30)} Servicio en la nube</li>
            <li>${svgIcon('coin', 30)} Pagas por uso</li>
            <li>${svgIcon('eyeoff', 30)} No se sabe cómo está hecho</li>
            <li>${svgIcon('globe', 30)} Tus datos viajan a un tercero</li>
          </ul>
        </div>
        <div class="card duo-card laya" data-step="1">
          <div class="duo-head">
            <div class="duo-logo">${svgIcon('box', 54)}</div>
            <div><h3>Laya</h3><span class="k">ConvAI Innovations</span></div>
            <span class="pill">Apache 2.0</span>
          </div>
          <ul class="duo-list">
            <li>${svgIcon('download', 30)} Se descarga y se instala en casa</li>
            <li>${svgIcon('cpu', 30)} Corre en nuestro servidor (CPU basta)</li>
            <li>${svgIcon('pen', 30)} Se entrena con nuestros datos</li>
            <li>${svgIcon('plug', 30)}<span>Habla la <b>misma API</b> que JEV</span></li>
          </ul>
        </div>
      </div>`,
  },
  {
    id: 'laya-dentro',
    section: 3,
    title: 'Laya por dentro (sin matemáticas)',
    notes: `«¿Cómo es Laya por dentro? Sin matemáticas.»
«Primero, un lector tipo BERT —la misma familia que usan los buscadores—: lee todo el texto de una vez, no palabra por palabra.»
«Segundo, cada opción tiene su propia casilla: el modelo le da un puntaje a cada una y eso se convierte en porcentajes.»
«Tercero, lo entrenaron premiando que diga la probabilidad correcta, no solo que acierte. Por eso su confianza es honesta.»
[clic] «Y es chico: unos 400 millones de parámetros, unos 800 MB. Un LLM típico tiene decenas o cientos de miles de millones.»`,
    html: `
      <div class="eyebrow" data-in="fade">Laya por dentro</div>
      <h2 class="title md" data-in="words">Tres ideas, <em>cero matemáticas.</em></h2>
      <div class="inside">
        <div class="in-step card" data-in="up">
          <span class="in-n">1</span>${icon('search')}
          <h4>Lee todo de una vez</h4>
          <p>Un lector tipo BERT, no escribe palabra por palabra</p>
        </div>
        <div class="in-arrow" data-in="fade">→</div>
        <div class="in-step card" data-in="up">
          <span class="in-n">2</span>${icon('sort')}
          <h4>Puntúa cada opción</h4>
          <p>Cada opción tiene su "casilla"; los puntajes se vuelven %</p>
        </div>
        <div class="in-arrow" data-in="fade">→</div>
        <div class="in-step card" data-in="up">
          <span class="in-n">3</span>${icon('target')}
          <h4>Entrenado para ser honesto</h4>
          <p>Se le premia decir la probabilidad correcta, no solo acertar</p>
        </div>
      </div>
      <div class="size" data-step="1">
        <div class="size-row"><span>Laya</span><i class="sz laya" style="--w:0.6%"></i><b>0.4 mil millones · ~800 MB</b></div>
        <div class="size-row"><span>LLM típico</span><i class="sz llm" style="--w:100%"></i><b>70+ mil millones</b></div>
      </div>`,
  },
  {
    id: 'comparacion',
    section: 3,
    title: 'Comparación rápida',
    notes: `Recorre la tabla fila por fila, sin detenerte mucho.
«Dónde corre: JEV en su nube, Laya donde queramos. Costo: JEV por uso, Laya solo infraestructura. Datos: con Laya no salen de la empresa. Entrenar con lo nuestro: solo Laya. Velocidad: Laya más rápido. Muchas opciones —más de 20—: ahí JEV gana.»
[clic] «Lo mejor: como hablan la misma API, cambiar de uno a otro es cambiar una URL.»`,
    html: `
      <div class="eyebrow" data-in="fade">Cara a cara</div>
      <h2 class="title md" data-in="words">JEV <em>vs</em> Laya.</h2>
      <div class="cmp">
        <div class="cmp-row head" data-in="fade"><span></span><b>JEV</b><b class="lb">Laya</b></div>
        <div class="cmp-row" data-in="left"><span>Dónde corre</span><em>Su nube</em><em class="lb">Donde queramos</em></div>
        <div class="cmp-row" data-in="left"><span>Costo</span><em>Por uso</em><em class="lb">Solo infraestructura</em></div>
        <div class="cmp-row" data-in="left"><span>Nuestros datos</span><em class="bad">${no} Salen</em><em class="lb ok">${yes} Se quedan</em></div>
        <div class="cmp-row" data-in="left"><span>Entrenar con lo nuestro</span><em class="bad">${no} No</em><em class="lb ok">${yes} Sí</em></div>
        <div class="cmp-row" data-in="left"><span>Velocidad</span><em>~150–500 ms</em><em class="lb ok">~30 ms GPU · ~300 ms CPU</em></div>
        <div class="cmp-row" data-in="left"><span>Más de 20 opciones</span><em class="ok">${yes} Mejor</em><em class="lb bad">${no} Se le complica</em></div>
      </div>
      <div class="bridge" data-step="1">${svgIcon('plug', 34)}<span>Misma API <code>/v1/systemone</code> → cambiar de uno a otro es <b>cambiar una URL</b>.</span></div>`,
  },
  {
    id: 'lo-que-no-son',
    section: 3,
    title: 'Lo que no son',
    notes: `«Esto es importante para no confundirnos.»
«No son OCR: no leen el PDF ni la imagen. No sacan datos: no te devuelven "PO 4501234" ni una cantidad. Y no razonan ni conversan.»
[clic] «Y hay que tomarlos con cuidado: son muy nuevos, de septiembre a noviembre de este año; los benchmarks los publicó el propio autor; y el mismo autor reconoce que, sin entrenar con datos propios, Laya en decisiones de negocio casi adivina.»`,
    html: `
      <div class="eyebrow" data-in="fade">Para no confundirnos</div>
      <h2 class="title md" data-in="words">Lo que <em>no</em> son.</h2>
      <div class="grid-3 nots">
        <div class="card not" data-in="up">${icon('scan')}<h4>No son OCR</h4><p>No leen el PDF ni la imagen</p></div>
        <div class="card not" data-in="up">${icon('type')}<h4>No sacan datos</h4><p>No devuelven "PO 4501234" ni cantidades</p></div>
        <div class="card not" data-in="up">${icon('chat')}<h4>No conversan</h4><p>No razonan ni escriben texto</p></div>
      </div>
      <div class="caution" data-step="1">
        <span class="c-h">${svgIcon('alert', 32)} Y con cuidado:</span>
        <span>Muy nuevos (sept–nov 2026)</span>
        <span>Benchmarks del propio autor</span>
        <span>Sin entrenar con lo nuestro, Laya <b>casi adivina</b></span>
      </div>`,
  },
]
