import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../redux/actions/todoActions";

const TodoInput = () => {
  const dispatch = useDispatch(); /* This dispatch function is already connect to the store */
  const [todo, setTodo] = useState("");
  function addTodoToStore() {
    dispatch(addTodoActionCreator(todo));
  }

  return (
    <>
      <input
        type="text"
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />
      <button onClick={addTodoToStore}>Add Todo</button>
    </>
  );
};

export default TodoInput;
