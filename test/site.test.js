'use strict';

const { describe, it, after, before } = require('mocha');
const Page = require('../lib/home_page');
const assert = require('assert');

(async function tests(){
  try {
    describe('testing', () => {

      this.timeout(50000);
      let page;

      beforeEach(async () => {
        page = new Page();
        await page.visit('https://asuonline.asu.edu');
      });
    
      afterEach(async () => {
        await page.quit();
      });
      
      it('test #1 - submit get started today', async () => {
        const result = await page.checkSelects();
        assert.ok(result);
      });
    
    });

  } catch (ex){
    console.log (new Error(ex.message));
  } finally {
  }
});