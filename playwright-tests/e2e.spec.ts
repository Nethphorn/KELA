import { expect, test } from '@playwright/test'

test('home page shows the KELA kids header and greeting', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('KELA Kids')).toBeVisible()
  await expect(
    page.getByText('Ready to discover math magic today?'),
  ).toBeVisible()
})
