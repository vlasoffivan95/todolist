import React from "react";
import styles from "./style.module.scss";

const Task = (props) => {
  const { id, text, status, deleteTask, setStatus } = props;
  console.log(status)
  return (
    <main className={!status? styles.taskContainer:styles.taskContainerDone}>
      <p>{text}</p>
      <div>
      <button className={!status? styles.btnDone: styles.nonActiveBtn} onClick={()=>setStatus(id)} disabled={!status?false:true}>
        Done
      </button>
      <button onClick={()=>deleteTask(id)} className={styles.btnDelete}>
        Delete
      </button>
      </div>
    </main>
  );
};

export default Task;
