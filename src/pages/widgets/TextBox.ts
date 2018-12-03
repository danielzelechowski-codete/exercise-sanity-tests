import {BrowserUtils, Reporter, SpecialKeys} from "wdio-allure-ts";

/**
 * Text box widget
 */
export class TextBox {
    private selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Add value passed to function and add 'Enter' to submit the text
     * @param value value to add to text box
     */
    public addValue(value: string): void {
        Reporter.debug("Will add text to text box");
        BrowserUtils.sendText(this.selector, `${value}${SpecialKeys.Enter}`);
    }

    /**
     * Click TextBox
     */
    public click(): void {
        Reporter.debug("Will click text box");
        BrowserUtils.click(this.selector);
    }

    /**
     * Click twice TextBox
     */
    public doubleClick(): void {
        Reporter.debug("Will click twice checkbox");
        BrowserUtils.doubleClick(this.selector);
    }
}
