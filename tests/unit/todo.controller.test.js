const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");

TodoModel.create = jest.fn();

describe('TodoController.createTodo', () => {
  test("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  test("should call TodoModel.create", () => {
    TodoController.createTodo();
    expect(TodoModel.create).toBeCalled();
  });
});