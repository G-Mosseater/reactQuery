import React from "react";
import { Task, TaskAction } from "./TaskProvider";
import { Dispatch } from "react";

interface TaskContextType {

    tasks: Task[],
    dispatch: Dispatch<TaskAction>
}


const TaskContext = React.createContext<TaskContextType>({} as TaskContextType)



export default TaskContext