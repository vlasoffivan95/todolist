import React from "react";
import styles from "../ToDoListReducer/style.module.scss";

const TaskReducer = (props) => {
  const { list, dispatch } = props;
  const tasksList = list.map((value, index) => (
    <li key={value.id} className={!value.status? styles.taskContainer : styles.taskContainerDone}>
      <section>{value.text}</section>
      <div>
      <button className={styles.btnDel} onClick={() => dispatch({ type: "delete_task", payload: index })}>
        Delete
      </button>
      <button className={styles.btnDone} onClick={() => dispatch({ type: "done_task", payload: value.id })}>Done</button>
      </div>
    </li>
  ));

  return (

      <ul>{tasksList}</ul>
  );
};

export default TaskReducer;
