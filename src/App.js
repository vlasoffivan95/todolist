import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ToDolist from "./components/TodoList";
import Header from "./pages/Header";
import TodoListReducer from "./components/ToDoListReducer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/todolist" component={ToDolist} exact />
          <Route path="/todolistreducer" component={TodoListReducer} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
