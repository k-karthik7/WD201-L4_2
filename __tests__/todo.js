/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const todoList = require("../todo.js");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
const today = new Date();
describe("TodoList test cases", () => {
  beforeAll(() => {
    const today = new Date();
    [
      {
        title: "Submit assignment",
        completed: false,
        dueDate: new Date(
          new Date(today.setDate(today.getDate() - 1))
        ).toLocaleDateString("en-CA"),
      },
      {
        title: "File Taxes",
        completed: false,
        dueDate: new Date(
          new Date(today.setDate(today.getDate() - 1))
        ).toLocaleDateString("en-CA"),
      },
    ].forEach(add);
  });
  test("Add new todo", () => {
    expect(all.length).toBe(2);

    add({
      title: "Take the test",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(3);
  });

  test("Todo mark as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Test for overdue", () => {
    expect(overdue().length).toBe(2);
  });

  test("Test due today", () => {
    expect(dueToday().length).toBe(1);
  });

  test("Test for due later", () => {
    expect(dueLater().length).toEqual(0);
  });
});
