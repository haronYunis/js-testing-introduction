const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');
// checks if the generate text function is indeed creating some text. 
it('generate some text', () => {
    const text = generateText('john', 29);
    expect(text).toBe('john (29 years old)');
})
// false positive test.
it('checking for false ', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
})
// Testing data flow of the UI. Using puppeteer libray based on chromium
test('should create an element with text and the correct class', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('file:///C:/Users/USER/Documents/js-testing-introduction/index.html');

    await page.click('input#name')
    await page.type('input#name', 'John');
    await page.click('input#age')
    await page.type('input#age', '25');
    await page.click('#btnAddUser')
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('John (25 years old)')
}, 10000);
