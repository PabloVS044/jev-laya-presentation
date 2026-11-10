// Isotipo de Apparel Links (hexágono con la "A") redibujado en SVG para que se vea nítido a cualquier tamaño.
export function logoMark(size = 120) {
  return `<svg class="logo-mark" viewBox="0 0 100 110" width="${size}" height="${(size * 110) / 100}" aria-label="Apparel Links">
    <defs>
      <linearGradient id="lg-hex" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#22aefb" /><stop offset="1" stop-color="#0077c8" />
      </linearGradient>
    </defs>
    <path d="M50 4 92 28v54L50 106 8 82V28L50 4Z" fill="none" stroke="#005a97" stroke-width="9" stroke-linejoin="round" />
    <path d="M50 24 74 38v34L50 86 26 72V38L50 24Z" fill="url(#lg-hex)" />
    <path d="M40.5 69 50 41l9.5 28M44 60h12" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`
}

export function logoFull(size = 120) {
  return `<div class="logo-full">${logoMark(size)}<span><b>APPAREL</b> LINKS, S.A.</span></div>`
}
