# Modelos que deciden — JEV y Laya en el módulo OCR

Deck animado para presentar la investigación sobre JEV y Laya y su posible aplicación al módulo OCR del ERP. Funciona sin internet: fuentes, GSAP y videos van dentro del proyecto.

Detalle técnico completo: `ApparellinksERP/docs/research/JEV_Laya_OCR.md`.

Guion completo, slide por slide y clic por clic, con respuestas para preguntas: [GUION_PITCH.md](GUION_PITCH.md).

## Correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5190`, pulsa **F** para pantalla completa y **P** para abrir la vista de presentador en otra ventana (arrástrala a la laptop; el deck va al proyector). Para el día de la presentación conviene la versión compilada:

```bash
npm run build
npm run preview
```

(`http://localhost:4190`).

## Controles

| Tecla | Acción |
|---|---|
| → · Espacio · PageDown · Enter | Siguiente paso o slide (los clickers funcionan) |
| ← · PageUp · Backspace | Paso o slide anterior |
| número + Enter | Saltar a esa slide |
| F | Pantalla completa |
| P | Vista de presentador: guion, cronómetro por sección y total (16 min), siguiente slide |
| B o . | Pantalla negra |
| V o K | Pausar / reanudar el video de la slide |
| R | Repetir la animación de entrada |
| Home / End | Primera / última slide |

La URL guarda la posición (`#12.2` = slide 12, paso 2).

## Estructura (23 slides, ~16 min)

| # | Sección | Slides |
|---|---|---|
| 00 | Apertura | Antesala (video en bucle) · Portada |
| 01 | El problema | Cada PO trae preguntas · Reglas vs LLM · **Video** LLM vs modelo de decisión |
| 02 | La idea | Sistema 1 y 2 · No escribe, elige · Calibrado |
| 03 | JEV y Laya | Dos caminos · Laya por dentro · Comparación · Lo que no son |
| 04 | Nuestro OCR hoy | **Video** flujo de una PO · Dónde nos duele |
| 05 | Dónde encaja | El principio · **Video** capa de decisión · Seis ideas · De extraer a elegir · Lo que no haríamos |
| 06 | Cómo lo haríamos | Arquitectura · Plan por fases |
| 07 | Cierre | Tres ideas · Preguntas (antesala de fondo) |

## Dónde va cada cosa

- `src/slides/*.js`: contenido de cada slide, sus pasos (`data-step`, animaciones progresivas) y las notas del guion.
- `src/sections.js`: secciones y tiempo tope de cada una.
- `src/styles.css` / `src/slides.css`: paleta de Apparel Links y estilos de cada slide.
- `videos/<nombre>/index.html`: fuente de cada video motion (HyperFrames + GSAP):
  - `antesala`: pieza de lanzamiento en bucle (caos de POs → Laya → carriles → marca).
  - `llm-vs-system1`: un LLM escribiendo vs un modelo de decisión eligiendo.
  - `flujo-ocr`: cómo viaja hoy una PO y sus cuatro puntos de dolor.
  - `capa-decision`: la capa de Laya priorizando la cola de revisión.
- `public/media/motion/*.mp4`: videos renderizados.

Para volver a renderizar (requiere FFmpeg; descarga HyperFrames con npx):

```bash
npm run render:videos             # todos
npm run render:videos -- flujo-ocr  # uno
```

Para previsualizar un video mientras se edita: `npm run dev` dentro de `videos/<nombre>/`.
# jev-laya-presentation
