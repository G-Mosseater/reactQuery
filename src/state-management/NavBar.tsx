import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/taskContext";
import useCounterStore from "./counter/store";


const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const  counter  = useCounterStore(s => s.counter);
  console.log('rendering navbar')

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary"> {counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
