import TodoItem from "./TodoItem";

const TodosList = ({ todos, deleteTodo, toggleTodo, enterEditMode }) => {
  return (
    <ul className="max-w-[80vw] min-w-[500px] p-5 my-3 mx-auto border-4 border-double rounded border-green-600">
      {todos.map((todo, i) => (
        <span key={i}>
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            enterEditMode={enterEditMode}
          />
          {i != todos.length - 1 && (
            <div className="m-1 border-b border-dotted"></div>
          )}
        </span>
      ))}
    </ul>
  );
};

export default TodosList;
