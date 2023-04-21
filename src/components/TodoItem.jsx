import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);

  function handleChange(evt) {
    setIsChecked((isChecked) => !isChecked);
    toggleTodo(todo.id);
  }

  return (
    <li className="w-full text-green-900 flex flex-row flex-wrap justify-center border-s border-e px-4">
      <div className="grow max-w-[80%] flex gap-1">
        <input
          className="appearance-none bg-white my-auto border border-current rounded grid place-content-center hover:cursor-pointer"
          type="checkbox"
          name={todo.name}
          checked={isChecked}
          id={todo.id}
          onChange={handleChange}
        />
        <label htmlFor={todo.id} className="max-w-[80%] mb-1 hover:cursor-pointer">
          {isChecked ? (
            <span className="line-through break-words">{todo.name}</span>
          ) : (
            <span className="break-words">{todo.name}</span>
          )}
        </label>
      </div>
      <div className="flex gap-1">
        <button
          className="bg-green-900 hover:bg-green-700 rounded border h-5 w-5 my-auto"
          aria-label={`Update ${todo.name} todo`}
          onClick={() => enterEditMode(todo)}
        >
          <PencilIcon className="h-2.5 w-2.5 mx-auto text-white" />
        </button>
        <button
          className="bg-green-900 hover:bg-green-700 rounded border h-5 w-5 my-auto"
          aria-label={`Delete ${todo.name} todo`}
          onClick={() => deleteTodo(todo.id)}
        >
          <TrashIcon className="h-2.5 w-2.5 mx-auto text-white" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
