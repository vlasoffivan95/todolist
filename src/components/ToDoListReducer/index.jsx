import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case "new_task": {
      const newState = { ...state, newTask: action.payload };
      return newState;
    }
    case "add_task": {
      const newTask = state.newTask;
      const taskList = { id: uuid(), text: newTask, status: false };
      const newState = {...initialState, taskList:[...state.taskList, taskList]};
      return newState;
    }

    default:
      return state;
  }
}

const initialState = { taskList: [], newTask: "" };
const TodoListReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTaskText = ({ target: { value } }) =>
    dispatch({ type: "new_task", payload: value });

  return (
    <div>
      <input type="text" value={state.newTask} onChange={handleTaskText} />
      {state.newTask}
      <button onClick={() => dispatch({ type: "add_task" })}>Add Task</button>
    </div>
  );
};

export default TodoListReducer;
