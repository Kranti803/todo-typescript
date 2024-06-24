import { ReactNode, useState } from "react";
import TodoContext from "./TodoContext";
import { TodosType } from "../types/types";

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodosType>([]);
  const [singleTodo, setSingleTodo] = useState<TodosType>([]);

  const deleteTodo = (id: number, myTodos: TodosType): void => {
    const remainingTodos = myTodos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
    if (todos.length == 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const completedTodo = (id: number, myTodos: TodosType) => {
    const updatedTodos = myTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleTodoEdit = (id: number, myTodos: TodosType) => {
    const Todo = myTodos.filter((todo) => todo.id === id);
    setSingleTodo(Todo);
  };

  const editTodo = (id: number, myTodos: TodosType, title: string) => {
    const updatedTodos = myTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: title };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
          deleteTodo,
          completedTodo,
          handleTodoEdit,
          singleTodo,
          editTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoContextProvider;
