'use strict';

let Page = require('./base_page');
const locator = require('../utils/locator');
const fake = require('../utils/fake_data');

let resultStat, txtAction, btnAction, selectAction;

Page.prototype.click = async function(el){
  btnAction = await this.find(el);
  await btnAction.click();
};

Page.prototype.divAgree = async function(){
  await this.click(locator.btnAgree);
  resultStat = await this.find(locator.divAgree);
};

Page.prototype.pageTitle = async function(){
  resultStat = await this.driver;
  return await this.driver.wait(async () => {
    return await resultStat.getTitle();
}, 5000);
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
};

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
};

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
};

Page.prototype.infoAccolades = async function(){
  resultStat = await this.find(locator.infoAccolades);
  return await this.driver.wait(async () => {
    return {
      textCSS: await resultStat.getCssValue('width'),
      textDisplayed: await resultStat.isDisplayed()
    }
  }, 5000);
};

Page.prototype.imgAccolades = async function(){
  resultStat = await this.find(locator.imgAccolades);
  return await this.driver.wait(async () => {
    return {
      imgAlt: await resultStat.getAttribute('alt'),
      imgSrc: await resultStat.getAttribute('data-src')
    }
  }, 5000);
};

Page.prototype.divImg = async function(){
  resultStat = await this.find(locator.divImg);
  return await this.driver.wait(async () => {
    return {
      imgRect: await resultStat.getRect(),
      imgTagName: await resultStat.getTagName()
    }
  }, 5000);
};

Page.prototype.inputSearch = async function(){
  await this.click(locator.navOnlineDegrees);
  resultStat = await this.find(locator.inputSearch);
  return await this.driver.wait(async () => {
    return {
      inputTitle: await resultStat.getAttribute('title'),
      inputPlaceHolder: await resultStat.getAttribute('placeholder'),
    }
  }, 5000);
};

Page.prototype.selectMain = async function(){
  resultStat = await this.find(locator.optionMain);
  return await this.driver.wait(async () => {
    return {
      optText: await resultStat.getText(),
      optValue: await resultStat.getAttribute('value'),
    }
  }, 5000);
};

Page.prototype.btnMain = async function(){
  resultStat = await this.find(locator.btnStarted);
  return await this.driver.wait(async () => {
    return {
      btnText: await resultStat.getText(),
      btnIsEnabled: await resultStat.isEnabled(),
    }
  }, 5000);
};

Page.prototype.navMain = async function(){
  resultStat = await this.find(locator.navMain);
  return await this.driver.wait(async () => {
    return {
      navTagName: await resultStat.getTagName(),
      navRole: await resultStat.getAttribute('role'),

    }
  }, 5000);
};

module.exports = Page;