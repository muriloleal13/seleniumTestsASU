'use strict';

const { Builder, By, until } = require('selenium-webdriver');

let Page = function(){

  this.driver = new Builder()
    .forBrowser('firefox')
    .build();

  this.visit = async function(url){
    return await this.driver.get(url);
  };

  this.quit = async function(){
    return await this.driver.quit();
  };

  this.find = async function(el){
    await this.driver.wait(until.elementLocated(By.css(el)));
    return await this.driver.findElement(By.css(el));
  };

  this.findAll = async function(el){
    await this.driver.wait(until.elementLocated(By.css(el)));
    return await this.driver.findElements(By.css(el));
  };

  this.write = async function(el, txt){
    return await el.sendKeys(txt);
  };

};

module.exports = Page;