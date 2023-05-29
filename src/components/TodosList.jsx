import TodoItem from "./TodoItem";

const TodosList = ({ todos, enterConfirmMode, toggleTodo, enterEditMode }) => {
  return (
    <ul className="w-full max-w-[85vw] md:max-w-[60vw] min-w-[60vw] p-3 md:p-5 my-3 mx-auto border-4 border-double rounded border-green-600">
      {todos.map((todo, i) => (
        <div key={i}>
          <TodoItem
            key={todo.id}
            todo={todo}
            enterConfirmMode={enterConfirmMode}
            toggleTodo={toggleTodo}
            enterEditMode={enterEditMode}
          />
          {i != todos.length - 1 && (
            <div className="m-1 border-b border-dotted"></div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default TodosList;
