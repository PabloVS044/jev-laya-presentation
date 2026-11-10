import { icon, svgIcon } from '../fx.js'

// 4 · Nuestro módulo OCR hoy · 5 · Dónde encaja

export default [
  // ---------------- 4 · Nuestro módulo OCR hoy ----------------
  {
    id: 'video-flujo-ocr',
    section: 4,
    title: 'Video: el flujo de una PO hoy',
    notes: `«Así funciona hoy nuestro módulo.» Narra mientras se arma (~22 s):
«Los PDF y Excel llegan a OneDrive, a la carpeta de cada buyer: Urban, A&F, Kontoor, J.Crew, LIG, Lucky Brand.»
«Azure Document Intelligence lee el documento. Después, un parser con regex por buyer saca los campos. Se valida —completo solo en Urban—, una persona revisa y se manda a Orders.»
«Y en rojo, los cuatro lugares donde nos duele.» Tecla V para pausar.`,
    html: `<video class="full-bleed" src="media/motion/flujo-ocr.mp4" data-autoplay data-preview-time="21"></video>`,
  },
  {
    id: 'dolores',
    section: 4,
    title: 'Dónde nos duele',
    notes: `[clic] «Uno: nadie mide la confianza. Ningún código revisa qué tan segura estuvo la lectura; y solo Urban tiene un validador completo.»
[clic] «Dos: regex frágiles. A&F tiene seis formatos de PDF distintos; si no encuentra el número de PO, el archivo falla.»
[clic] «Tres: pérdidas silenciosas. Archivos que fallan tres veces o carpetas que no coinciden con el patrón solo quedan en el log.»
[clic] «Cuatro: todo se revisa igual. Una PO perfecta y una rota pasan por la misma revisión completa.»`,
    html: `
      <div class="eyebrow" data-in="fade">Nuestro módulo hoy</div>
      <h2 class="title md" data-in="words">Dónde nos <em>duele.</em></h2>
      <div class="pains">
        <div class="card pain" data-step="1"><span class="pn">01</span>${icon('gauge')}<h4>Nadie mide la confianza</h4><p>No sabemos qué tan segura estuvo la lectura. Validador completo: solo Urban.</p></div>
        <div class="card pain" data-step="2"><span class="pn">02</span>${icon('code')}<h4>Regex frágiles</h4><p>A&F: 6 formatos de PDF. Si no halla el PO#, el archivo falla.</p></div>
        <div class="card pain" data-step="3"><span class="pn">03</span>${icon('ghost')}<h4>Pérdidas silenciosas</h4><p>Archivos que fallan 3 veces o carpetas que no coinciden: solo log.</p></div>
        <div class="card pain" data-step="4"><span class="pn">04</span>${icon('repeat')}<h4>Todo se revisa igual</h4><p>Una PO perfecta y una rota reciben la misma revisión completa.</p></div>
      </div>`,
  },

  // ---------------- 5 · Dónde encaja ----------------
  {
    id: 'principio',
    section: 5,
    title: 'El principio',
    notes: `«Primero, que quede claro dónde NO va: no reemplaza al OCR. Va en el módulo, después de leer.»
[clic] «El OCR lee.»
[clic] «Las reglas validan: totales, tallas, precios. Eso no se toca.»
[clic] «Laya decide y prioriza: lo nuevo.»
[clic] «Y la persona confirma. Siempre.»`,
    html: `
      <div class="eyebrow" data-in="fade">Dónde encaja</div>
      <h2 class="title md" data-in="words">En el <em>módulo,</em> no en la extracción.</h2>
      <div class="chain">
        <div class="link" data-step="1">${icon('scan')}<span>El OCR</span><b>lee</b><small>Azure Document Intelligence</small></div>
        <div class="chev" data-step="2">›</div>
        <div class="link" data-step="2">${icon('ruler')}<span>Las reglas</span><b>validan</b><small>totales · tallas · precios</small></div>
        <div class="chev" data-step="3">›</div>
        <div class="link new" data-step="3"><em class="badge">NUEVO</em>${icon('hex')}<span>Laya</span><b>decide y prioriza</b><small>tipo · riesgo · candidatos</small></div>
        <div class="chev" data-step="4">›</div>
        <div class="link" data-step="4">${icon('user')}<span>La persona</span><b>confirma</b><small>siempre</small></div>
      </div>`,
  },
  {
    id: 'video-capa',
    section: 5,
    title: 'Video: la capa de decisión',
    notes: `«Imaginemos el flujo con Laya.» Narra (~22 s):
«Entra una capa nueva entre la validación y la revisión. Cada PO pasa por tres preguntas.»
«La primera sale con riesgo bajo: va a revisión rápida. La segunda tiene riesgo alto en tallas: se va arriba de la cola, marcando qué revisar. La tercera es una cancelación: se marca sola.»
«La persona sigue confirmando, solo que ahora empieza por lo importante.»`,
    html: `<video class="full-bleed" src="media/motion/capa-decision.mp4" data-autoplay data-preview-time="21"></video>`,
  },
  {
    id: 'ideas',
    section: 5,
    title: 'Seis ideas',
    notes: `«Seis ideas concretas, de mayor a menor valor.»
[clic] «La estrella: prioridad de revisión. Laya da un nivel de riesgo a cada PO. Lo mejor: ya tenemos con qué entrenarlo, el historial de qué POs se corrigieron y cuáles pasaron directo. Y tipo y formato del documento: nueva, revisión, cancelación, y cuál de los formatos de A&F.»
[clic] «Elegir entre candidatos —lo vemos en la siguiente— y clasificar correos del canal Outlook.»
[clic] «Rescatar archivos que hoy se pierden sin aviso, y priorizar las alertas de Discord hacia el responsable correcto.»`,
    html: `
      <div class="eyebrow" data-in="fade">Lluvia de ideas</div>
      <h2 class="title md" data-in="words">Seis lugares <em>donde ayuda.</em></h2>
      <div class="ideas">
        <div class="card idea top" data-step="1"><div class="stars">${svgIcon('star', 26)}${svgIcon('star', 26)}</div>${icon('sort')}<h4>Prioridad de revisión</h4><p>Riesgo por PO; la cola empieza por lo riesgoso</p></div>
        <div class="card idea" data-step="1"><div class="stars">${svgIcon('star', 26)}</div>${icon('doc')}<h4>Tipo y formato</h4><p>Nueva, revisión o cancelación · formato de A&F</p></div>
        <div class="card idea" data-step="2"><div class="stars">${svgIcon('star', 26)}</div>${icon('target')}<h4>Elegir entre candidatos</h4><p>PO#, grupo de tallas, destino, marca, FileNo</p></div>
        <div class="card idea" data-step="2">${icon('mail')}<h4>Clasificar correos</h4><p>¿Este correo trae una PO? ¿De qué buyer?</p></div>
        <div class="card idea" data-step="3">${icon('ghost')}<h4>Rescatar perdidos</h4><p>Aviso cuando un archivo descartado parece una PO real</p></div>
        <div class="card idea" data-step="3">${icon('bell')}<h4>Priorizar alertas</h4><p>Urgencia y responsable correcto para cada alerta</p></div>
      </div>`,
  },
  {
    id: 'truco',
    section: 5,
    title: 'El truco: de extraer a elegir',
    notes: `«Dijimos que Laya no saca datos. Pero hay un truco.»
«En un PDF de A&F aparecen varios números parecidos: el PO, una referencia y la PO original. Hoy la regex falla o adivina.»
[clic] «La regex ya encuentra los candidatos. Laya solo tiene que elegir cuál es el PO: 94% el primero.»
[clic] «Convertimos un problema de extraer —que no sabe hacer— en uno de elegir —que es su fuerte—. Lo mismo sirve para grupo de tallas, destino, marca o FileNo. Y la respuesta siempre es un valor válido del ERP.»`,
    html: `
      <div class="eyebrow" data-in="fade">El truco</div>
      <h2 class="title md" data-in="words">De <em>extraer</em> a <em>elegir.</em></h2>
      <div class="trick">
        <div class="tr-pdf card" data-in="left">
          <span class="k">PDF A&F · Ripple</span>
          <p>Purchase Order <mark>PO 4501882</mark></p>
          <p>Ref. <mark>4501880</mark> · Season FA27</p>
          <p>Original PO: <mark>4499120</mark></p>
          <p class="dim">Hoy: la regex falla o adivina</p>
        </div>
        <div class="tr-arrow" data-step="1">→</div>
        <div class="tr-choice card" data-step="1">
          <div class="ans-h"><span class="type">choice</span>¿Cuál es el número de esta PO?</div>
          <div class="bars">
            <div class="bar"><span>4501882</span><i style="--w:94%"></i><b>94%</b></div>
            <div class="bar"><span>4501880</span><i style="--w:4%"></i><b>4%</b></div>
            <div class="bar"><span>4499120</span><i style="--w:2%"></i><b>2%</b></div>
          </div>
        </div>
      </div>
      <div class="also" data-step="2">
        <span>También sirve para:</span>
        <i>Grupo de tallas</i><i>Destino</i><i>Marca</i><i>FileNo</i>
        <b>${svgIcon('check', 28)} Siempre un valor válido del ERP</b>
      </div>`,
  },
  {
    id: 'no-haremos',
    section: 5,
    title: 'Lo que no haríamos',
    notes: `«Y para ser claros, lo que NO haríamos:»
«No reemplazar Azure Document Intelligence. No usarlo para sacar cantidades, precios o fechas: ahí un error cuesta dinero, y las reglas con validación de totales son mejores. No mandar POs al ERP sin que nadie las vea. Y no hacerle preguntas con cientos de opciones, como todos los estilos.»`,
    html: `
      <div class="eyebrow" data-in="fade">Límites</div>
      <h2 class="title md" data-in="words">Lo que <em>no</em> haríamos.</h2>
      <div class="donts">
        <div class="dont" data-in="left">${svgIcon('x', 40)}<b>Reemplazar a Azure Document Intelligence</b><span>No lee documentos</span></div>
        <div class="dont" data-in="left">${svgIcon('x', 40)}<b>Sacar cantidades, precios o fechas</b><span>Ahí un error cuesta dinero</span></div>
        <div class="dont" data-in="left">${svgIcon('x', 40)}<b>Mandar POs al ERP sin que nadie las vea</b><span>La persona confirma, siempre</span></div>
        <div class="dont" data-in="left">${svgIcon('x', 40)}<b>Preguntas con cientos de opciones</b><span>Pierde precisión arriba de ~20</span></div>
      </div>`,
  },
]
