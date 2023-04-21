import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const EditForm = ({ editedTodo, updateTodo, closeEditMode }) => {
  const [updatedTodoName, setUpdatedTodoName] = useState(editedTodo.name);

  useEffect(() => {
    const closeModalIfEscaped = (evt) => {
      evt.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", closeModalIfEscaped);
    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    updateTodo({ ...editedTodo, name: updatedTodoName });
  }

  function handleInput(evt) {
    setUpdatedTodoName(evt.target.value);
  }

  return (
    <div
      role="dialog"
      className="fixed inset-0 z-50 backdrop-blur"
      aria-labelledby="editTodo"
      onClick={(evt) => {
        evt.target === evt.currentTarget && closeEditMode();
      }}
    >
      <form
        className="todo-edit-form bg-green-400 text-green-900"
        onSubmit={handleFormSubmit}
      >
        <div className="form-wrapper absolute left-1/2 -translate-x-1/2 top-1/4 flex flex-col items-center gap-1 p-4 bg-gradient-to-t from-white via-transparent to-white from-5% via-50% to-90% rounded-xl">
          <label htmlFor="editTodo" className="label">
            Update the todo:
          </label>
          <textarea
            type="text"
            id="editTodo"
            className="input w-[20ch] h-[15ch] input px-2 rounded focus:ring focus:outline-none focus:ring-green-900 placeholder:text-green-600"
            placeholder="Update todo"
            value={updatedTodoName}
            maxLength={60}
            onInput={handleInput}
            required
            autoFocus
          />
          <button
            className="btn bg-green-900 hover:bg-green-700 rounded border h-5 w-5 my-auto"
            aria-label={`Confirm edited todo to now read ${updatedTodoName}`}
            type="submit"
          >
            <CheckIcon className="h-4 w-4 mx-auto text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
