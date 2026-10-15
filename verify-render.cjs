// One-off visual verification: boot the Vite preview, screenshot the square UI.
const { chromium } = require('@playwright/test')
const { spawn } = require('node:child_process')

async function waitForServer(url, timeoutMs) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url)
      if (res.ok) return true
    } catch {
      /* not ready yet */
    }
    await new Promise((r) => setTimeout(r, 400))
  }
  return false
}

;(async () => {
  const server = spawn('npx', ['vite', 'preview', '--port', '4176'], {
    cwd: 'D:\\School\\Extra\\KELA\\KELA',
    shell: true,
    stdio: 'ignore',
  })

  try {
    const ok = await waitForServer('http://localhost:4176/', 20000)
    if (!ok) throw new Error('preview server did not start')

    const browser = await chromium.launch()
    const page = await browser.newPage({ viewport: { width: 1000, height: 1000 } })
    const errors = []
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text())
    })
    page.on('pageerror', (e) => errors.push(String(e)))

    await page.goto('http://localhost:4176/', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1500)

    const brand = await page.textContent('h1')
    const questHeading = await page.textContent('h2')
    const mainBox = await page.locator('main').boundingBox()

    await page.screenshot({ path: 'kela-render.png' })
    await browser.close()

    console.log('BRAND=' + brand)
    console.log('FIRST_H2=' + questHeading)
    console.log('MAIN_SIZE=' + JSON.stringify(mainBox))
    console.log('CONSOLE_ERRORS=' + JSON.stringify(errors))
  } finally {
    server.kill()
  }
})()
