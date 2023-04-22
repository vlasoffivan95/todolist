import React from "react";
import { Link } from "react-router-dom";
import styles from './style.module.scss'

const Header = () => {
  return (
    <div className={styles.divContainer}>
        <ul className={styles.ulContainer}>
      <li className={styles.liContainer}><Link to="/"> Home</Link></li>
      <li className={styles.liContainer}><Link to="/todolist"> ToDoList UseState</Link></li>
      <li className={styles.liContainer}><Link to="/todolistreducer"> ToDoList UseReducer</Link></li>
      </ul>
    </div>
  );
};

export default Header;
