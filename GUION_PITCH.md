# Guion — "Modelos que deciden": JEV y Laya en el módulo OCR

**Duración objetivo:** 16 minutos más preguntas · **23 slides** · **64 clics en total**

**Cómo leer este guion**
- **[clic]** = presionar → (o el clicker). Cada clic revela algo nuevo en la misma slide o pasa a la siguiente.
- **En pantalla:** lo que el público está viendo en ese momento.
- **Dices:** el texto sugerido. No hay que memorizarlo palabra por palabra; lo importante son las **ideas en negrita**.
- **Si te preguntan:** datos extra por si alguien profundiza. No hace falta decirlos si nadie pregunta.
- Tecla **V** pausa o reanuda un video. Tecla **P** abre la vista de presentador con estas mismas notas y el cronómetro.

**Tiempos por sección**

| # | Sección | Tope | Acumulado |
|---|---|---|---|
| 00 | Apertura | 0:30 | 0:30 |
| 01 | El problema | 1:30 | 2:00 |
| 02 | La idea: modelos que deciden | 2:50 | 4:50 |
| 03 | JEV y Laya | 2:50 | 7:40 |
| 04 | Nuestro módulo OCR hoy | 2:00 | 9:40 |
| 05 | Dónde encaja | 3:50 | 13:30 |
| 06 | Cómo lo haríamos | 1:50 | 15:20 |
| 07 | Cierre | 1:00 | 16:20 |

**La idea central (si solo recuerdas una frase):**
> *"El OCR lee el documento; Laya ayuda al módulo a decidir qué hacer con lo que se leyó."*

---

## 00 · APERTURA (0:30)

### Slide 1 — Antesala (video en bucle)
**En pantalla:** video de 18 s que se repite. Se ven POs desordenadas con preguntas ("¿nueva?", "¿cancelación?", "¿se leyó bien?", "¿qué formato?") y el texto *"Cada PO trae una decisión."*. Luego todas entran a un hexágono "Laya" y salen ordenadas en tres carriles con su porcentaje (Lista / Revisar primero / Cancelación). Cierra con el logo y *"Modelos que deciden."*

**Dices:** nada. Corre mientras la gente entra y se acomoda.

**Cuando estén listos → [clic]**

### Slide 2 — Portada
**En pantalla:** logo de Apparel Links, *"Investigación · Módulo OCR"*, título **"Modelos que deciden."**, subtítulo y fecha (noviembre 2026).

**Dices:**
> "Buenas. Hoy les traigo una investigación sobre **dos modelos de IA, JEV y Laya**, y sobre **cómo podrían ayudarnos en el módulo OCR**, específicamente en el flujo de POs.
> No hace falta saber nada de machine learning. La idea es que salgan entendiendo **tres cosas: qué son, qué no son y dónde nos pueden servir**."

**[clic]** → cambia de sección (barrido azul).

---

## 01 · EL PROBLEMA (1:30)

### Slide 3 — Cada PO que entra trae preguntas (4 clics)
**En pantalla:** una PO de ejemplo de Urban Outfitters (PO 4501882, ship date 12/02/2027, 1,200 unidades, archivo `F# 9214 / PO_4501882_rev2.pdf`).

**Dices:**
> "Pensemos en una PO que llega a OneDrive, como esta de Urban Outfitters. Antes de guardarla, el sistema tiene que responder varias preguntas."

**[clic 1]** → aparece *"¿Es nueva, una revisión o una cancelación?"*
> "Primero: **¿es una PO nueva, una revisión o una cancelación?** Fíjense que el archivo dice `rev2`."

**[clic 2]** → aparece *"¿De qué buyer y en qué formato viene?"*
> "Segundo: **¿de qué buyer es y en qué formato viene?** Solo A&F maneja seis formatos de PDF distintos."

**[clic 3]** → aparece *"¿La lectura salió bien o hay que revisarla?"*
> "Tercero, y la más importante: **¿la lectura salió bien o alguien tiene que revisarla?**"

**[clic 4]** → aparece *"Hoy: regex. La moda: preguntarle a un LLM."*
> "Hoy esas preguntas las resolvemos con **regex**. Y si siguiéramos la moda, se las preguntaríamos a un **LLM** como ChatGPT o Claude."

**[clic]** → siguiente slide.

### Slide 4 — Ninguna es ideal (2 clics)
**En pantalla:** tarjeta **Reglas · regex**:
- ✓ Rápidas y exactas
- ✕ Se rompen cuando cambia el formato
- ✕ Solo sí o no: nunca "no estoy seguro"

**Dices:**
> "Las reglas, las regex, son **rápidas y exactas**… hasta que el proveedor cambia el formato del PDF; ahí **se rompen**. Y tienen otro problema: solo saben decir sí o no. **Nunca dicen "no estoy seguro"**."

**[clic 1]** → aparece la tarjeta **LLM · ChatGPT, Claude…**:
- ✓ Entiende el texto
- ✕ Lento: escribe palabra por palabra
- ✕ Puede inventar o romper el JSON
- ✕ Su "95% seguro" es solo texto

> "Un LLM sí **entiende el texto**. Pero escribe la respuesta **palabra por palabra**, y eso lo hace lento. Puede **inventar una opción que no existe** o devolver un **JSON roto** que hay que validar. Y si le pides que diga qué tan seguro está, **ese "95%" es solo texto que generó**, no una probabilidad real."

**[clic 2]** → aparece *"¿Y si hubiera algo en medio?"*
> "Entonces: **¿y si hubiera algo en medio?** Algo tan rápido y confiable como una regla, pero que entienda el texto como un modelo."

**[clic]** → siguiente slide.

### Slide 5 — Video: LLM vs modelo de decisión (13 s)
**En pantalla:** arriba, la pregunta *"¿Qué tipo de documento es esta PO?"* con las opciones *nueva · revisión · cancelación*. Dos paneles:
- **Izquierda, "LLM generativo":** va escribiendo `{"tipo": "revisión parcial", "confianza": "95%"}`. El cronómetro llega a **1.84 s** y al final se marca en rojo *"revisión parcial" no es una opción*.
- **Derecha, "Modelo de decisión":** en **0.03 s** aparecen las barras **PO nueva 91% · Revisión 7% · Cancelación 2%** y el mensaje *"Siempre una opción válida, con su %"*.
- Remate: **"Uno escribe. El otro elige."**

**Dices (mientras corre):**
> "Mismo pedido a los dos: ¿qué tipo de documento es esta PO?
> A la izquierda, un LLM. Va escribiendo… tarda casi **dos segundos**… y al final **inventa una categoría que no existe**: "revisión parcial". Además dice "95%", pero eso es texto que inventó.
> A la derecha, un modelo de decisión. Recibe las mismas tres opciones y en **30 milisegundos** devuelve un porcentaje para cada una. **Siempre es una opción válida.**
> **Uno escribe. El otro elige.** De eso trata esta charla."

**[clic]** → cambia de sección.

---

## 02 · LA IDEA: MODELOS QUE DECIDEN (2:50)

### Slide 6 — Pensar rápido, pensar despacio (2 clics)
**En pantalla:** tarjeta **Sistema 1**: *Rápido · automático · intuitivo*. Ejemplo: *Ver un billete y saber que es de Q100*.

**Dices:**
> "La idea viene de un libro de psicología, **"Pensar rápido, pensar despacio", de Daniel Kahneman**. Él dice que pensamos de dos maneras.
> El **Sistema 1** es el rápido y automático. Ven un billete y saben que es de cien quetzales sin pensarlo."

**[clic 1]** → tarjeta **Sistema 2**: *Lento · deliberado · paso a paso*. Ejemplo: *Calcular 17 × 24 de cabeza*.
> "El **Sistema 2** es el lento y deliberado. Si les pido calcular 17 por 24 de cabeza, tienen que ir paso a paso."

**[clic 2]** → *"LLM ≈ Sistema 2 → JEV y Laya = Sistema 1 para software"*
> "Un **LLM se parece al Sistema 2**: razona escribiendo, paso a paso. **JEV y Laya son un Sistema 1 para software**: reconocen y deciden al instante."

**[clic]** → siguiente slide.

### Slide 7 — No escribe. Elige. (4 clics)
**En pantalla:** a la izquierda, el **Estado** (un JSON con `buyer: "UO"`, el texto de la PO, `lineas: 42`, `issues: []`) más *"+ preguntas con opciones"*. En el centro, un hexágono **JEV / Laya · 1 pasada · ~30 ms**.

**Dices:**
> "¿Cómo se usan? Les das **dos cosas**. Primero, un **estado**: el texto de la PO o un JSON con lo que ya sabemos de ella. Segundo, **preguntas, cada una con sus opciones**. Y el modelo responde."

**[clic 1]** → respuesta tipo **choice**, *"¿Qué tipo de documento es?"*: PO nueva **91%**, Revisión 7%, Cancelación 2%.
> "Hay tres tipos de pregunta. El primero se llama **choice**: elige una opción de una lista. Aquí: **PO nueva, con 91%**."

**[clic 2]** → respuesta tipo **score**, *"¿Riesgo de que la lectura esté mal?"*: escala bajo / medio / alto / crítico, marcado **bajo**.
> "El segundo es **score**: ubicar algo en una escala. ¿Qué riesgo hay de que la lectura esté mal? **Bajo.**"

**[clic 3]** → respuesta tipo **sí / no**, *"¿Viene en prepacks?"*: **12% sí**.
> "El tercero es **sí o no**. En la documentación lo llaman "noul". ¿Esta PO viene en prepacks? **12% de que sí.**"

**[clic 4]** → *"Las opciones las das tú → no puede inventar ni romper el JSON."*
> "Y todo eso sale **en una sola pasada, en unos 30 milisegundos**. Lo más importante: **las opciones las das tú en cada pregunta**. Por eso **no puede inventar una respuesta ni romper el JSON**. Y puedes cambiar las opciones cuando quieras, sin reentrenar nada."

**Si te preguntan:**
- *¿Cuántas preguntas por llamada?* JEV permite hasta 8 preguntas y 32 KiB de JSON por request. Laya tiene un límite de contexto de 512 a 8,192 tokens, según el checkpoint.
- *¿Cuántas opciones?* JEV acepta hasta 255 opciones en un choice. El score va de 2 a 10 niveles.
- *¿Qué es la confianza?* Una medida de 0 a 1 que sale de qué tan repartidas están las probabilidades: 0 si duda entre todas, 1 si está segura de una.

**[clic]** → siguiente slide.

### Slide 8 — Cuando dice 90%, acierta 9 de 10 (2 clics)
**En pantalla:** diez documentos en fila.

**Dices:**
> "Ahora, el **superpoder** de estos modelos. Imaginen diez POs, y en todas el modelo dice "estoy 90% seguro"."

**[clic 1]** → nueve documentos se ponen en verde y uno en rojo. Texto: *"Eso es estar calibrado: su confianza es honesta."*
> "Si el modelo es bueno, **acierta más o menos en 9 y falla en 1**. Y está bien, porque eso fue lo que dijo. A esto le llaman **estar calibrado**: **su confianza es honesta**."

**[clic 2]** → barra de 0 a 100% con una línea en **95%**. *"Menos de 95% → lo revisa una persona"* y *"95% o más → sigue solo"*.
> "¿Por qué importa? Porque nos deja poner **reglas de negocio**: si está 95% seguro o más, sigue solo; si no, **lo revisa una persona**.
> **Con un LLM esto no se puede**, porque su "95%" no significa nada. Este es el punto clave de toda la presentación."

**[clic]** → cambia de sección.

---

## 03 · JEV Y LAYA (2:50)

### Slide 9 — Mismo concepto, dos caminos (1 clic)
**En pantalla:** tarjeta **JEV**, *TypeSafe · sept 2026*, etiqueta **API cerrada**:
- Servicio en la nube
- Pagas por uso
- No se sabe cómo está hecho
- Tus datos viajan a un tercero

**Dices:**
> "Ahora sí, los dos protagonistas. Son **el mismo concepto por dos caminos distintos**.
> **JEV** es de una empresa llamada **TypeSafe** y salió en **septiembre de 2026**. Es un **servicio en la nube**: le mandas tu texto por una API y **pagas por uso**. **No sabemos cómo está hecho por dentro**: no publicaron el modelo ni un paper. Y **nuestros datos viajan a un tercero**."

**[clic 1]** → tarjeta **Laya**, *ConvAI Innovations*, etiqueta **Apache 2.0**:
- Se descarga y se instala en casa
- Corre en nuestro servidor (CPU basta)
- Se entrena con nuestros datos
- Habla la **misma API** que JEV

> "**Laya** es de **ConvAI Innovations**. Es un **modelo abierto** con licencia **Apache 2.0**, o sea que se puede usar comercialmente. Lo **descargamos y lo instalamos en nuestro servidor**, y **con CPU basta**. Lo podemos **entrenar con nuestros propios datos**. Y algo clave: **habla exactamente la misma API que JEV**."

**Si te preguntan:**
- *¿JEV cuánto cuesta?* Funciona por créditos: Starter $10 (100k créditos), Pro $100 (1M) y Enterprise $1,000 (11M). Se reporta alrededor de $0.042 por millón de tokens de entrada.
- *¿Quién está detrás de JEV?* Se atribuye a TypeSafe. El sitio que lo vende (thejevai.com) dice no estar afiliado a TypeSafe, así que la procedencia es confusa.
- *¿El artículo de Hugging Face sobre JEV es oficial?* No. Es un artículo de la comunidad, promocional y ya desactualizado.

**[clic]** → siguiente slide.

### Slide 10 — Laya por dentro: tres ideas, cero matemáticas (1 clic)
**En pantalla:** tres pasos con flechas:
1. **Lee todo de una vez**: un lector tipo BERT, no escribe palabra por palabra.
2. **Puntúa cada opción**: cada opción tiene su "casilla" y los puntajes se vuelven %.
3. **Entrenado para ser honesto**: se le premia decir la probabilidad correcta, no solo acertar.

**Dices:**
> "¿Cómo es Laya por dentro? Sin matemáticas, son tres ideas.
> **Uno:** usa un lector tipo **BERT**, la misma familia de modelos que usan los buscadores. **Lee todo el texto de una vez**, no palabra por palabra.
> **Dos:** cada opción tiene **su propia casilla** dentro del texto que lee. El modelo le da un **puntaje a cada una** y esos puntajes se convierten en **porcentajes**. Por eso las opciones se pueden cambiar en cada pregunta.
> **Tres:** lo **entrenaron premiando que diga la probabilidad correcta**, no solo que acierte. Si exagera su confianza, pierde puntos. **Por eso su confianza es honesta.**"

**[clic 1]** → barras de tamaño: **Laya 0.4 mil millones · ~800 MB** vs **LLM típico 70+ mil millones**.
> "Y es **chico**: unos **400 millones de parámetros**, alrededor de **800 megas**. Un LLM típico tiene **decenas o cientos de miles de millones**. Por eso puede correr en un servidor normal."

**Si te preguntan:**
- *Detalle técnico:* el lector es ModernBERT-large (395M) más una "cabeza de decisión" de 2 capas, 421M en total. Cada opción va marcada con un token `[MASK]`. El entrenamiento se llama RLCD (Reinforcement Learning for Calibrated Decisions), con reglas de puntuación "propias" (log, esférica y RPS).
- *Versiones:* inglés (`laya`), multilingüe (`laya-multilingual`, más de 100 idiomas) y una afinada en decisiones de negocio (`laya-typed-decisions`). Hay una versión más nueva de 0.8B, "vegaml", que acepta imagen, audio y video.
- *Paper:* "From Laya to Vega", preprint de noviembre de 2026.

**[clic]** → siguiente slide.

### Slide 11 — JEV vs Laya (1 clic)
**En pantalla:** tabla comparativa.

| | JEV | Laya |
|---|---|---|
| Dónde corre | Su nube | Donde queramos |
| Costo | Por uso | Solo infraestructura |
| Nuestros datos | ✕ Salen | ✓ Se quedan |
| Entrenar con lo nuestro | ✕ No | ✓ Sí |
| Velocidad | ~150–500 ms | ~30 ms GPU · ~300 ms CPU |
| Más de 20 opciones | ✓ Mejor | ✕ Se le complica |

**Dices (fila por fila, sin detenerte mucho):**
> "Cara a cara.
> **Dónde corre:** JEV en su nube; Laya donde queramos.
> **Costo:** JEV cobra por uso; con Laya solo pagamos la infraestructura.
> **Datos:** con JEV salen de la empresa; **con Laya se quedan en casa**. Para POs con precios, fábricas y clientes, esto pesa mucho.
> **Entrenar con lo nuestro:** solo Laya.
> **Velocidad:** Laya es más rápido, unos 30 milisegundos en GPU y unos 300 en CPU.
> Y para ser justos: cuando una pregunta tiene **más de 20 opciones, JEV gana**. A Laya se le complica."

**[clic 1]** → *"Misma API `/v1/systemone` → cambiar de uno a otro es cambiar una URL."*
> "Lo mejor: como **hablan la misma API**, el endpoint `/v1/systemone`, **cambiar de uno a otro es cambiar una URL**. No nos casamos con ninguno."

**Si te preguntan:**
- *Benchmarks publicados (los publica el autor de Laya, no son independientes):* decisiones de negocio 0.766 vs 0.727; noticias (4 clases) 0.950 vs 0.910; 77 clases bancarias 0.425 vs 0.870 (ahí gana JEV). Error de calibración: 0.081 vs 0.246.

**[clic]** → siguiente slide.

### Slide 12 — Lo que no son (1 clic)
**En pantalla:** tres tarjetas en rojo:
- **No son OCR**: no leen el PDF ni la imagen.
- **No sacan datos**: no devuelven "PO 4501234" ni cantidades.
- **No conversan**: no razonan ni escriben texto.

**Dices:**
> "Esto es importante para no confundirnos.
> **No son OCR**: no leen el PDF ni la imagen. Eso lo sigue haciendo Azure Document Intelligence.
> **No sacan datos**: si les pides el número de PO, no te devuelven "4501234". Tampoco cantidades ni precios.
> Y **no conversan**: no razonan ni escriben texto. **Solo eligen.**"

**[clic 1]** → *"Y con cuidado:"* Muy nuevos (sept–nov 2026) · Benchmarks del propio autor · Sin entrenar con lo nuestro, Laya **casi adivina**.
> "Y hay que tomarlos **con cuidado**. Son **muy nuevos**: salieron entre septiembre y noviembre de este año. Los **benchmarks los publicó el propio autor**. Y el mismo autor reconoce que, **sin entrenarlo con datos propios, Laya en decisiones de negocio casi adivina**: acierta alrededor de 36%, contra 77% ya ajustado. **Hay que entrenarlo con lo nuestro.**"

**[clic]** → cambia de sección.

---

## 04 · NUESTRO MÓDULO OCR HOY (2:00)

### Slide 13 — Video: así viaja una PO (22 s)
**En pantalla:** *"Así viaja una PO."* Se arman seis pasos: **OneDrive** (carpeta por buyer) → **Azure Document Intelligence** (lee el PDF) → **Parser por buyer** (regex + geometría) → **Validación** (completa: solo UO) → **Revisión humana** (edita y confirma) → **ERP · Orders** (MergeFromOcr). Caen los buyers: Urban Outfitters, A&F, Kontoor, J.Crew, LIG, Lucky Brand. Un documento recorre el flujo con etiquetas: *PDF · Excel → texto + tablas → PO# · tallas · qty → OK / Alerta → una por una → ✓ enviada*. Al final aparecen en rojo los cuatro dolores y *"Funciona… pero tiene cuatro puntos de dolor."*

**Dices (mientras corre):**
> "Así funciona hoy nuestro módulo.
> Los PDF y Excel llegan a **OneDrive**, a la carpeta de cada buyer: Urban, A&F, Kontoor, J.Crew, LIG, Lucky Brand.
> **Azure Document Intelligence lee el documento** y saca texto y tablas.
> Después, un **parser con regex, uno por buyer**, saca los campos: número de PO, estilos, tallas, cantidades.
> Se **valida**; ojo, la validación completa solo existe para Urban. Una **persona revisa una por una** y se manda a **Orders**.
> **Funciona**… pero en rojo están **los cuatro lugares donde nos duele**."

**[clic]** → siguiente slide.

### Slide 14 — Dónde nos duele (4 clics)
**En pantalla:** cuatro tarjetas que aparecen una por clic.

**[clic 1]** → **01 · Nadie mide la confianza**: no sabemos qué tan segura estuvo la lectura; validador completo, solo Urban.
> "**Uno: nadie mide la confianza.** Ningún código revisa qué tan segura estuvo la lectura. Y **solo Urban tiene un validador completo**: totales, matemática de líneas, tallas, páginas. Los demás buyers casi no tienen."

**[clic 2]** → **02 · Regex frágiles**: A&F tiene 6 formatos de PDF; si no halla el PO#, el archivo falla.
> "**Dos: regex frágiles.** A&F tiene **seis formatos de PDF distintos**: Ripple, Philcos, Bravado, Outerstuff, SME y el genérico. Si la regex **no encuentra el número de PO, el archivo falla**. Y cada formato nuevo es más código a mano."

**[clic 3]** → **03 · Pérdidas silenciosas**: archivos que fallan 3 veces o carpetas que no coinciden quedan solo en el log.
> "**Tres: pérdidas silenciosas.** Si un archivo **falla tres veces**, o si está en una **carpeta que no coincide con el patrón**, se descarta y **solo queda en el log**. Nadie se entera."

**[clic 4]** → **04 · Todo se revisa igual**: una PO perfecta y una rota reciben la misma revisión completa.
> "**Cuatro: todo se revisa igual.** Una PO perfecta y una rota pasan por **la misma revisión completa**. No hay forma de saber por cuál empezar."

**[clic]** → cambia de sección.

---

## 05 · DÓNDE ENCAJA (3:50)

### Slide 15 — En el módulo, no en la extracción (4 clics)
**En pantalla:** título *"En el módulo, no en la extracción."*

**Dices:**
> "Primero, que quede claro **dónde NO va**: **no reemplaza al OCR**. Va **en el módulo, después de leer**."

**[clic 1]** → **El OCR lee** (Azure Document Intelligence).
> "**El OCR lee.** Azure Document Intelligence sigue haciendo su trabajo."

**[clic 2]** → **Las reglas validan** (totales · tallas · precios).
> "**Las reglas validan**: totales, tallas, precios. **Eso no se toca.** Donde hay un número, mandan las reglas."

**[clic 3]** → **NUEVO · Laya decide y prioriza** (tipo · riesgo · candidatos).
> "**Laya decide y prioriza.** Esto es lo nuevo: qué tipo de documento es, qué tan riesgoso es y cuál candidato es el correcto."

**[clic 4]** → **La persona confirma** (siempre).
> "Y **la persona confirma. Siempre.**"

**[clic]** → siguiente slide.

### Slide 16 — Video: una capa nueva que decide (22 s)
**En pantalla:** primero tres pasos: **El OCR lee → Las reglas validan → La persona confirma**. Entra **Laya · decide** con la etiqueta **NUEVO**. Pasan tres POs:
1. **Urban Outfitters PO 4501882**: Tipo *PO nueva 96%* · Riesgo **bajo** (0.94) · Revisar *nada en especial* → cola: **Riesgo bajo · rápida**.
2. **A&F · Ripple PO 7731204**: Tipo *PO nueva 88%* · Riesgo **alto** (0.83) · Revisar *tallas 81%* → **sube al primer lugar** de la cola: **Riesgo alto · tallas**.
3. **Kontoor PO 88213-CXL**: Tipo *Cancelación 99%* · Riesgo **bajo** · Revisar *confirmar cancelación* → cola: **Cancelación · marcar**.

Cierra con: *"La persona sigue confirmando — pero empieza por lo importante."*

**Dices (mientras corre):**
> "Imaginemos el flujo con Laya.
> Entra **una capa nueva entre la validación y la revisión**. Cada PO pasa por **tres preguntas**: qué tipo es, qué riesgo tiene y qué hay que revisar.
> La primera, de Urban, sale con **riesgo bajo**: va a la cola como **revisión rápida**.
> La segunda, de A&F, tiene **riesgo alto en tallas**: **se va al primer lugar** de la cola y además nos dice **qué revisar**.
> La tercera, de Kontoor, es **una cancelación con 99%**: se marca sola.
> **La persona sigue confirmando todo. Solo que ahora empieza por lo importante.**"

**[clic]** → siguiente slide.

### Slide 17 — Seis lugares donde ayuda (3 clics)
**En pantalla:** título *"Seis lugares donde ayuda."*

**Dices:**
> "Hice una lluvia de ideas. Son seis lugares concretos, ordenados de **mayor a menor valor**; las estrellas marcan la prioridad."

**[clic 1]** → **★★ Prioridad de revisión** (riesgo por PO; la cola empieza por lo riesgoso) y **★ Tipo y formato** (nueva, revisión o cancelación · formato de A&F).
> "**La estrella: prioridad de revisión.** Laya le da un **nivel de riesgo a cada PO** y la cola empieza por lo riesgoso. Y lo mejor: **ya tenemos con qué entrenarlo**. El historial de la base de datos nos dice qué POs se corrigieron, cuáles tuvieron override de totales y cuáles pasaron directo. **Esas son etiquetas gratis.**
> Segunda: **tipo y formato del documento**. Nueva, revisión o cancelación, y cuál de los seis formatos de A&F es. Al principio funcionaría **como segunda opinión de la regex**: si no coinciden, se marca para revisión en vez de fallar."

**[clic 2]** → **★ Elegir entre candidatos** (PO#, grupo de tallas, destino, marca, FileNo) y **Clasificar correos** (¿este correo trae una PO? ¿de qué buyer?).
> "Tercera: **elegir entre candidatos**. La vemos en la siguiente slide.
> Cuarta: **clasificar correos** del canal Outlook: ¿este correo trae una PO? ¿De qué buyer? Hoy eso se hace con palabras clave."

**[clic 3]** → **Rescatar perdidos** (aviso cuando un archivo descartado parece una PO real) y **Priorizar alertas** (urgencia y responsable correcto para cada alerta).
> "Quinta: **rescatar archivos perdidos**. Cuando un archivo se descarta, Laya pregunta "¿esto parece una PO real?" y, si sí, **avisa** en lugar de solo dejarlo en el log.
> Sexta: **priorizar las alertas** de Discord por urgencia y mandarlas al **responsable correcto**."

**[clic]** → siguiente slide.

### Slide 18 — De extraer a elegir (2 clics)
**En pantalla:** un PDF de **A&F · Ripple** con tres números resaltados: *Purchase Order **PO 4501882***, *Ref. **4501880** · Season FA27*, *Original PO: **4499120***. Abajo, en rojo: *"Hoy: la regex falla o adivina."*

**Dices:**
> "Dijimos que Laya **no saca datos**. Pero hay un **truco**.
> En este PDF de A&F aparecen **tres números parecidos**: el número de PO, una referencia y la PO original. Hoy **la regex falla o adivina**."

**[clic 1]** → pregunta **choice** *"¿Cuál es el número de esta PO?"*: **4501882 · 94%**, 4501880 · 4%, 4499120 · 2%.
> "Pero la regex **ya encuentra los candidatos**. Solo le pedimos a Laya que **elija cuál es el PO**: **94% el primero**."

**[clic 2]** → *"También sirve para: Grupo de tallas · Destino · Marca · FileNo"* y *"✓ Siempre un valor válido del ERP"*.
> "Convertimos un problema de **extraer**, que Laya no sabe hacer, en uno de **elegir**, que es su fuerte. Lo mismo sirve para el **grupo de tallas**, el **destino**, la **marca** o el **FileNo**. Y como las opciones salen del ERP, **la respuesta siempre es un valor válido del ERP**."

**[clic]** → siguiente slide.

### Slide 19 — Lo que no haríamos
**En pantalla:** cuatro tarjetas con ✕:
- **Reemplazar a Azure Document Intelligence**: no lee documentos.
- **Sacar cantidades, precios o fechas**: ahí un error cuesta dinero.
- **Mandar POs al ERP sin que nadie las vea**: la persona confirma, siempre.
- **Preguntas con cientos de opciones**: pierde precisión arriba de ~20.

**Dices:**
> "Y para ser claros, **lo que NO haríamos**:
> **No reemplazar a Azure Document Intelligence**, porque Laya no lee documentos.
> **No usarlo para sacar cantidades, precios o fechas.** Ahí un error cuesta dinero, y **las reglas con validación de totales son mejores**.
> **No mandar POs al ERP sin que nadie las vea.** La persona confirma, siempre.
> Y **no hacerle preguntas con cientos de opciones**, como elegir entre todos los estilos: arriba de unas 20 opciones pierde precisión."

**[clic]** → cambia de sección.

---

## 06 · CÓMO LO HARÍAMOS (1:50)

### Slide 20 — Una interfaz, dos motores (3 clics)
**En pantalla:** **ERP · Blazor .NET** (módulo OCR) conectado a **IDecisionEngine** (`POST /v1/systemone`).

**Dices:**
> "¿Cómo se conectaría? Muy simple. El **ERP en .NET** llama a una **interfaz** que llamaríamos `IDecisionEngine`. El módulo OCR no sabe qué modelo hay detrás."

**[clic 1]** → **Laya** (contenedor propio · datos en casa).
> "Esa interfaz manda una **llamada HTTP a Laya**, que corre en un **contenedor nuestro**. Como la ingesta es en segundo plano, **con CPU basta**. **Los datos no salen.**"

**[clic 2]** → **JEV** (opcional · cambiar la URL), con línea punteada.
> "Como **JEV habla la misma API**, queda como **opción con solo cambiar la URL** en la configuración. Sirve, por ejemplo, para comparar los dos."

**[clic 3]** → **Tabla OCR_Decisions** (auditoría + datos para entrenar).
> "Y **cada decisión se guarda en una tabla**, `OCR_Decisions`: qué preguntó, qué respondió, con qué confianza y qué decidió al final la persona. Sirve para **auditar** y como **datos para volver a entrenar**."

**Si te preguntan:**
- *¿Y por qué no correrlo dentro de .NET?* Se podría exportar a ONNX, pero habría que reimplementar el tokenizer y la lógica de opciones. Un contenedor aparte es más simple y más seguro para empezar.
- *¿Se puede apagar?* Sí: con un feature flag por buyer y por pregunta en `appsettings`.

**[clic]** → siguiente slide.

### Slide 21 — Paso a paso, sin riesgo (5 clics)
**En pantalla:** una línea de tiempo que se llena con cada clic. Abajo: *"Hasta la fase 3, nada cambia para el usuario."*

**Dices:**
> "No es un salto al vacío. Son **cinco fases**, y hasta la última **no cambia nada para el usuario**."

**[clic 1]** → **0 · Datos**: ya los tenemos, el historial de revisiones.
> "**Fase cero: datos.** Y **ya los tenemos**: el historial de revisiones es nuestro set de entrenamiento."

**[clic 2]** → **1 · Prueba offline**: medir con nuestras POs, no con benchmarks ajenos.
> "**Fase uno: prueba offline.** Corremos Laya sobre esos datos y **medimos de verdad, con nuestras POs**, no con los números del autor."

**[clic 3]** → **2 · Modo sombra**: decide en producción, pero no toca nada.
> "**Fase dos: modo sombra.** Corre en producción y guarda lo que habría decidido, **pero no toca nada**. Comparamos contra lo que hizo la persona."

**[clic 4]** → **3 · Sugerencias**: badge de riesgo y cola ordenada en pantalla.
> "**Fase tres: sugerencias.** Un **badge de riesgo** en la pantalla y la **cola ordenada**. La persona sigue decidiendo todo."

**[clic 5]** → **4 · Umbrales**: automatizar solo donde los números lo justifiquen.
> "**Fase cuatro: umbrales.** Automatizar **solo donde los números lo justifiquen**, por ejemplo clasificar el tipo de documento cuando está 95% seguro. Y **las reglas duras siempre mandan**: si los totales no cuadran, es alerta, diga lo que diga el modelo."

**Si te preguntan:**
- *¿Qué mediríamos?* Precisión por pregunta, calibración, porcentaje de POs que se habrían podido pre-aprobar, **tasa de falsos "OK"** (la más importante), tiempo de revisión antes y después, y latencia.
- *¿Cuántos datos hacen falta?* El ajuste rápido de Laya (`fit`) funciona desde unas decenas de ejemplos etiquetados; en su ejemplo bastaron 35 filas. El ajuste completo usa más datos y una GPU (por ejemplo, Kaggle con 2× T4).

**[clic]** → cambia de sección.

---

## 07 · CIERRE (1:00)

### Slide 22 — Para llevarse (3 clics)
**Dices:**
> "Si se quedan con tres cosas…"

**[clic 1]** → **1** · No leen documentos: **deciden** sobre lo que ya leímos.
> "**Uno:** JEV y Laya **no leen documentos: deciden** sobre lo que ya leímos."

**[clic 2]** → **2** · Su superpoder es la **confianza honesta**: saber cuándo dudar.
> "**Dos:** su superpoder es la **confianza honesta**: **saber cuándo dudar**. Eso es lo que nos deja automatizar con seguridad."

**[clic 3]** → **3** · Para nosotros: **Laya, en casa**, empezando por priorizar la revisión de POs.
> "**Tres:** para nosotros, la propuesta es **Laya, en casa**, empezando por **priorizar la revisión de POs**."

**[clic]** → siguiente slide.

### Slide 23 — ¿Preguntas?
**En pantalla:** logo y **"¿Preguntas?"**, con el video de antesala de fondo (la parte de las POs ordenándose, en bucle).

**Dices:**
> "Muchas gracias. **¿Preguntas?**"

---

## ANEXO · Respuestas rápidas para preguntas

**¿Laya hace OCR?**
No. Decide sobre texto que ya fue leído. El OCR sigue siendo Azure Document Intelligence.

**¿Por qué no usar ChatGPT o Claude directamente?**
Para elegir entre opciones, un modelo de decisión es entre 10 y 50 veces más rápido, no inventa opciones, no rompe el JSON y su confianza es real. Para extraer datos libres o razonar cosas complejas, un LLM sigue siendo mejor. Son herramientas distintas.

**¿Qué significa "calibrado"?**
Que cuando dice 90%, acierta más o menos 9 de cada 10 veces. Eso permite reglas del tipo "si la probabilidad pasa de 95%, no requiere revisión".

**¿Qué significa "non-autoregressive"?**
Que no genera la respuesta token por token. Calcula todas las respuestas de una sola vez.

**¿Por qué Laya y no JEV?**
Porque es abierto, se queda en nuestra infraestructura (los datos de clientes, precios y fábricas no salen) y se puede entrenar con nuestro historial. JEV queda como referencia o para un prototipo rápido con datos no sensibles.

**¿Funciona sin entrenar?**
Para cosas genéricas, sí. Para nuestras decisiones de negocio, el propio autor reconoce que el modelo base está cerca del azar (36% contra 77% ya ajustado). Hay que ajustarlo con nuestros datos, y ya los tenemos en la base de datos.

**¿Qué tan confiables son los benchmarks?**
Los publica el autor de Laya, y las cifras de JEV son de terceros. Por eso la fase 1 mide con nuestras propias POs.

**¿Cuánto cuesta correr Laya?**
Solo la infraestructura. Pesa unos 800 MB y en CPU tarda entre 200 y 460 ms por request, lo cual alcanza porque la ingesta de POs corre en segundo plano.

**¿Qué riesgos tiene?**
Es tecnología muy nueva (septiembre a noviembre de 2026), de un equipo pequeño, y JEV tiene una procedencia confusa. Mitigación: interfaz desacoplada (podemos cambiar de motor), modo sombra antes de tocar nada, y las reglas duras siempre por encima del modelo.

**¿Qué limitaciones conocidas tiene Laya?**
- Con más de 20 opciones pierde precisión.
- Las preguntas de escala (score) son las más débiles.
- En sí/no a veces se deja llevar por la etiqueta y no por el contenido.
- Viene sobreconfiado de fábrica: hay que recalibrarlo con nuestros datos.

**¿Cuánto tardaría implementarlo?**
No se estimó en esta investigación. La fase 0 (preparar los datos) es lo primero, y de ella depende el resto.
