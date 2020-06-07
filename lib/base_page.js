'use strict';

const { Builder, By, until } = require('selenium-webdriver');

const Page = function(){

  this.driver = new Builder().forBrowser('firefox').build();

  this.visit = async (url) => {
    return await this.driver.get(url);
  };

  this.quit = async () => {
    return await this.driver.quit();
  };

  this.find = async (el) => {
    await this.driver.wait(until.elementLocated(By.css(el)));
    return await this.driver.findElement(By.css(el));
  };

  this.findAll = async (el) => {
    await this.driver.wait(until.elementLocated(By.css(el)));
    return await this.driver.findElements(By.css(el));
  };

  this.write = async (el, txt) => {
    return await el.sendKeys(txt);
  };

};

module.exports = Page;