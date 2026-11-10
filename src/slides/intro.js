import { icon, svgIcon } from '../fx.js'
import { logoMark, logoFull } from '../logo.js'

// 0 · Apertura · 1 · El problema

export default [
  {
    id: 'antesala',
    section: 0,
    title: 'Antesala (video en bucle)',
    notes: `Corre en bucle mientras la gente entra y se acomoda. No hay que decir nada.
Cuando estén listos: → para pasar a la portada.`,
    html: `<video class="full-bleed" src="media/motion/antesala.mp4" data-autoplay loop data-preview-time="14"></video>`,
  },
  {
    id: 'portada',
    section: 0,
    layout: 'cover',
    title: 'Portada',
    notes: `«Hoy les traigo una investigación sobre dos modelos de IA, JEV y Laya, y sobre cómo podrían ayudarnos en el módulo OCR, en el flujo de POs.»
«No hace falta saber de machine learning; la idea es que salgan entendiendo qué son, qué no son y dónde nos sirven.»`,
    html: `
      <div class="hexfield" aria-hidden="true"></div>
      <div class="cover-in">
        <div class="cover-logo" data-in="scale">${logoMark(150)}</div>
        <div class="eyebrow" data-in="fade">Investigación · Módulo OCR</div>
        <h1 class="title xl" data-in="words">Modelos que <em>deciden.</em></h1>
        <p class="lead" data-in="up">JEV y Laya: qué son, en qué se diferencian y cómo pueden ayudar a nuestro flujo de POs.</p>
        <div class="cover-foot" data-in="fade">
          <span class="mono">Noviembre 2026</span>
        </div>
      </div>
      <div class="cover-brand" data-in="fade">${logoFull(46)}</div>`,
  },

  // ---------------- 1 · El problema ----------------
  {
    id: 'decidir',
    section: 1,
    title: 'Todos los días el sistema decide',
    notes: `«Pensemos en una PO que entra por OneDrive.» Señala el documento.
[clic] «Antes de guardarla, el sistema tiene que contestar preguntas: ¿es nueva, una revisión o una cancelación?»
[clic] «¿De qué buyer y en qué formato viene?»
[clic] «¿La lectura salió bien o alguien tiene que revisarla?»
[clic] «Hoy esas preguntas las resolvemos con regex… o, si siguiéramos la moda, preguntándole a un LLM.»`,
    html: `
      <div class="eyebrow" data-in="fade">El problema</div>
      <h2 class="title md" data-in="words">Cada PO que entra trae <em>preguntas.</em></h2>
      <div class="decide">
        <div class="po-doc" data-in="left">
          <div class="po-top"><b>PURCHASE ORDER</b><span class="mono">PO 4501882</span></div>
          <div class="po-meta"><span>Buyer: <b>Urban Outfitters</b></span><span>Ship date: <b>12/02/2027</b></span></div>
          <div class="po-lines">
            <i></i><i></i><i></i><i class="short"></i><i></i><i class="short"></i>
          </div>
          <div class="po-tot"><span>Total units</span><b class="mono">1,200</b></div>
          <div class="po-file mono">F# 9214 / PO_4501882_rev2.pdf</div>
        </div>
        <div class="qs">
          <div class="q" data-step="1"><span class="qn">?</span><span>¿Es nueva, una <b>revisión</b> o una <b>cancelación</b>?</span></div>
          <div class="q" data-step="2"><span class="qn">?</span><span>¿De qué <b>buyer</b> y en qué <b>formato</b> viene?</span></div>
          <div class="q" data-step="3"><span class="qn">?</span><span>¿La lectura salió bien o hay que <b>revisarla</b>?</span></div>
          <div class="q-foot" data-step="4">Hoy: <b>regex</b>. La moda: <b>preguntarle a un LLM</b>.</div>
        </div>
      </div>`,
  },
  {
    id: 'dos-caminos',
    section: 1,
    title: 'Reglas vs LLM',
    notes: `«Las reglas son rápidas y exactas… hasta que el proveedor cambia el formato del PDF. Y no saben decir "no estoy seguro".»
[clic] «Un LLM sí entiende texto, pero escribe la respuesta palabra por palabra: es lento, puede inventar una opción que no existe o devolver un JSON roto. Y si le pides su confianza, "95%" es solo texto, no una probabilidad real.»
[clic] «¿Habrá algo en medio? Rápido como una regla, pero que entienda el texto como un modelo.»`,
    html: `
      <div class="eyebrow" data-in="fade">Las dos opciones de hoy</div>
      <h2 class="title md" data-in="words">Ninguna es <em>ideal.</em></h2>
      <div class="grid-2 vs">
        <div class="card vs-card" data-in="up">
          ${icon('code')}
          <h3>Reglas · regex</h3>
          <ul class="pc">
            <li class="p">Rápidas y exactas</li>
            <li class="c">Se rompen cuando cambia el formato</li>
            <li class="c">Solo sí o no: nunca "no estoy seguro"</li>
          </ul>
        </div>
        <div class="card vs-card" data-step="1">
          ${icon('chat')}
          <h3>LLM · ChatGPT, Claude…</h3>
          <ul class="pc">
            <li class="p">Entiende el texto</li>
            <li class="c">Lento: escribe palabra por palabra</li>
            <li class="c">Puede inventar o romper el JSON</li>
            <li class="c">Su "95% seguro" es solo texto</li>
          </ul>
        </div>
      </div>
      <div class="bridge" data-step="2"><span class="dot"></span><span>¿Y si hubiera algo <b>en medio</b>?</span></div>`,
  },
  {
    id: 'video-llm-vs-s1',
    section: 1,
    title: 'Video: LLM vs modelo de decisión',
    notes: `Deja correr el video (~16 s). Narra encima:
«A la izquierda, un LLM: le pedimos clasificar la PO y va escribiendo… tarda casi dos segundos y al final inventa una categoría que no existe: "revisión parcial".»
«A la derecha, un modelo de decisión: recibe las mismas opciones y en 30 milisegundos devuelve un porcentaje para cada una. Siempre es una opción válida.»
«Mismo pedido. Uno escribe, el otro elige.» Tecla V para pausar.`,
    html: `<video class="full-bleed" src="media/motion/llm-vs-system1.mp4" data-autoplay data-preview-time="12"></video>`,
  },
]
