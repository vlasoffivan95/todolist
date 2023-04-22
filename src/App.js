import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ToDolist from "./components/TodoList";
import Header from "./pages/Header";

function App() {
  return (
    <>

      <BrowserRouter>
      <Header / >
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/todolist" component={ToDolist} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
