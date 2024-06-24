import { Dispatch, SetStateAction } from "react";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}
export type TodosType = Todo[];

export type TodoContextType = {
  todos: TodosType | null;
  setTodos: Dispatch<SetStateAction<TodosType>>;
  deleteTodo: (id: number, myTodos: TodosType) => void;
  completedTodo: (id: number, myTodos: TodosType) => void;
  handleTodoEdit: (id: number, myTodos: TodosType) => void;
  singleTodo: TodosType;
  editTodo: (id: number, myTodos: TodosType, title: string) => void;
};
