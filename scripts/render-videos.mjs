// Renderiza los videos motion (videos/<nombre>/index.html) a public/media/motion/<nombre>.mp4.
// Uso: npm run render:videos [-- nombre1 nombre2]   (requiere FFmpeg)
import { execSync } from 'node:child_process'
import { readdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const all = readdirSync(resolve(root, 'videos')).filter((d) => existsSync(resolve(root, 'videos', d, 'index.html')))
const only = process.argv.slice(2)

for (const name of only.length ? only : all) {
  const out = resolve(root, 'public/media/motion', `${name}.mp4`)
  console.log(`\n▶ ${name} → ${out}`)
  execSync(`npx --yes hyperframes@0.8.216 render -o "${out}"`, { cwd: resolve(root, 'videos', name), stdio: 'inherit' })
}
