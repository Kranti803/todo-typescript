import { MdEdit, MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import { TodosType } from "../types/types";

const TodoContainer = () => {
  
  const [myTodos, setMyTodos] = useState<TodosType>([]);

  const { todos, deleteTodo, completedTodo, handleTodoEdit } =
    useContext(TodoContext);

  useEffect(() => {
    const localStorageTodos: TodosType = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    setMyTodos(localStorageTodos);
  }, [todos]);

  return (
    <section className="todo_container">
      {myTodos?.map((item) => (
        <div key={item.id}>
          <div>
            <input
              type="checkbox"
              onClick={() => completedTodo(item?.id, myTodos)}
            />
            <p
              className={
                item.isCompleted ? "todoCompleted" : "todoNotCompleted"
              }
            >
              {item.title}
            </p>
          </div>
          <div>
            <button onClick={() => handleTodoEdit(item.id, myTodos)}>
              <MdEdit size={20} />
              Edit
            </button>
            <button onClick={() => deleteTodo(item?.id, myTodos)}>
              <MdDelete size={20} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoContainer;
