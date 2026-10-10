import {test, expect} from '@playwright/test';

test('meesho automation', async ({ page }) => {
  await page.goto('https://supplier.meesho.com/panel/v3/new/growth/2rude/home');

  const email = process.env.MEESHO_EMAIL;
  // await page.getByLabel('Email Id or mobile number').fill(email);
    await page.getByLabel('Email Id or mobile number').fill('hardik.wagh333@gmail.com');
  const password = process.env.MEESHO_PASSWORD;
  // await page.getByLabel('Password').fill(password);
  await page.getByLabel('Password').fill('Hardik@3333');

  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByText('Pending Orders').click();
  
  // await page.waitForSelector('table tr');

  const table_visible = await page.locator('table tr');
  
  if(table_visible.isVisible()) {
    console.log("Table is visible");
    await page.locator('//input[@aria-label="select all rows"]').check();
    await page.getByRole('button', { name: 'Accept Selected Orders' }).click();

    await page.getByRole('button', { name: 'Accept Order', exact: true }).click();
  }
  else
  {
    console.log("No Pending orders");
  }
    
  
  await page.pause();

});