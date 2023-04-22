import React, { useState } from "react";
import styles from "./style.module.scss";
import Task from "../Task";
import { v4 as uuid } from "uuid";

const ToDolist = () => {
  const [tasksList, setTaskList] = useState([]);
  const [inputTask, setInput] = useState("");

  const addTaskInput = (e) => {
    const {
      target: { value },
    } = e;
    setInput(value);
  };

  const changeStatusTask = (id) => {
    setTaskList((prevstate) => {
      const newState = prevstate.map((obj) => {
        if (obj.id === id) {
          return { ...obj, status: true };
        }
        return obj;
      });
      return newState;
    });
  };

  const addTask = () => {
    setTaskList([
      ...tasksList,
      { id: uuid(), text: inputTask, status: false },
    ]);
    setInput("");
  };

  const removeTask = (id) => {
    const newTaskList = tasksList.filter((tasklist) => id !== tasklist.id);
    setTaskList(newTaskList);
  };

  const taskList = tasksList.map((tasks) => (
    <li key={tasks.id}>
      <Task
        id={tasks.id}
        text={tasks.text}
        status={tasks.status}
        deleteTask={removeTask}
        setStatus = {changeStatusTask}
      />
    </li>
  ));

  return (
    <div>
      <input
        type="text"
        className={styles.inputTask}
        onChange={addTaskInput}
        placeholder="Input Task"
        name="addtask"
        value={inputTask}
      ></input>
      <div> {taskList}</div>
      <button className={styles.btnClick} onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default ToDolist;
