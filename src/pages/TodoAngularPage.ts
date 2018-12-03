import {BrowserUtils} from "wdio-allure-ts";
import {ToDoItem} from "./ToDoItem";
import {Button} from "./widgets/Button";
import {CheckBox} from "./widgets/CheckBox";
import {TextBox} from "./widgets/TextBox";

const TODO_ANGULAR_URL: string = "http://todomvc.com/examples/angularjs/#/";
const NEW_TODO_TEXTBOX_SELECTOR: string =
    "//input[contains(@class,'new-todo')]";
const TODO_TEXTBOX_SELECTOR: string =
    "body > ng-view > section > section > ul > li:nth-child(1) > div > label";
const EDIT_VALUE_FIELD_SELECTOR: string =
    "body > ng-view > section > section > ul > li:nth-child(1) > form > input.edit";
const TOGGLE_CHECKBOX_SELECTOR: string =
    "body > ng-view > section > section > ul > li > div > input[type=checkbox]";
const REMOVE_ITEM_BUTTON: string =
    "body > ng-view > section > section > ul > li:nth-child(1) > div > button";
const newTodoTextBox: TextBox = new TextBox(NEW_TODO_TEXTBOX_SELECTOR);
const editTodoTextBox: TextBox = new TextBox(EDIT_VALUE_FIELD_SELECTOR);
const todoTextBox: TextBox = new TextBox(TODO_TEXTBOX_SELECTOR);
const toggleCheckbox: CheckBox = new CheckBox(TOGGLE_CHECKBOX_SELECTOR);
const removeItemButton: Button = new Button(REMOVE_ITEM_BUTTON);

/**
 * TODOmvc Angular page functionality
 */
export namespace TodoAngularPage {
    import expectNumberOfElements = BrowserUtils.expectNumberOfElements;

    /**
     * Navigate to the page
     */
    export function navigate(): void {
        BrowserUtils.navigateToUrl(TODO_ANGULAR_URL);
    }

    /**
     * Add new todo item
     */
    export function addNewItem(value: string): void {
        newTodoTextBox.addValue(value);
    }

    /**
     * Add new todo items
     */
    export function addNewItems(todoValue: string, numberOfItems: number): void {
        let n: number = 0;
        while (n < numberOfItems) {
            TodoAngularPage.addNewItem(todoValue + n.toString());
            n = n + 1;
        }
    }

    /**
     * Get Todo by it text value
     * @param todoValue Todo item's string
     */
    export function todo(todoValue: string): ToDoItem {
        return new ToDoItem(todoValue);
    }

    /**
     * Edit todo item text value
     */
    export function editItem(value: string): void {
        todoTextBox.doubleClick();
        editTodoTextBox.addValue(value);
    }

    /**
     * Remove todo item
     */
    export function removeItemFromList(): void {
        todoTextBox.click();
        removeItemButton.click();
    }

    /**
     * Remove all todo from list
     */
    export function removeAll(): void {
        toggleAllCheckBox().click();
        clearCompletedButton().click();
    }

    /**
     * Toggle todo item
     */
    export function toggleItem(): void {
        toggleCheckbox.click();
    }

    /**
     * Validate list has one item
     */
    export function expectOneItemINList(): void {
        expectNumberOfElements(".todo-list", 1);
    }

    /**
     * Validate list is empty
     */
    export function expectListEmpty(): void {
        clearCompletedButton().notVisible();
    }

    /**
     * Select completed Items
     */
    export function selectCompletedItems(): void {
        completedButton().click();
    }

    /**
     * Completed Items button
     */
    function completedButton(): Button {
        return new Button("body > ng-view > section > footer > ul > li:nth-child(3) > a");
    }

    /**
     * Toggle all checkbox
     */
    function toggleAllCheckBox(): CheckBox {
        return new CheckBox("//*[@for='toggle-all']");
    }

    /**
     * Clear all button
     */
    function clearCompletedButton(): Button {
        return new Button("//button[@class='clear-completed']");
    }
}
