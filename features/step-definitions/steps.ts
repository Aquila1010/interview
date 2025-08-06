import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}
type pageName = keyof  typeof pages;

Given(/^I am on the (\w+) page$/, async (page: pageName) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    expect (await (SecurePage.getFlashMessageText())).toBeExisting()
    expect (await (SecurePage.getFlashMessageText())).toHaveText(expect.stringContaining(message));
});

