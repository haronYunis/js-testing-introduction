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

