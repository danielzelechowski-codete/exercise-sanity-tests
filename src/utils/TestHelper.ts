import {BrowserUtils, Reporter} from "wdio-allure-ts";

export const BASE_URL: string = "http://todomvc.com/";

/**
 * Base describe wrap with navigation and reporter teardown
 * @param name test file name
 * @param body test context
 */
// tslint:disable-next-line:export-name
export function describeCommon(name: string, body: Function): void {

    describe(name, () => {
        beforeEach(() => {
            Reporter.step(`navigate to ${BASE_URL}`);
            BrowserUtils.navigateToUrl(BASE_URL);
        });

        /**
         * Test context
         */
        body(name);
    });
}
