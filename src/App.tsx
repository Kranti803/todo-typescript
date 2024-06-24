import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import TodoContextProvider from "./context/TodoContextProvider";

function App() {
  return (
    <>
      <TodoContextProvider>
        <div className="main_container">
          <AddTodo />
          <TodoContainer />
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
