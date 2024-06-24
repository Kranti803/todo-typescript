import { createContext } from "react";
import { TodosType, TodoContextType } from "../types/types";

const initialTodos: TodosType = [];
const initialSingleTodo: TodosType = [];

const initialTodoContext: TodoContextType = {
  todos: initialTodos,
  setTodos: () => {},
  deleteTodo: () => {},
  completedTodo: () => {},
  handleTodoEdit: () => {},
  singleTodo: initialSingleTodo,
  editTodo: () => {},
};

const TodoContext = createContext<TodoContextType>(initialTodoContext);

export default TodoContext;
