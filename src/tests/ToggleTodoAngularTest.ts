import {BrowserUtils, Reporter, TestUtils} from "wdio-allure-ts";
import {TodoAngularPage} from "../pages/TodoAngularPage";
import {BASE_URL, describeCommon} from "../utils/TestHelper";

/**
 * Scenario: Uncompleted todo items should not be visible in the completed filter
 */
describeCommon("ToggleTodoAngularTest", () => {
    const randomValue: string = TestUtils.randomString(10);

    beforeEach(() => {
        Reporter.step("Validate url");
        BrowserUtils.expectCurrentUrl(BASE_URL);

        Reporter.step("Navigate to the Angular implementation");
        TodoAngularPage.navigate();

        Reporter.step("Add new items");
        const numberOfItems: number = 2;
        TodoAngularPage.addNewItems(randomValue, numberOfItems);

    });

    it("Complete the todo item", () => {
        Reporter.step(`toggle the first item ${randomValue}`);
        TodoAngularPage.toggleItem();

        Reporter.step(`Display a Completed list ${randomValue}`);
        TodoAngularPage.selectCompletedItems();

        Reporter.step("Validate the completed item is visible");
        const firstItemValue: string = `${randomValue}0`;
        TodoAngularPage.todo(firstItemValue).isVisible();

        Reporter.step("Validate the Completed list contains one item");
        TodoAngularPage.expectOneItemINList()
    });

    afterEach(() => {
        TodoAngularPage.removeAll();
        TodoAngularPage.expectListEmpty();
    });
});
