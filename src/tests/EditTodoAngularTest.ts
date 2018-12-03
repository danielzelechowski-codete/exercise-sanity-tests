import {BrowserUtils, Reporter, TestUtils} from "wdio-allure-ts";
import {TodoAngularPage} from "../pages/TodoAngularPage";
import {BASE_URL, describeCommon} from "../utils/TestHelper";

/**
 * Scenario: Editing can change the text of todo items
 */
describeCommon("EditTodoAngularTest", () => {
    const itemValue: string = TestUtils.randomString(10);

    beforeEach(() => {
        Reporter.step("Validate a url");
        BrowserUtils.expectCurrentUrl(BASE_URL);

        Reporter.step("Navigate to the Angular implementation");
        TodoAngularPage.navigate();

        Reporter.step(`Add a new item with text ${itemValue}`);
        TodoAngularPage.addNewItem(itemValue);

        Reporter.step("Validate the new added item is visible");
        TodoAngularPage.todo(itemValue).isVisible();

    });

    it("Edit the todo item", () => {
        const addedValue: string = " edited";
        Reporter.step(`Edit the item ${addedValue}`);
        TodoAngularPage.editItem(addedValue);

        Reporter.step("Validate the edited item is visible");
        TodoAngularPage.todo(itemValue + addedValue).isVisible();
    });

    afterEach(() => {
        TodoAngularPage.removeAll();
        TodoAngularPage.expectListEmpty();
    });
});
