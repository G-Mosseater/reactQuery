import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";
import todoService from "../services/todoService";
import { Todo } from "../services/todoService";


  
const useTodos = () => {


    // const fetchTodos = () => 
        // axios
        // .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        // .then(res=>res.data)
      
      return  useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn:  todoService.getAll
      })


}

export default useTodos