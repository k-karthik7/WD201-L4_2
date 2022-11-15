let todoList = require("../todo.js");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("TodoList test cases", () => {
  beforeAll(() => {
    const today = new Date();
    // let yesterday=new Date(today);
    // yesterday.setDate(yesterday.getDate()-1)
    // yesterday.toLocaleDateString("en-CA")
    // let tomorrow=new Date(today);
    // tomorrow.setDate(tomorrow.getDate()+1)
    // tomorrow.toLocaleDateString("en-CA")
    [
      {
        title: "Submit assignment",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "File Taxes",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      }
    ].forEach(add);
  });
  test("Add new todo", () => {
    expect(all.length).toEqual(2);

    add({
      title: "Take the test",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(3);
  });

  test("Todo mark as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Test for overdue", () => {
    expect(overdue().length).toEqual(0);
  });

  test("Test due today", () => {
    expect(dueToday().length).toEqual(3);
  });

  test("Test for due later", () => {
    expect(dueLater().length).toEqual(0);
  });
});