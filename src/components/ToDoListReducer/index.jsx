import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./style.module.scss";
import TaskReducer from "../TaskReducer";

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
      const newState = {
        ...initialState,
        taskList: [...state.taskList, taskList],
      };
      return newState;
    }

    case "delete_task": {
      const newTaskList = state.taskList.filter(
        (_, index) => index !== action.payload
      );
      const newState = { ...initialState, taskList: [...newTaskList] };
      return newState;
    }

    case "done_task": {
      const newState = state.taskList.map((obj) => {
        console.log(obj.id);
        console.log(action.payload);
        if (obj.id === action.payload) {
          return { ...obj, status: true };
        }
        return obj;
      });
      const newValue = { ...initialState, taskList: [...newState] };
      return newValue;
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
    <div className={styles.divToDo}>
      <input
        type="text"
        value={state.newTask}
        onChange={handleTaskText}
        className={styles.inputTask}
      />
      <button
        className={styles.btnAddTask}
        onClick={() => dispatch({ type: "add_task" })}
      >
        Add Task
      </button>
      <TaskReducer list={state.taskList} dispatch={dispatch} />
    </div>
  );
};

export default TodoListReducer;
