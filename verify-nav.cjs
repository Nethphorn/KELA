// Temp verification: boot vite preview, open the lesson route, confirm the
// stepper renders, advance a few slides, and capture any console/page errors.
const { chromium } = require('@playwright/test')
const { spawn } = require('node:child_process')

async function waitForServer(url, timeoutMs) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url)
      if (res.ok) return true
    } catch {
      /* not ready */
    }
    await new Promise((r) => setTimeout(r, 400))
  }
  return false
}

;(async () => {
  const server = spawn('npx', ['vite', 'preview', '--port', '4179'], {
    cwd: 'D:\\School\\Extra\\KELA\\KELA',
    shell: true,
    stdio: 'ignore',
  })

  try {
    const ok = await waitForServer('http://localhost:4179/', 20000)
    if (!ok) throw new Error('preview server did not start')

    const browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1000, height: 1000 },
    })
    const errors = []
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text())
    })
    page.on('pageerror', (e) => errors.push(String(e)))

    await page.goto('http://localhost:4179/unit/unit-3', {
      waitUntil: 'networkidle',
    })
    await page.waitForTimeout(700)

    const firstLabel = await page.textContent('header').catch(() => null)
    const mainBox = await page.locator('main').boundingBox()
    await page.screenshot({ path: 'verify-slide-1.png' })

    // Advance 3 slides via the Next button.
    const next = page.getByRole('button', { name: /Next/ })
    for (let i = 0; i < 3; i++) {
      await next.click()
      await page.waitForTimeout(500)
    }
    const afterLabel = await page.textContent('header').catch(() => null)
    await page.screenshot({ path: 'verify-slide-4.png' })

    // Jump to an exercise and click an option.
    for (let i = 0; i < 6; i++) {
      await next.click()
      await page.waitForTimeout(300)
    }
    await page.screenshot({ path: 'verify-exercise.png' })

    await browser.close()

    const square =
      mainBox && Math.abs(mainBox.width - mainBox.height) < 2
        ? 'YES'
        : 'NO(' + JSON.stringify(mainBox) + ')'

    console.log('SQUARE=' + square)
    console.log('FIRST_HEADER=' + JSON.stringify(firstLabel))
    console.log('AFTER_HEADER=' + JSON.stringify(afterLabel))
    console.log('CONSOLE_ERRORS=' + JSON.stringify(errors))
  } finally {
    server.kill()
  }
})()
