import {BrowserUtils, Reporter, TestUtils} from "wdio-allure-ts";
import {TodoAngularPage} from "../pages/TodoAngularPage";
import {BASE_URL, describeCommon} from "../utils/TestHelper";

/**
 * Scenario: Todo items can be removed separately
 */
describeCommon("RemoveTodoAngularTest", () => {
    const randomValue: string = TestUtils.randomString(10);

    beforeEach(() => {
        Reporter.step("Validate a url");
        BrowserUtils.expectCurrentUrl(BASE_URL);

        Reporter.step("Navigate to the Angular implementation");
        TodoAngularPage.navigate();

        Reporter.step("Add new items");
        const numberOfItems: number = 2;
        TodoAngularPage.addNewItems(randomValue, numberOfItems);
    });

    it("Remove a Todo item", () => {
        const firstItemValue: string = `${randomValue}0`;
        Reporter.step(`Remove the first item ${firstItemValue}`);
        TodoAngularPage.removeItemFromList();

        Reporter.step("Validate the second item is visible");
        const secondItemValue: string =`${randomValue}1`;
        TodoAngularPage.todo(secondItemValue).isVisible();

        Reporter.step("Validate the item list contains one item");
        TodoAngularPage.expectOneItemINList()
    });

    afterEach(() => {
        TodoAngularPage.removeAll();
        TodoAngularPage.expectListEmpty();
    });
});
