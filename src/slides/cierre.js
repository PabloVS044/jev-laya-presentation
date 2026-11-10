import { icon, svgIcon } from '../fx.js'
import { logoMark } from '../logo.js'

// 6 · Cómo lo haríamos · 7 · Cierre

export default [
  // ---------------- 6 · Cómo lo haríamos ----------------
  {
    id: 'arquitectura',
    section: 6,
    title: 'Arquitectura propuesta',
    notes: `«¿Cómo se conectaría? Muy simple.»
«El ERP en .NET llama a una interfaz, IDecisionEngine.»
[clic] «Esa interfaz manda un HTTP a Laya, que corre en un contenedor nuestro. Los datos no salen.»
[clic] «Como JEV habla la misma API, queda como opción con solo cambiar la URL en la configuración.»
[clic] «Y cada decisión se guarda en una tabla: sirve para auditar y como datos para volver a entrenar.»`,
    html: `
      <div class="eyebrow" data-in="fade">Cómo lo haríamos</div>
      <h2 class="title md" data-in="words">Una interfaz, <em>dos motores.</em></h2>
      <div class="arch">
        <svg class="arch-wires" viewBox="0 0 1660 560">
          <path class="draw" d="M380 200 H560" />
          <path class="w-laya" d="M960 200 H1200" />
          <path class="w-jev" d="M960 230 C1080 230 1080 420 1200 420" />
          <path class="w-db" d="M760 280 V420" />
        </svg>
        <div class="an erp" data-in="left">${icon('code')}<b>ERP · Blazor .NET</b><small>módulo OCR</small></div>
        <div class="an api" data-in="up">${icon('plug')}<b>IDecisionEngine</b><small class="mono">POST /v1/systemone</small></div>
        <div class="an laya" data-step="1">${icon('box')}<b>Laya</b><small>contenedor propio · datos en casa</small></div>
        <div class="an jev" data-step="2">${icon('cloud')}<b>JEV</b><small>opcional · cambiar la URL</small></div>
        <div class="an db" data-step="3">${icon('db')}<b>Tabla OCR_Decisions</b><small>auditoría + datos para entrenar</small></div>
      </div>`,
    onStep(n, el) {
      el.querySelector('.arch').dataset.n = n
    },
  },
  {
    id: 'roadmap',
    section: 6,
    title: 'Plan por fases',
    notes: `«No es un salto al vacío. Cinco fases, y hasta la última no cambia nada para el usuario.»
[clic] «Cero: datos. Y ya los tenemos: el historial de revisiones es nuestro set de entrenamiento.»
[clic] «Uno: prueba offline con esos datos, medir de verdad, no con los números del autor.»
[clic] «Dos: modo sombra. Corre en producción, guarda lo que habría decidido, pero no toca nada.»
[clic] «Tres: sugerencias en pantalla. Un badge de riesgo, la cola ordenada.»
[clic] «Cuatro: automatizar con umbrales, solo donde los números lo justifiquen. Las reglas duras siempre mandan.»`,
    html: `
      <div class="eyebrow" data-in="fade">Plan</div>
      <h2 class="title md" data-in="words">Paso a paso, <em>sin riesgo.</em></h2>
      <div class="road">
        <div class="road-line"><i></i></div>
        <div class="ph" data-step="1"><span class="ph-n">0</span><h4>Datos</h4><p>Ya los tenemos: el historial de revisiones</p></div>
        <div class="ph" data-step="2"><span class="ph-n">1</span><h4>Prueba offline</h4><p>Medir con nuestras POs, no con benchmarks ajenos</p></div>
        <div class="ph" data-step="3"><span class="ph-n">2</span><h4>Modo sombra</h4><p>Decide en producción, pero no toca nada</p></div>
        <div class="ph" data-step="4"><span class="ph-n">3</span><h4>Sugerencias</h4><p>Badge de riesgo y cola ordenada en pantalla</p></div>
        <div class="ph last" data-step="5"><span class="ph-n">4</span><h4>Umbrales</h4><p>Automatizar solo donde los números lo justifiquen</p></div>
      </div>
      <div class="safe" data-in="fade">${svgIcon('shield', 30)}<span>Hasta la fase 3, <b>nada cambia</b> para el usuario.</span></div>`,
    onStep(n, el) {
      el.querySelector('.road').style.setProperty('--p', `${Math.min(n, 5) * 20}%`)
    },
  },

  // ---------------- 7 · Cierre ----------------
  {
    id: 'takeaways',
    section: 7,
    title: 'Tres ideas para llevarse',
    notes: `«Si se quedan con tres cosas:»
[clic] «JEV y Laya no leen documentos: deciden sobre lo que ya leímos.»
[clic] «Su superpoder es la confianza honesta: saber cuándo dudar.»
[clic] «Y para nosotros: Laya, en casa, empezando por priorizar la revisión de POs.»`,
    html: `
      <div class="eyebrow" data-in="fade">Para llevarse</div>
      <div class="take">
        <p data-step="1"><span>1</span><em>No leen documentos: <b>deciden</b> sobre lo que ya leímos.</em></p>
        <p data-step="2"><span>2</span><em>Su superpoder es la <b>confianza honesta</b>: saber cuándo dudar.</em></p>
        <p data-step="3"><span>3</span><em>Para nosotros: <b>Laya, en casa</b>, empezando por priorizar la revisión de POs.</em></p>
      </div>`,
  },
  {
    id: 'preguntas',
    section: 7,
    layout: 'center qa',
    title: 'Preguntas',
    notes: `«¿Preguntas?»
Respuestas rápidas:
· ¿Laya hace OCR? No: decide sobre texto ya leído.
· ¿Por qué no ChatGPT/Claude? Para elegir entre opciones es 10–50× más rápido, no inventa y su confianza es real. Para extraer o razonar, un LLM sigue siendo mejor.
· ¿Funciona sin entrenar? Para lo genérico sí; para nuestras decisiones hay que ajustarlo con nuestros datos (ya los tenemos).
· ¿Riesgos? Muy nuevo; por eso interfaz desacoplada, modo sombra y reglas duras por encima.`,
    html: `
      <video class="qa-bg" src="media/motion/antesala.mp4" data-autoplay data-loop="0.3,10" data-preview-time="8"></video>
      <div class="qa-veil"></div>
      <div class="qa-in">
        <div data-in="scale">${logoMark(120)}</div>
        <h2 class="title xl" data-in="words">¿<em>Preguntas</em>?</h2>
      </div>`,
  },
]
