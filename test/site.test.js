'use strict';
// --reporter mochawesome --reporter-options autoOpen=true
const { describe, it, after, before } = require('mocha');
const Page = require('../lib/home_page');
const assert = require('assert');
const { equal } = require('assert');


process.on('unhandledRejection', () => {});

(async function example(){
  try {
    describe('Testing ASU Online', async function(){

      this.timeout(50000);
      let page;

      beforeEach(async () => {
        page = new Page();
        await page.visit('https://asuonline.asu.edu');
        await page.divAgree();
      });
    
      afterEach(async () => {
        await page.quit();
      });

      it('test #1 - get started today', async () => {
        const result = await page.getStarted1st();
        assert(result);
      });

      it('test #2 - newsroom > search ', async () => {
        const result = await page.searchNewsRoom();
        assert(result);
      });

      it('test #3 - cost > title', async () => {
        const result = await page.getCostCard();
        equal(result.textCard, 'Undergraduate');
        assert(result.cardDisplayed);
      });

      it('test #4 - about > div corona', async () => {
        const result = await page.getDivAndLink();
        assert(result.divDisplayed);
        equal(result.linkCorona, 'https://www.asu.edu/about/fall-2020');
      });
    
    });
  } catch (ex){
    console.log (new Error(ex.message));
  }
})();