import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */

    protected SELECTOR: Record<string, string> = {
        FLASH_MESSAGE: '#flash',
    }

    public get getFlashMessage() {
        return $(this.SELECTOR.FLASH_MESSAGE);
    }

    public async getFlashMessageText(): Promise<string> {
        return await this.getFlashMessage.getText();
    }


}

export default new SecurePage();
