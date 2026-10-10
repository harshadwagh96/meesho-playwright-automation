import {test, expect} from '@playwright/test';

test('meesho automation', async ({ page }) => {
  await page.goto('https://supplier.meesho.com/panel/v3/new/growth/2rude/home');

  await page.getByLabel('Email Id or mobile number').fill('Hardik.wagh333@gmail.com');
  await page.getByLabel('Password').fill('Hardik@333');

  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByText('Pending Orders').click();
  
  // await page.waitForSelector('table tr');

  const table_visible = await page.locator('table tr');
  
  if(table_visible.isVisible()) {
    console.log("Table is visible");
    // await page.locator('//input[@aria-label="select all rows"]').check();
    await page.locator('//input[@aria-label="Select row 0"]').check();
  }
  else
  {
    console.log("No Pending orders");
  }
    
  
  await page.pause();

});