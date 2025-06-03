import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
// import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/auth/LoginStatus";
// import taskReducer from "./state-management/tasks/taskReducer";
import TaskList from "./state-management/tasks/TaskList";
import TaskContext from "./state-management/tasks/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
// import authReducer from "./state-management/auth/authReducer";
// import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/auth/AuthProvider";
import { TaskProvider } from "./state-management/tasks";

function App() {



  


  return (
    <>
      <AuthProvider  >
      <TaskProvider>
      <NavBar/>
      <HomePage/>
      </TaskProvider>
      </AuthProvider >
    </>
  );
}

export default App;
