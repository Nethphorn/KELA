import { expect, test } from '@playwright/test'

test('home page greets a visitor', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'KELA' })).toBeVisible()
  await expect(
    page.getByText('Hello from the KELA React template server.'),
  ).toBeVisible()
})
