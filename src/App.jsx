import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TodosList from "./components/TodosList";
import EditForm from "./components/EditForm";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalStorage("react-todo.todos", [{name: "Sooo empty", id: 0, checked: false}]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  function addTodo(todo) {
    setTodos((todos) => [todo, ...todos]);
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  function updateTodo(todo) {
    setTodos((todos) =>
      todos.map((el) => (el.id === todo.id ? { ...el, name: todo.name } : el))
    );
    closeEditMode();
  }

  function enterEditMode(todo) {
    setEditedTodo(todo);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  function closeEditMode() {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  return (
    <div className="min-h-[100vh] flex flex-col gap-4 bg-green-400 text-center p-4">
      <header className="text-white text-4xl my-3 hover:text-green-800 hover:cursor-default">
        <h1>My Todos List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTodo={editedTodo}
          updateTodo={updateTodo}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTodo={addTodo} />
      {todos && (
        <TodosList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
