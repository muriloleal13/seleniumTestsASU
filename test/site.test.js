'use strict';

const { describe, it, after, before } = require('mocha');
const Page = require('../lib/home_page');
const assert = require('assert');
const { equal } = require('assert');
const { deepStrictEqual } = require('assert').strict;

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

      it('test #01 - page title', async () => {
        const result = await page.pageTitle();
        equal(result, 'ASU Online | Arizona State University')
      });

      it('test #02 - get started today', async () => {
        const result = await page.getStarted1st();
        assert(result);
      });

      it('test #03 - newsroom > search ', async () => {
        const result = await page.searchNewsRoom();
        assert(result);
      });

      it('test #04 - cost > title', async () => {
        const result = await page.getCostCard();
        equal(result.textCard, 'Undergraduate');
        assert(result.cardDisplayed);
      });

      it('test #05 - about > div corona', async () => {
        const result = await page.getDivAndLink();
        assert(result.divDisplayed);
        equal(result.linkCorona, 'https://www.asu.edu/about/fall-2020');
      });

      it('test #06 - info accolades', async () => {
        const result = await page.infoAccolades();
        equal(result.textCSS, '380px');
        assert(result.textDisplayed);
      });
      
      it('test #07 - img accolades', async () => {
        const result = await page.imgAccolades();
        equal(result.imgAlt, 'Best Colleges U.S. News Most Innovative 2019');
        equal(result.imgSrc, '/assets/img/stats_logo.136e61a2.png');
      });

      it('test #08 - div img', async () => {
        const result = await page.divImg();
        const expectedRect = {
          x: 120.5, 
          y: 5102.2001953125,
          width: 461.6666870117187,
          height: 241.1999969482422 
        }
        deepStrictEqual(result.imgRect, expectedRect);
        equal(result.imgTagName, 'div');
      });

      it('test #09 - non degree > input search', async () => {
        const result = await page.inputSearch();
        equal(result.inputTitle, 'Search');
        equal(result.inputPlaceHolder, 'Search');
      });

      it('test #10 - option main', async () => {
        const result = await page.selectMain();
        equal(result.optText, 'Certificates');
        equal(result.optValue, 'certificates');
      });

      it('test #11 - btn main', async () => {
        const result = await page.btnMain();
        equal(result.btnText, 'Continue');
        deepStrictEqual(result.btnIsEnabled, false);
      });

      it('test #12 - nav cost', async () => {
        const result = await page.navMain();
        equal(result.navRole, 'navigation');
        equal(result.navTagName, 'nav')
      });
    
    });
  } catch (ex){
    console.log (new Error(ex.message));
  }
})();