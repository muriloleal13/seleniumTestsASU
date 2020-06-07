'use strict';

let Page = require('./base_page');
const locator = require('../utils/locator');
const fake = require('../utils/fake_data');

const selectDegree = locator.selectDegree;
const selectArea = locator.selectArea;
const selectProgram = locator.selectProgram;
const btnStarted = locator.btnStarted;
const divResult = locator.divResult;

const fakeNameKeyword = fake.nameKeyword;

Page.prototype.checkSelects = async () => {
  await this.find(selectDegree).click();
  await this.find(selectArea).click();
  await this.find(selectProgram).click();
  await this.find(btnStarted).click();
  const resultStat = await this.find(divResult);
  return await this.driver.wait(async () => {
      return await resultStat.isEnabled();
  }, 5000);
};

module.exports = Page;