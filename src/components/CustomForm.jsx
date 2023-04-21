import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CustomForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  function handleFormSubmit(evt) {
    evt.preventDefault();
    addTodo({
      name: todo,
      id: Date.now(),
      checked: false,
    });
    setTodo("");
  }

  function handleInput(evt) {
    setTodo(evt.target.value);
  }

  return (
    <form className="todo-form text-green-900" onSubmit={handleFormSubmit}>
      <div className="form-wrapper flex flex-row flex-wrap justify-center gap-1">
        <label htmlFor="todo" className="label">
          Write a todo:
        </label>
        <input
          type="text"
          id="todo"
          className="max-w-[90%] input px-2 rounded focus:ring focus:outline-none focus:ring-green-900 placeholder:text-green-600"
          placeholder="New todo"
          value={todo}
          maxLength={60}
          onInput={handleInput}
          required
          autoFocus
        />
        <button
          className="bg-green-900 hover:bg-green-700 rounded border h-5 w-5 my-auto"
          aria-label="Add todo"
          type="submit"
        >
          <PlusIcon className="h-4 w-4 mx-auto text-white" />
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
