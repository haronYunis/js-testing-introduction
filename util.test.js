const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

it('generate some text', () => {
    const text = generateText('john', 29);
    expect(text).toBe('john (29 years old)');
})
it('checking for false ', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
})

it('should output a valid text option.', () => {
    const text = checkAndGenerate('john', 25);
    expect(text).toBe('john (25 years old)');
})

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('file:///C:/Users/USER/Documents/js-testing-introduction/index.html');

    await page.click('input#name')
    await page.type('input#name', 'John');
    await page.click('input#age')
    await page.type('input#age', '25');
    await page.click('#btnAddUser')
});
