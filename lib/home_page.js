'use strict';

let Page = require('./base_page');
const locator = require('../utils/locator');
const fake = require('../utils/fake_data');

let resultStat, txtAction, btnAction, selectAction;

Page.prototype.click = async function(el){
  btnAction = await this.find(el);
  await btnAction.click();
}

Page.prototype.divAgree = async function(){
  await this.click(locator.btnAgree);
  resultStat = await this.find(locator.divAgree);
};

Page.prototype.getStarted1st = async function(){
  await this.click(locator.selectDegree);
  await this.click(locator.selectArea);
  await this.click(locator.selectProgram);
  await this.click(locator.btnStarted);
  resultStat = await this.find(locator.divResult);
  return await this.driver.wait(async () => {
      return await resultStat.isDisplayed();
  }, 5000);
};

Page.prototype.searchNewsRoom = async function(){
  await this.click(locator.navNewsRoom);
  txtAction = await this.find(locator.txtNewsRoom);
  await this.write(txtAction, fake.loremKeyword);
  await this.click(locator.btnNewsRoom);
  resultStat = await this.find(locator.searchPage);
  return await this.driver.wait(async () => {
      return await resultStat.isDisplayed();
  }, 5000);
}

Page.prototype.getCostCard = async function(){
  await this.click(locator.navCost);
  resultStat = await this.find(locator.cardCost);
  const titleCard = await this.find(locator.titleCard);
  return await this.driver.wait(async () => {
      return {
        cardDisplayed: await resultStat.isDisplayed(),
        textCard: await titleCard.getText()
      }
  }, 5000);
}

Page.prototype.getDivAndLink = async function(){
  await this.click(locator.navAbout);
  await this.click(locator.btnAbout);
  resultStat = await this.find(locator.divAbout);
  const linkCorona = await this.find(locator.linkAbout);
  return await this.driver.wait(async () => {
      return {
        divDisplayed: await resultStat.isDisplayed(),
        linkCorona: await linkCorona.getAttribute('href')
      }
  }, 5000);
}

module.exports = Page;