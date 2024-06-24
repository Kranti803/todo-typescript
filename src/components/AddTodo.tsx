import { useEffect, useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { TodosType } from "../types/types";

const AddTodo = () => {
  const { todos, setTodos, singleTodo, editTodo } = useContext(TodoContext);
  const [title, setTitle] = useState<string>("");
  const [myTodos, setMyTodos] = useState<TodosType>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (singleTodo.length > 0 && title.length > 0) {
      editTodo(singleTodo[0].id, myTodos, title);
      setTitle("");
      return;
    }

    const id: number = Math.ceil(Math.random() * 100000);

    if (title.length > 0) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id, title, isCompleted: false },
      ]);
    }
    setTitle("");
  };

  useEffect(() => {
    if (todos && todos.length > 0)
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (singleTodo && singleTodo.length > 0) {
      const localStorageTodos: TodosType = JSON.parse(
        localStorage.getItem("todos") || "[]"
      );
      setMyTodos(localStorageTodos);
      setTitle(singleTodo[0].title);
    }
  }, [singleTodo]);

  return (
    <div className="todo">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form_input"
          placeholder="Add todo..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
