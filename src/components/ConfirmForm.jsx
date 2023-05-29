import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ConfirmForm = ({ editedTodo, deleteTodo, closeConfirmMode }) => {
  useEffect(() => {
    const closeModalIfEscaped = (evt) => {
      evt.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", closeModalIfEscaped);
    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeConfirmMode]);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    deleteTodo(editedTodo.id);
  }

  return (
    <div
      role="dialog"
      className="fixed inset-0 z-50 backdrop-blur"
      aria-labelledby="deleteTodo"
      onClick={(evt) => {
        evt.target === evt.currentTarget && closeConfirmMode();
      }}
    >
      <form
        className="todo-edit-form bg-green-400 text-green-900"
        onSubmit={handleFormSubmit}
      >
        <div className="form-wrapper absolute left-1/2 -translate-x-1/2 top-1/4 flex flex-col items-center gap-1 p-4 bg-gradient-to-t from-white via-transparent to-white from-5% via-50% to-90% rounded-xl">
          <label htmlFor="editTodo" className="label">
            Delete the todo:
          </label>
          <textarea
            disabled
            type="text"
            id="editTodo"
            className="input sm:w-[20ch] sm:h-[10ch] input px-2 rounded bg-white disabled:ring disabled:outline-none disabled:ring-green-900 placeholder:text-green-600 text-center"
            placeholder="Delete todo"
            value={editedTodo.name}
          />
          <div className="w-full flex flex-row justify-evenly">
            <button
            className="btn bg-green-900 hover:bg-green-700 rounded border h-5 w-5 my-auto"
            aria-label={`Cancel to delete todo ${editedTodo.name}`}
            type="button"
            onClick={closeConfirmMode}
          >
            <XMarkIcon className="h-4 w-4 mx-auto text-white" />
          </button>
          <button
            className="btn bg-green-900 hover:bg-green-700 rounded border h-5 w-5 my-auto"
            aria-label={`Confirm to delete todo ${editedTodo.name}`}
            type="submit"
          >
            <CheckIcon className="h-4 w-4 mx-auto text-white" />
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConfirmForm;