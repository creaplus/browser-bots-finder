const puppeteer = require('puppeteer');

// API文档 https://zhaoqize.github.io/puppeteer-api-zh_CN/

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        timeout: 0 // 30s 0 来禁用超时
    });
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36")
    await page.goto('https://antoinevastel.com/bots/');

    setTimeout(() => {
        page.screenshot({ path: 'fingerprint.png', fullPage: true });
    }, 3000)
    // await browser.close();
})();